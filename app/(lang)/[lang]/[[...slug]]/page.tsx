import Link from 'next/link'
import { languages, defaultLang, type Lang, languageConfig } from '@/config/i18n'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { notFound } from 'next/navigation'
import MDXContent from '@/components/MDXContent'
import ZHPage from '@/components/Home/ZHPage'
import JPPage from '@/components/Home/JPPage'
import KOPage from '@/components/Home/KOPage'
import { getLocalizedPath } from '@/utils/links'


export async function generateStaticParams() {
  // 获取所有文章
  const posts = getAllPosts(['slug', 'lang'])
  
  // 生成所有可能的路径组合
  const paths: { lang: string; slug?: string[] }[] = []
  
  // 为非默认语言生成路径
  languages
    .filter(lang => lang !== defaultLang)
    .forEach(lang => {
      // 添加每个语言的首页
      paths.push({ lang, slug: [] })
      
      // 添加该语言的所有文章页面
      const langPosts = posts.filter(post => post.lang === lang)
      langPosts.forEach(post => {
        paths.push({
          lang,
          slug: ['posts', post.slug as string]
        })
      })
      
      // 确保即使没有对应语言的文章，也能访问默认语言文章的翻译路径
      const defaultLangPosts = posts.filter(post => post.lang === defaultLang)
      defaultLangPosts.forEach(post => {
        paths.push({
          lang,
          slug: ['posts', post.slug as string]
        })
      })
    })

  return paths
}

type Params = Promise<{ lang: string; slug?: string[] }>

export async function generateMetadata({ params }: { params: Params }) {
  const { lang, slug } = await params

  if (!slug) {
    return {
      title: lang === 'zh' ? '4B运动 - 韩国女权主义运动 | 不恋爱、不性行为、不结婚、不生育' : 
             lang === 'ja' ? '4B運動 - 韓国フェミニズム運動' :
             `4B Movement - ${languageConfig[lang as Lang].name}`,
      description: lang === 'zh' ? '了解4B运动 - 一个韩国女权主义运动，通过四个关键原则(不恋爱、不性行为、不结婚、不生育)倡导女性自主权并抵制父权社会。探索其历史、社会影响和全球发展。' :
                   lang === 'ja' ? '4B運動について - 韓国のフェミニズム運動は、女性の自主権を提唱し、家父長制社会に抵抗するために4つの主要原則を通じて始まりました。' :
                   'Learn about 4B Movement - A South Korean feminist movement advocating for women\'s autonomy and resistance against patriarchal society through four key principles: No Dating, No Sex, No Marriage, and No Child-bearing.',
      keywords: lang === 'zh' ? '4B运动,韩国女权主义,女性自主权,不恋爱,不性行为,不结婚,不生育,女权运动,社会变革,性别平等' :
                   lang === 'ja' ? '4B運動,フェミニズム運動,女性の自主権,不恋愛,不性行為,不結婚,不出産,フェミニズム運動,社会変革,性別平等' :
                   '4B Movement,feminism,social change,latest articles',
      canonical: `https://movement4b.com/${lang}`
    }
  }
  
  // 处理文章列表页
  if (slug?.[0] === 'posts' && !slug[1]) {
    return {
      title: lang === 'zh' ? '最新文章 - 4B运动' : 
             lang === 'ja' ? '最新記事 - 4B運動' : 
             'Latest Articles - 4B Movement',
      description: lang === 'zh' ? '浏览关于女权主义和社会变革的最新文章' :
                   lang === 'ja' ? 'フェミニズム運動と社会変革に関する最新の記事' :
                   'Browse latest articles about feminism and social change',
      keywords: lang === 'zh' ? '4B运动,女权主义,社会变革,最新文章' :
                lang === 'ja' ? '4B運動,フェミニズム,社会変革,最新記事' :
                '4B Movement,feminism,social change,latest articles',
      canonical: `https://movement4b.com/${lang}/posts`
    }
  }

  // 处理单篇文章页
  if (slug?.[0] === 'posts' && slug[1]) {
    const post = await getPostBySlug(slug[1], lang as Lang)
    
    if (!post) {
      // 如果找不到当前语言的文章，尝试使用默认语言的文章
      const defaultPost = await getPostBySlug(slug[1], defaultLang)
      if (!defaultPost) return null
      
      return {
        title: `${defaultPost.title} - ${languageConfig[lang as Lang].name}`,
        description: defaultPost.description,
        keywords: defaultPost.tags?.join(',') || '4B Movement,feminism,social change',
        canonical: `https://4bmovement.org/${lang}/posts/${defaultPost.slug}`
      }
    }
    
    return {
      title: post.title,
      description: post.description,
      keywords: post.tags?.join(',') || '4B Movement,feminism,social change'
    }
  }
  
  return {
    title: `4B Movement - ${languageConfig[lang as Lang].name}`,
  }
}

