import dbConnect from "@/lib/mongo/db";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";
import User from "@/lib/models/user";
import jwt from "jsonwebtoken";

// Compare passwords function
function comparePasswords(password: string, encodedPassword: string) {
  const decodedPassword = Buffer.from(encodedPassword, "base64").toString();
  return password === decodedPassword;
}
export async function POST(req: any, res: any) {
  try {
    const body = await req.json();
    await dbConnect();

    // Find the user by email
    const user = await User.findOne({ email: body.email });

    // Check if the user exists and the password matches
    if (!user || !comparePasswords(body.password, user.password)) {
      return NextResponse.json(
        { message: "Invalid email or password!" },
        { status: 401 }
      );
    }
    const token = jwt.sign({ userId: user._id }, "secret-key", {
      expiresIn: "2d",
    });

    return NextResponse.json(
      {
        message: "Login successful!",
        token: token,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
