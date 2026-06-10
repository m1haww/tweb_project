"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/marketing/blog-card"
import type { BlogPost } from "@/lib/data/blog-posts"

interface BlogRelatedPostsProps {
  posts: BlogPost[]
  currentSlug?: string
}

export function BlogRelatedPosts({ posts, currentSlug }: BlogRelatedPostsProps) {
  const related = posts.filter((post) => post.slug !== currentSlug).slice(0, 3)

  if (related.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Articole conexe
        </h2>
        <p className="text-sm text-muted-foreground">
          Daca ti-a placut acesta, probabil iti vor placea si urmatoarele.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {related.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </motion.section>
  )
}
