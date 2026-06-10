"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { BlogAuthorByline } from "@/components/marketing/blog-author-byline"
import { BlogCategoryPill } from "@/components/marketing/blog-category-pill"
import { BLOG_POSTS } from "@/lib/data/blog-posts"
import { BLOG_AUTHORS } from "@/lib/data/blog-authors"
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories"

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug) ?? BLOG_POSTS[0]
  const author = BLOG_AUTHORS.find((a) => a.id === post.authorId)
  const category = BLOG_CATEGORIES.find((c) => c.id === post.categoryId)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyber-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Inapoi la blog
        </a>

        <div className="space-y-4">
          {category && <BlogCategoryPill category={category} />}
          <h1
            className="text-4xl font-bold leading-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </div>

        {author && <BlogAuthorByline author={author} date={post.date} readTime={post.readTime} />}

        <div className="space-y-6 leading-relaxed text-foreground">
          {post.body.map((paragraph, idx) => (
            <p key={idx} className="text-base text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-lg border border-cyber-blue/40 bg-cyber-blue/5 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-foreground">Vrei sa incerci Pulsar?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            14 zile trial fara card. Conectezi prima app in sub 10 minute.
          </p>
          <button className="mt-4 rounded-md bg-cyber-blue px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90">
            Incepe gratis
          </button>
        </div>
      </motion.article>
    </div>
  )
}