export default async function LocalizedPage({ params }: { params: Params }) {
  const { lang, slug } = await params
  if (!languages.includes(lang as Lang)) {
    return notFound()
  }

  // 处理首页
  if (!slug) {
    return (
      <>
        <link
          rel="canonical"
          href={`https://movement4b.com/${lang}`}
          key="canonical"
        />
        {lang === 'zh' ? <ZHPage /> : lang === 'ja' ? <JPPage /> : lang === 'ko' ? <KOPage /> : null}
      </>
    )
  }

  // 处理文章列表页
  if (slug[0] === 'posts' && !slug[1]) {
    const posts = getAllPosts(['title', 'description', 'slug', 'date', 'cover', 'tags', 'lang'])
      .filter(post => post.lang === lang as Lang)
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())

    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          {lang === 'zh' ? '最新文章' : lang === 'ja' ? '最新記事' : lang === 'ko' ? '최근 기사' : 'Latest Articles'}
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="group bg-white rounded-xl overflow-hidden border hover:shadow-lg transition duration-300"
            >
              {post.cover && (
                <Link href={getLocalizedPath(`/posts/${post.slug}`, lang as Lang)} className="relative h-48 overflow-hidden block">
                  <img
                    src={post.cover}
                    alt={post.title || ''}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
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
                  <Link href={getLocalizedPath(`/posts/${post.slug}`, lang as Lang)}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <time className="text-gray-500">
                    {new Date(post.date!).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </time>
                  <Link 
                    href={getLocalizedPath(`/posts/${post.slug}`, lang as Lang)}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    {lang === 'zh' ? '阅读更多 →' : lang === 'ja' ? '続きを読む →' : lang === 'ko' ? '더 읽기 →' : 'Read more →'}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  // 处理文章页
  if (slug[0] === 'posts' && slug[1]) {
    const post = await getPostBySlug(slug[1], lang as Lang)
    
    // 如果找不到当前语言的文章，尝试使用默认语言的文章
    if (!post) {
      const defaultPost = await getPostBySlug(slug[1], defaultLang)
      if (!defaultPost) return notFound()
      
      const mdxSource = await serialize(defaultPost.content)
      return (
        <article className="prose lg:prose-xl mx-auto">
          <h1>{defaultPost.title}</h1>
          {defaultPost.cover && <img src={defaultPost.cover} alt={defaultPost.title} className="w-full h-auto mb-4" />}
          <div className="bg-yellow-100 p-4 mb-4 rounded">
            This article is not yet available in {languageConfig[lang as Lang].name}. 
            Showing English version.
          </div>
          <MDXContent source={mdxSource} />
        </article>
      )
    }

    const mdxSource = await serialize(post.content)
    return (
      <>
      <head>
        <link 
          rel="canonical" 
          href={`https://movement4b.com/${lang}/posts/${post.slug}`}
        />
      </head>
      <article className="prose sm:prose-sm md:prose-md lg:prose-xl max-w-3xl mx-auto py-10">
      <nav className="mb-8">
        <Link 
          href={getLocalizedPath('/posts', post.lang)}
          className="text-purple-600 hover:text-purple-700"
        >
          ← Back to Articles
          </Link>
        </nav>
        <h1>{post.title}</h1>
        {post.cover && <img src={post.cover} alt={post.title} className="w-full h-auto mb-4" />}
        <MDXContent source={mdxSource} />
        </article>
      </>
    )
  }

  return notFound()
}