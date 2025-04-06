import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'
import { v4 as uuid } from 'uuid'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const spotifyUrl = formData.get('spotifyUrl') as string
  const file = formData.get('image') as File | null

  let imageUrl = ''
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer())
    const blob = await put(`spotify-images/${uuid()}-${file.name}`, buffer, {
      access: 'public',
      contentType: file.type,
    })
    imageUrl = blob.url
  }

  const track = await prisma.spotifyTrack.create({
    data: { title, content, spotifyUrl, imageUrl },
  })

  return NextResponse.json(track)
}
