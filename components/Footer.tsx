import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F8F3EF]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/posts/what-is-4b" className="text-gray-600 hover:text-purple-600">
              What is 4B Movement?
            </Link>
            <Link href="/posts/what-is-4b" className="text-gray-600 hover:text-purple-600">
              4B Movement USA Meaning
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-purple-600">
              Articles
            </Link>
          </nav>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} 4B Movement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}