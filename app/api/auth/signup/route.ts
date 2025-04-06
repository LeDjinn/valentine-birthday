import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    console.log("📌 Signup API called");

    const { email, password, name } = await req.json();
    console.log("📌 Received Data:", { email, name });

    if (!email || !password) {
      console.error("❌ Missing fields");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });  // 🔹 Change "user" to "users"
    if (existingUser) {
      console.error("❌ Email already in use");
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    // Hash password before storing
    console.log("📌 Hashing password...");
    const hashedPassword = await hash(password, 10);

    // Store user in the database
    console.log("📌 Creating user in database...");
    const user = await prisma.user.create({  // 🔹 Change "user" to "users"
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    console.log("✅ User registered successfully:", user);
    return NextResponse.json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Signup error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
