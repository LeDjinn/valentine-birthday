"use client"

import type React from "react"
import { useState } from "react"
import { Upload, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function ImageForm() {
  const [image, setImage] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

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
      if (image) formData.append("image", image)

      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        alert("Blog posted!")
        setTitle("")
        setContent("")
        setImage(null)
        setPreviewUrl(null)
      } else {
        alert("Error posting blog.")
      }
    } catch (error) {
      alert("Error posting blog.")
      console.error("Something went wrong", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <div className="px-6 py-5 border-b-4 border-black dark:border-gray-700 bg-yellow-300 dark:bg-purple-800">
          <h2 className="text-2xl font-black text-black dark:text-white text-center uppercase tracking-tight">
            Postez une photo et ajoutez un commentaire
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-bold text-black dark:text-white uppercase">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-200 outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-bold text-black dark:text-white uppercase">
                Content
              </label>
              <textarea
                id="content"
                placeholder="Write your blog content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-200 min-h-[200px] resize-y outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image-upload" className="block text-sm font-bold text-black dark:text-white uppercase">
                {"Ajoutez l'image"}
              </label>

              {previewUrl ? (
                <div className="mt-2 relative">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-gray-600">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-64 object-contain border-2 border-black dark:border-gray-600"
                      width={256}
                      height={256}
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
                    ✕
                  </button>
                </div>
              ) : (
                <div className="mt-1 border-2 border-dashed border-black dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-6">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-700 dark:text-gray-400" />
                    <div className="mt-4">
                      <label
                        htmlFor="file-upload"
                        className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold uppercase cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-colors border-2 border-black dark:border-white hover:border-blue-600 dark:hover:border-blue-600"
                      >
                        <span className="flex items-center">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload a file
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      {image ? image.name : "PNG, JPG, GIF up to 4MB"}
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">Drag and drop your image here</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-black text-lg uppercase tracking-wider hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)]"
            >
              {isSubmitting ? "En cours..." : "Publiez"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

