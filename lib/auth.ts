import { getServerSession } from "next-auth";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { authOptions } from "./authOption";

export async function auth() {
  return await getServerSession(authOptions);
}
const prisma = new PrismaClient();

export async function registerUser(email: string, password: string, name?: string) {
  const hashedPassword = await hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  });
}