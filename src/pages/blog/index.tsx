"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BlogCard } from "@/components/marketing/blog-card"
import { BlogCategoryPill } from "@/components/marketing/blog-category-pill"
import { BlogFeaturedCard } from "@/components/marketing/blog-featured-card"
import { BLOG_POSTS } from "@/lib/data/blog-posts"
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const featured = BLOG_POSTS.find((post) => post.featured)
  const rest = BLOG_POSTS.filter((post) => !post.featured)
  const visible = activeCategory
    ? rest.filter((post) => post.categoryId === activeCategory)
    : rest

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Blog Pulsar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ce invatam construind o platforma de mobile analytics — case studies, ghiduri tehnice si
            opinii despre piata.
          </p>
        </div>

        {featured && <BlogFeaturedCard post={featured} />}

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              activeCategory === null
                ? "border-cyber-blue bg-cyber-blue/20 text-cyber-blue"
                : "border-border bg-card/40 text-muted-foreground hover:border-cyber-blue/40"
            }`}
          >
            Toate
          </button>
          {BLOG_CATEGORIES.map((category) => (
            <BlogCategoryPill
              key={category.id}
              category={category}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
