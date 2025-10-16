import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

const createPostSchema = z.object({
  title: z.string().min(3),
  body: z.string().min(10),
  type: z.enum(["ERRAND", "ALERT", "LISTING", "LOST", "FOUND"]),
  tags: z.array(z.string()).default([]),
  authorId: z.string().cuid(),
  samezobloId: z.string().cuid()
});

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: { select: { fullName: true, badges: true } },
      samezoblo: { select: { name: true } }
    }
  });

  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = createPostSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: parsed.data
  });

  return NextResponse.json({ post }, { status: 201 });
}
