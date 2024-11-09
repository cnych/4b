import { languages, defaultLang, type Lang } from '@/config/i18n'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import MDXContent from '@/components/MDXContent'
import { getLocalizedPath } from '@/utils/links'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug', 'lang'])
    .filter(post => post.lang === defaultLang)
  
  return posts.map((post) => ({
    slug: post.slug as string,
  }))
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug, defaultLang)
  
  if (!post) return notFound()
  
  const mdxSource = await serialize(post.content)
  
  return (
    <div className="py-12">
      <article className="prose lg:prose-xl mx-auto">
        <nav className="mb-8">
          <Link 
            href={getLocalizedPath('/posts', defaultLang)}
            className="text-purple-600 hover:text-purple-700"
          >
            ← Back to Articles
          </Link>
        </nav>
        <h1>{post.title}</h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
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
        </div>
        <MDXContent source={mdxSource} />
      </article>
    </div>
  )
} 