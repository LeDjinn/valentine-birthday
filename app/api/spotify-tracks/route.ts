import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const tracks = await prisma.spotifyTrack.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(tracks)
}
