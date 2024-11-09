import { getAllPosts } from '@/lib/api'
import { defaultLang } from '@/config/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getLocalizedPath } from '@/utils/links'

export default function PostsPage() {
  const posts = getAllPosts(['title', 'description', 'slug', 'date', 'cover', 'tags', 'lang'])
    .filter(post => post.lang === defaultLang)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="group bg-white rounded-xl overflow-hidden border hover:shadow-lg transition duration-300"
          >
            {post.cover && (
              <Link href={getLocalizedPath(`/posts/${post.slug}`, post.lang!)} className="relative h-48 overflow-hidden block">
                <Image
                  src={post.cover}
                  alt={post.title || ''}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </Link>
            )}
            <div className="p-6">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition">
                <Link href={getLocalizedPath(`/posts/${post.slug}`, post.lang!)}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <time className="text-gray-500">
                  {new Date(post.date!).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <Link 
                  href={getLocalizedPath(`/posts/${post.slug}`, post.lang!)}
                  className="text-purple-600 font-medium hover:text-purple-700"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 