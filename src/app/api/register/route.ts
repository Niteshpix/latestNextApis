import User from "@/lib/models/user";
import dbConnect from "@/lib/mongo/db";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";

export async function POST(req: any, res: any) {
  try {
    const body = await req.json();
    await dbConnect();
    // Check if the user already exists
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already registered!" },
        { status: 400 }
      );
    }
    // Encode the password in base64
    body.password = Buffer.from(body.password).toString("base64");

    await User.create(body);

    return NextResponse.json(
      {
        message: "Registration done successfully!",
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
