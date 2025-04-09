"use client"

import { useEffect, useState } from "react"
import { Music, ExternalLink, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Track {
  id: string
  title: string
  content: string
  spotifyUrl: string
  imageUrl?: string
  createdAt: string
}

export default function TracksList() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("/api/spotify-tracks")

        if (!response.ok) {
          throw new Error("Failed to fetch tracks")
        }

        const data = await response.json()
        setTracks(data)
      } catch (err) {
        setError("Failed to load tracks. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTracks()
  }, [])

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <div className="px-6 py-5 border-b-4 border-black dark:border-gray-700 bg-[#1DB954] dark:bg-[#1DB954]">
          <h2 className="text-2xl font-black text-black dark:text-black text-center uppercase tracking-tight flex items-center justify-center">
            <Music className="mr-2 h-6 w-6" />
            Shared Spotify Tracks
          </h2>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 text-[#1DB954] animate-spin" />
              <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">Loading tracks...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 font-bold">{error}</p>
            </div>
          ) : tracks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-bold text-gray-700 dark:text-gray-300">No tracks shared yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="border-2 border-black dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <div className="border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-700 p-2">
                        <Image
                          src={track.imageUrl || "/placeholder.svg?height=150&width=150"}
                          alt={track.title}
                          width={150}
                          height={150}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col">
                      <h3 className="text-xl font-bold text-black dark:text-white">{track.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2 flex-grow">{track.content}</p>
                      <div className="mt-4">
                        <Link
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#1DB954] text-black font-bold border-2 border-black hover:bg-[#1ed760] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Listen on Spotify
                        </Link>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Shared on {new Date(track.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
