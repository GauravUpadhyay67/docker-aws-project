import { NextResponse } from 'next/server';

// In-memory storage (resets on server restart — that's OK for now!)
const tasks = [
  { id: 1, title: "Learn Next.js", done: false },
  { id: 2, title: "Build Docker container", done: false },
  { id: 3, title: "Deploy to AWS", done: false },
];

export async function GET() {
  return NextResponse.json({ tasks });
}
