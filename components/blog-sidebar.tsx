import { blogPosts } from "@/lib/mockdata"
import { ArrowRight } from "lucide-react"

export function BlogSidebar() {
  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
      <h3 className="text-lg font-semibold text-wine-red mb-4">Blog Gần Đây</h3>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="pb-4 border-b border-border last:border-0 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-wine-red transition-colors">
              {post.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <time className="text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
              </time>
              <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </article>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-wine-red hover:text-accent-red font-semibold text-sm transition-colors border-t border-border pt-4">
        Xem Tất Cả Bài Viết →
      </button>
    </div>
  )
}
