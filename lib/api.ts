import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { type Lang } from '@/config/i18n'

const POSTS_PATH = path.join(process.cwd(), 'content')

type PostMeta = {
  title: string
  description: string
  date: string
  slug: string
  lang: Lang
  cover?: string
  tags?: string[]
}

type Post = PostMeta & {
  content: string
}

export function getAllPosts(fields: (keyof PostMeta)[] = []): Partial<PostMeta>[] {
  const posts: Partial<PostMeta>[] = []
  
  fs.readdirSync(POSTS_PATH).forEach((lang) => {
    const postsDir = path.join(POSTS_PATH, lang, 'posts')
    
    if (fs.existsSync(postsDir)) {
      const files = fs.readdirSync(postsDir)
      files.forEach((filename) => {
        const filePath = path.join(postsDir, filename)
        const { data } = matter.read(filePath)
        
        const post: Partial<PostMeta> = {}
        
        fields.forEach((field) => {
          if (field === 'slug') {
            post[field] = filename.replace(/\.mdx?$/, '')
          } else if (field === 'lang') {
            post[field] = lang as Lang
          } else if (field in data) {
            post[field] = data[field]
          }
        })
        
        posts.push(post)
      })
    }
  })
  
  return posts
}

export async function getPostBySlug(slug: string, lang: Lang): Promise<Post | null> {
  try {
    const fullPath = path.join(POSTS_PATH, lang, 'posts', `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
      lang,
      content,
      cover: data.cover || '',
      tags: data.tags || []
    }
  } catch (error) {
    console.error(`Error reading post ${slug} in ${lang}:`, error)
    return null
  }
} 