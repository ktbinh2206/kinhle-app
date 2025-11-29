import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog-data"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-wine-red/5 via-warm-beige/10 to-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-wine-red mb-4">
              Bài viết Kính Lễ
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Khám phá kiến thức về văn hóa Việt, phong thủy, tử vi, và tâm linh
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-card border border-muted rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-xs text-foreground/60 pt-4 border-t border-muted">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.publishedAt).toLocaleDateString("vi-VN")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
