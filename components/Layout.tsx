export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </main>
  )
} 