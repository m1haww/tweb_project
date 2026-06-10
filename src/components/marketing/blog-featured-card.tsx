"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/data/blog-posts"
import { BLOG_AUTHORS } from "@/lib/data/blog-authors"
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories"
import { BlogCategoryPill } from "@/components/marketing/blog-category-pill"

interface BlogFeaturedCardProps {
  post: BlogPost
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  const author = BLOG_AUTHORS.find((a) => a.id === post.authorId)
  const category = BLOG_CATEGORIES.find((c) => c.id === post.categoryId)
  const formattedDate = new Date(post.date).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-8 rounded-lg border border-cyber-blue/40 bg-card/60 p-8 backdrop-blur-sm transition-colors hover:border-cyber-blue/70 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyber-blue/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyber-blue">
            Featured
          </span>
          {category && <BlogCategoryPill category={category} />}
        </div>
        <h2
          className="mt-4 text-3xl font-bold leading-tight text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {post.title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{author?.name}</span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} min
          </span>
        </div>
        <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-cyber-blue px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90">
          Citeste articolul
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex aspect-video items-center justify-center rounded-md border border-border bg-gradient-to-br from-cyber-blue/10 via-card/60 to-card/40">
        <span
          className="text-7xl font-bold text-cyber-blue/40"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {post.id}
        </span>
      </div>
    </motion.article>
  )
}
