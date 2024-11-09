'use client'

import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold" {...props} />,
  // ... 其他组件
}

export default function MDXContent({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />
} 