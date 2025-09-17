import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "import endpoint not implemented yet" }, { status: 501 });
}
