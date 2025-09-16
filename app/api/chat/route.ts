import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "chat endpoint not implemented yet" }, { status: 501 });
}
