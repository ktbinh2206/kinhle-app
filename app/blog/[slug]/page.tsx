import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Quay lại Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {post.title}
          </h1>

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground/70 mb-6 pb-6 border-b border-muted">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{post.author.avatar}</span>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.author.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(post.publishedAt).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              <Share2 size={18} />
              <span>Chia sẻ</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              <Bookmark size={18} />
              <span>Lưu bài viết</span>
            </button>
          </div>

          {/* Excerpt */}
          <div className="bg-cream border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg text-foreground/80 italic">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-primary mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-foreground/80 mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-foreground/80">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-primary">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-muted">
            <h3 className="text-sm font-semibold text-foreground/60 mb-3">Thẻ:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Bài viết liên quan</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-card border border-muted rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-foreground/70 text-sm line-clamp-2 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-foreground/60 mt-4 pt-4 border-t border-muted">
                          <Clock size={12} />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
