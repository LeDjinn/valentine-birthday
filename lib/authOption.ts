

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
const prisma = new PrismaClient();
export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "jsmith@example.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password");
          }
  
          console.log("📌 Checking user in database...");
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
  
          if (!user) {
            console.error("❌ No user found with this email");
            throw new Error("No user found with this email");
          }
  
          console.log("📌 Comparing passwords...");
          const isValid = await compare(credentials.password, user.password);
  
          if (!isValid) {
            console.error("❌ Invalid password");
            throw new Error("Invalid password");
          }
  
          console.log("✅ Login successful:", user.email);
          return user;
        },
      }),
    ],
    pages: {
      signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
  };


