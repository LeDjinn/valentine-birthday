"use client"

import { useEffect, useState } from "react"
import { Calendar } from "lucide-react"
import Image from "next/image"

type BlogPost = {
  id: string
  title: string
  content: string
  imageUrl: string
  createdAt: string
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const res = await fetch("/api/blog")

        if (!res.ok) {
          throw new Error("Failed to fetch posts")
        }

        const data = await res.json()
        setPosts(data)
      } catch (err) {
        setError("Something went wrong while loading posts")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <div className="p-4 bg-gray-100 dark:bg-gray-800">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 border-2 border-black dark:border-gray-600"></div>
              </div>
              <div className="p-6 space-y-3">
                <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded-none w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-none w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-none w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-100 dark:bg-red-900/30 border-4 border-red-600 dark:border-red-700 p-6 text-center shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] dark:shadow-[8px_8px_0px_0px_rgba(220,38,38,0.3)]">
          <h3 className="text-xl font-black text-red-800 dark:text-red-300 uppercase">Error</h3>
          <p className="mt-2 text-red-700 dark:text-red-400 font-bold">{error}</p>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-100 dark:bg-yellow-900/20 border-4 border-black dark:border-yellow-800 p-10 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(202,138,4,0.5)]">
          <h3 className="text-2xl font-black text-black dark:text-yellow-300 uppercase">No posts yet</h3>
          <p className="mt-2 text-black dark:text-yellow-400 font-bold">Be the first to create a blog post!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-5xl font-black text-center mb-12 uppercase tracking-tight text-black dark:text-white">
        <span className="bg-yellow-300 dark:bg-purple-700 px-4 py-2 -rotate-1 inline-block border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
          Blog Posts
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,0.5)] hover:-translate-y-1 hover:-translate-x-1"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="overflow-hidden border-2 border-black dark:border-gray-600">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center text-xs font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-1 mb-4">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                <time dateTime={post.createdAt}>
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h2 className="text-2xl font-black text-black dark:text-white mb-3 uppercase leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-black dark:text-gray-300 mb-6 font-medium">
                {post.content.length > 120 ? `${post.content.substring(0, 120)}...` : post.content}
              </p>


            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

