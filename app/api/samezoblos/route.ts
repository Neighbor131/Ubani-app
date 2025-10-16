import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

const createSamezobloSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  radiusM: z.number().min(100).max(5000),
  description: z.string().optional()
});

export async function GET() {
  const groups = await prisma.samezoblo.findMany({
    include: {
      memberships: true
    }
  });

  return NextResponse.json({ groups });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = createSamezobloSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const samezoblo = await prisma.samezoblo.create({
    data: parsed.data
  });

  return NextResponse.json({ samezoblo }, { status: 201 });
}
