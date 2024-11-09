import { getAllPosts } from '@/lib/api'
import { defaultLang } from '@/config/i18n'
import Link from 'next/link'

export default async function HomePage() {
  const posts = getAllPosts(['title', 'description', 'cover', 'lang', 'slug', 'date'])
    .filter(post => post.lang === defaultLang)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section - 使用负margin和full width背景 */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-[#F8F3EF]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">What is 4B Movement?</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A South Korean feminist movement advocating for women's autonomy and resistance against patriarchal society through four key principles:
              <span className="text-purple-600"> No Dating</span>, 
              <span className="text-purple-600"> No Sex</span>, 
              <span className="text-purple-600"> No Marriage</span>, and 
              <span className="text-purple-600"> No Child-bearing</span>.
            </p>
            
          </div>
          <div className="flex-1">
            <img 
              src="/for-4b.jpg"
              alt="4B Movement Illustration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 其他内容包装在max-w-6xl容器中 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* The 4Bs Explained - 更新描述 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Understanding the 4Bs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비연애 (Biyeonae)</h3>
              <p className="text-gray-600">
                No Dating - A stance against Korea's patriarchal dating culture where women often 
                face unequal expectations and financial burdens in relationships.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비섹스 (Bisekseu)</h3>
              <p className="text-gray-600">
                No Sex - Rejecting sexual relationships as a form of resistance against the 
                objectification of women's bodies and reproductive capabilities.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비혼 (Bihon)</h3>
              <p className="text-gray-600">
                No Marriage - Challenging traditional marriage institutions in Korea, where married 
                women often face disproportionate domestic responsibilities.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비출산 (Bichulsan)</h3>
              <p className="text-gray-600">
                No Child-bearing - Resisting Korea's pro-natalist policies and the societal 
                pressure on women to bear children despite having the world's lowest fertility rate.
              </p>
            </div>
          </div>
        </section>


        {/* Historical Context Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">Historical Background</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Ancient Roots</h3>
                <p className="text-gray-600">
                  The concept of women withholding relationships as a form of protest dates back to ancient Greece. 
                  Aristophanes' comedy 'Lysistrata' (411 BC) depicts Greek women denying men intimacy to force 
                  them to end the Peloponnesian War - a theme that resonates with today's movement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Modern Origins</h3>
                <p className="text-gray-600">
                  The 4B Movement emerged from Korean feminist Twitter circles in 2017-2018, following the 
                  "Escape the Corset" movement of 2016 and gaining momentum during Korea's #MeToo movement.
                </p>
              </div>
            </div>

            {/* Related Movements */}
            <div className="bg-[#F8F3EF] px-8 py-2 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Related Movements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700">Escape the Corset (2016)</h4>
                  <p className="text-gray-600">
                    A precursor movement calling for women's liberation from gender, social, physical, 
                    and psychological oppression. It challenged Korea's beauty standards and the 
                    country's position as the world's 10th largest beauty market.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Korean #MeToo Movement (2017)</h4>
                  <p className="text-gray-600">
                    Encouraged women to speak out about sexual harassment experiences, leading to 
                    hundreds of women coming forward and addressing issues including femicide, 
                    non-consensual pornography, and workplace misogyny.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Impact */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2024 Global Resurgence</h3>
              <p className="text-gray-600">
                The movement has gained renewed attention following the 2024 US presidential election. 
                Despite varying levels of support among different demographics (43% of women aged 18-44 
                and 53% of white women voted for Trump), the movement's principles have sparked global 
                discussions about gender equality and women's rights.
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded">
                <p className="text-sm text-gray-500">
                  "While widespread heterosexual abstinence isn't likely, the movement's cultural impact 
                  is significant. It has become a powerful talking point for highlighting deeply ingrained 
                  societal misogyny." - Euronews, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        
        {/* Social Impact Section - 新增 */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Social Impact & Context</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Demographics</h3>
                <p className="text-gray-600 mb-4">
                  As of 2023, South Korea has the world's lowest fertility rate at 0.7, 
                  with 65% of women expressing no desire for children. The 4B movement, 
                  while its exact membership is unclear, claimed around 4,000 members in 2019.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Digital Activism</h3>
                <p className="text-gray-600 mb-4">
                  The movement operates primarily as an online community, where women discuss 
                  navigating life without men and challenging traditional gender expectations 
                  through various forms of protest and lifestyle choices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h2 className="text-3xl font-bold mb-6">Recent Global Impact</h2>
            <div className="prose lg:prose-xl max-w-6xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  US Women's Response to Trump's 2024 Election Victory
                </h3>
                <p className="text-gray-600 mb-4">
                  Following Donald Trump's victory in the 2024 US presidential election, the 4B movement 
                  has gained unprecedented attention among American women. The movement's principles are 
                  being shared widely across social media platforms, with TikTok videos about 4B gaining 
                  millions of views.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Election Impact</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>450% surge in Google searches for "4B movement"</li>
                      <li>Over 200,000 people searched for the movement</li>
                      <li>Became one of Google's top trending topics</li>
                      <li>Majority of interest came from US users</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Women's Rights Context</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Concerns over potential rollback of female freedoms</li>
                      <li>Focus on reproductive rights after Roe v. Wade overturn</li>
                      <li>14% of voters cited abortion as main election issue</li>
                      <li>Harris led among women voters with 53% vs Trump's 46%</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F8F3EF] p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">State-Level Impact</h4>
                  <p className="text-gray-700">
                    In concurrent state-level votes, seven states voted to expand abortion rights, while 
                    three states (Florida, Nebraska, and South Dakota) rejected such measures. These 
                    results marked the first wins for US anti-abortion advocates since the Supreme 
                    Court's 2022 ruling.
                  </p>
                </div>

                <blockquote className="border-l-4 border-purple-300 pl-4 italic text-gray-600">
                  "Doing my part as an American woman by breaking up with my Republican boyfriend last 
                  night and officially joining the 4B movement this morning." 
                  <footer className="text-sm mt-2">- Social media user on X (formerly Twitter)</footer>
                </blockquote>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>Sources: Euronews, Bloomberg</span>
                <span>November 8, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Explore our latest articles about feminist movements and social change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} 
                       className="group rounded-xl overflow-hidden bg-white border hover:shadow-xl transition duration-300">
                <Link href={`/posts/${post.slug}`} className="relative h-48 overflow-hidden block">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="group-hover:text-purple-600 transition"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date!).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link href={`/posts/${post.slug}`} className="text-purple-600 text-sm font-medium">Read more →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/posts" 
              className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition text-lg font-semibold"
            >
              View All Articles
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
