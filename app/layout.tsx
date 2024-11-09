import { defaultLang } from '@/config/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={defaultLang}>
      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
