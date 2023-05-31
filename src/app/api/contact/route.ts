import Contact from "@/lib/models/contact";
import dbConnect from "@/lib/mongo/db";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  try {
    const body = await req.json();
    await dbConnect();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
