const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  // output: 'export',
  
  // 确保静态生成时包含尾部斜杠
  trailingSlash: true,
  
  // MDX 配置
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // 图片域名配置
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = withMDX(nextConfig)
