import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import Head from 'next/head'

export default async function HomePage() {
  const posts = getAllPosts(['title', 'description', 'cover', 'lang', 'slug', 'date'])
    .filter(post => post.lang === 'zh')
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* 英雄区块 - 使用负margin和全宽背景 */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-[#F8F3EF]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">什么是4B运动？</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              一个韩国女权主义运动，通过四个关键原则倡导女性自主权并抵制父权社会：
              <span className="text-purple-600"> 不恋爱</span>、
              <span className="text-purple-600"> 不性行为</span>、
              <span className="text-purple-600"> 不结婚</span>和
              <span className="text-purple-600"> 不生育</span>。
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/for-4b.jpg"
              alt="4B运动插图" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 其他内容包装在max-w-6xl容器中 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 4B解释 - 更新描述 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">理解4B</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비연애 (不恋爱)</h3>
              <p className="text-gray-600">
                不恋爱 - 反对韩国父权制恋爱文化，在这种文化中女性常常面临不平等的期望和经济负担。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비섹스 (不性行为)</h3>
              <p className="text-gray-600">
                不性行为 - 拒绝性关系，以此抵制对女性身体和生育能力的物化。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비혼 (不结婚)</h3>
              <p className="text-gray-600">
                不结婚 - 挑战韩国传统婚姻制度，在这种制度下已婚女性常常承担不成比例的家务责任。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비출산 (不生育)</h3>
              <p className="text-gray-600">
                不生育 - 抵制韩国的促进生育政策，以及尽管韩国生育率全球最低，社会仍对女性生育的压力。
              </p>
            </div>
          </div>
        </section>

        {/* 历史背景部分 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">历史背景</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">古代根源</h3>
                <p className="text-gray-600">
                  女性以拒绝关系作为抗议形式的概念可以追溯到古希腊。阿里斯托芬的喜剧《利西斯特拉塔》
                  （公元前411年）描绘了希腊女性通过拒绝与男性亲密来迫使他们结束伯罗奔尼撒战争 - 
                  这个主题与今天的运动产生共鸣。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">现代起源</h3>
                <p className="text-gray-600">
                  4B运动源于2017-2018年韩国女权主义推特圈，在2016年"逃离束身衣"运动之后，
                  并在韩国#MeToo运动期间获得了发展势头。
                </p>
              </div>
            </div>

            {/* 相关运动 */}
            <div className="bg-[#F8F3EF] px-8 py-2 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">相关运动</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700">逃离束身衣运动（2016）</h4>
                  <p className="text-gray-600">
                    一个先驱运动，呼吁女性从性别、社会、身体和心理压迫中解放出来。它挑战了韩国的
                    美容标准以及该国作为世界第十大美容市场的地位。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">韩国#MeToo运动（2017）</h4>
                  <p className="text-gray-600">
                    鼓励女性说出性骚扰经历，导致数百名女性站出来，并解决包括杀害女性、非自愿色情
                    和工作场所厌女症等问题。
                  </p>
                </div>
              </div>
            </div>

            {/* 当前影响 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2024年全球复兴</h3>
              <p className="text-gray-600">
                该运动在2024年美国总统大选后获得了renewed关注。尽管不同人群的支持程度不同（43%的
                18-44岁女性和53%的白人女性投票支持特朗普），但该运动的原则已在全球范围内引发了关于
                性别平等和女性权利的讨论。
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded">
                <p className="text-sm text-gray-500">
                  "虽然广泛的异性禁欲不太可能实现，但该运动的文化影响很显著。它已成为突出深层社会
                  厌女症的有力话题。" - 欧洲新闻网，2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 社会影响部分 */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">社会影响与背景</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">人口统计</h3>
                <p className="text-gray-600 mb-4">
                  截至2023年，韩国的生育率为0.7，是世界最低，65%的女性表示不想要孩子。4B运动虽然
                  确切成员人数不明，但在2019年声称有约4,000名成员。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">数字行动主义</h3>
                <p className="text-gray-600 mb-4">
                  该运动主要作为一个在线社区运作，女性在这里讨论如何在没有男性的情况下生活，并通过
                  各种形式的抗议和生活方式选择来挑战传统性别期望。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 全球影响部分 */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h2 className="text-3xl font-bold mb-6">近期全球影响</h2>
            <div className="prose lg:prose-xl max-w-6xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  美国女性对特朗普2024年大选胜利的回应
                </h3>
                <p className="text-gray-600 mb-4">
                  在唐纳德·特朗普在2024年美国总统大选获胜后，4B运动在美国女性中获得了前所未有的
                  关注。该运动的原则在社交媒体平台上被广泛分享，关于4B的抖音视频获得了数百万次观看。
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">选举影响</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>谷歌搜索"4B运动"增长450%</li>
                      <li>超过20万人搜索该运动</li>
                      <li>成为谷歌热门趋势话题之一</li>
                      <li>大部分兴趣来自美国用户</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">女性权利背景</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>对女性自由可能倒退的担忧</li>
                      <li>罗诉韦德案被推翻后对生育权的关注</li>
                      <li>14%的选民称堕胎是主要选举议题</li>
                      <li>哈里斯在女性选民中以53%对特朗普的46%领先</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F8F3EF] p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">州级影响</h4>
                  <p className="text-gray-700">
                    在同期的州级投票中，七个州投票扩大堕胎权利，而三个州（佛罗里达、内布拉斯加和
                    南达科他）拒绝了这些措施。这些结果标志着自2022年最高法院裁决以来，美国反堕胎
                    倡导者的首次胜利。
                  </p>
                </div>

                <blockquote className="border-l-4 border-purple-300 pl-4 italic text-gray-600">
                  "作为一个美国女性，我昨晚和我的共和党男友分手，今早正式加入4B运动，尽我的一份力。"
                  <footer className="text-sm mt-2">- X平台（原推特）用户</footer>
                </blockquote>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>来源：欧洲新闻网，彭博社</span>
                <span>2024年11月8日</span>
              </div>
            </div>
          </div>
        </section>

        {/* 最新文章 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">最新文章</h2>
            <p className="text-xl text-gray-600">
              探索我们关于女权主义运动和社会变革的最新文章
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
                      {new Date(post.date!).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link href={`/posts/${post.slug}`} className="text-purple-600 text-sm font-medium">阅读更多 →</Link>
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
              查看所有文章
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
