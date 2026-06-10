"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import type { BlogPost } from "@/lib/data/blog-posts"
import { BLOG_AUTHORS } from "@/lib/data/blog-authors"
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories"
import { BlogCategoryPill } from "@/components/marketing/blog-category-pill"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const author = BLOG_AUTHORS.find((a) => a.id === post.authorId)
  const category = BLOG_CATEGORIES.find((c) => c.id === post.categoryId)
  const formattedDate = new Date(post.date).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      {category && <BlogCategoryPill category={category} />}
      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/60 pt-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {author && (
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-[10px] font-semibold text-cyber-blue">
              {author.initials}
            </span>
          )}
          <span>{author?.name}</span>
          <span>·</span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {post.readTime} min
        </div>
      </div>
    </motion.article>
  )
}
