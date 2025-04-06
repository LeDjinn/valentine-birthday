"use client"

import type React from "react"

import { useState } from "react"
import { Music, Upload, Link, X } from "lucide-react"
import Image from "next/image"

export default function ShareTrackForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [spotifyUrl, setSpotifyUrl] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setImage(file)

    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    } else {
      setPreviewUrl(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("content", content)
      formData.append("spotifyUrl", spotifyUrl)
      if (image) formData.append("image", image)

      const res = await fetch("/api/spotify-tracks/upload", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        alert("Track shared!")
        setTitle("")
        setContent("")
        setSpotifyUrl("")
        setImage(null)
        setPreviewUrl(null)
      } else {
        alert("Error sharing track.")
      }
    } catch (error) {
      alert("Error sharing track.")
      console.error("Something went wrong", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <div className="px-6 py-5 border-b-4 border-black dark:border-gray-700 bg-[#1DB954] dark:bg-[#1DB954]">
          <h2 className="text-2xl font-black text-black dark:text-black text-center uppercase tracking-tight flex items-center justify-center">
            <Music className="mr-2 h-6 w-6" />
            Share Spotify Track
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-bold text-black dark:text-white uppercase">
              Track Title
            </label>
            <input
              id="title"
              className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 focus:border-[#1DB954] dark:focus:border-[#1DB954] bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-200 outline-none"
              placeholder="Enter track title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-bold text-black dark:text-white uppercase">
              Track Description
            </label>
            <textarea
              id="content"
              className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 focus:border-[#1DB954] dark:focus:border-[#1DB954] bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-200 min-h-[120px] resize-y outline-none"
              placeholder="Why do you love this track?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="spotifyUrl" className="block text-sm font-bold text-black dark:text-white uppercase">
              Spotify URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Link className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                id="spotifyUrl"
                className="w-full pl-10 pr-4 py-3 border-2 border-black dark:border-gray-600 focus:border-[#1DB954] dark:focus:border-[#1DB954] bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-200 outline-none"
                placeholder="https://open.spotify.com/track/..."
                value={spotifyUrl}
                onChange={(e) => setSpotifyUrl(e.target.value)}
                required
              />
            </div>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
              Paste the Spotify track URL from the Share button in Spotify
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="image-upload" className="block text-sm font-bold text-black dark:text-white uppercase">
              Album Art (Optional)
            </label>

            {previewUrl ? (
              <div className="mt-2 relative">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-gray-600">
                  <Image
                    src={previewUrl || "/placeholder.svg"}
                    alt="Album Art Preview"
                    className="w-full h-64 object-contain border-2 border-black dark:border-gray-600"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setImage(null)
                    setPreviewUrl(null)
                  }}
                  className="absolute top-5 right-5 bg-red-500 text-white p-2 border-2 border-black hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="mt-1 border-2 border-dashed border-black dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-6">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-700 dark:text-gray-400" />
                  <div className="mt-4">
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold uppercase cursor-pointer hover:bg-[#1DB954] dark:hover:bg-[#1DB954] dark:hover:text-black transition-colors border-2 border-black dark:border-white hover:border-[#1DB954] dark:hover:border-[#1DB954]"
                    >
                      <span className="flex items-center">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Album Art
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                    {image ? image.name : "PNG, JPG, GIF up to 10MB"}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              className="w-full py-4 px-6 bg-[#1DB954] text-black border-2 border-black dark:border-black font-black text-lg uppercase tracking-wider hover:bg-[#1ed760] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sharing..." : "Share Track"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

