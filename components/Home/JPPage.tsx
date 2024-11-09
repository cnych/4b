import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default async function JPPage() {
  const posts = getAllPosts(['title', 'description', 'cover', 'lang', 'slug', 'date'])
    .filter(post => post.lang === 'ja')
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* ヒーローセクション - ネガティブマージンとフル幅背景を使用 */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-[#F8F3EF]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">4B運動とは？</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              韓国のフェミニズム運動で、4つの主要原則を通じて女性の自主権を提唱し、家父長制社会に抵抗します：
              <span className="text-purple-600"> 恋愛拒否</span>、
              <span className="text-purple-600"> 性行為拒否</span>、
              <span className="text-purple-600"> 結婚拒否</span>、
              <span className="text-purple-600"> 出産拒否</span>。
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/for-4b.jpg"
              alt="4B運動イラスト" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* その他のコンテンツをmax-w-6xlコンテナでラップ */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 4Bの説明 - 更新された説明 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">4Bを理解する</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비연애 (恋愛拒否)</h3>
              <p className="text-gray-600">
                恋愛拒否 - 女性が不平等な期待と経済的負担に直面する韓国の家父長制的な恋愛文化に反対します。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비섹스 (性行為拒否)</h3>
              <p className="text-gray-600">
                性行為拒否 - 女性の身体と生殖能力の物象化に抵抗するため、性的関係を拒否します。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비혼 (結婚拒否)</h3>
              <p className="text-gray-600">
                結婚拒否 - 既婚女性が不均衡な家事負担を負う韓国の伝統的な結婚制度に挑戦します。
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비출산 (出産拒否)</h3>
              <p className="text-gray-600">
                出産拒否 - 韓国の出産促進政策と、世界最低の出生率にもかかわらず女性に対する出産圧力に抵抗します。
              </p>
            </div>
          </div>
        </section>

        {/* 歴史的背景セクション */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">歴史的背景</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">古代の起源</h3>
                <p className="text-gray-600">
                  抗議の形として関係を拒否する女性の概念は古代ギリシャにまで遡ります。アリストファネスの喜劇
                  『リシストラテー』（紀元前411年）では、ギリシャの女性たちがペロポネソス戦争を終わらせるため
                  に男性との親密な関係を拒否する様子が描かれており、この主題は今日の運動と共鳴しています。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">現代の起源</h3>
                <p className="text-gray-600">
                  4B運動は2017-2018年の韓国フェミニストTwitterコミュニティから始まり、2016年の
                  「コルセット脱出」運動の後、韓国の#MeToo運動期間中に勢いを得ました。
                </p>
              </div>
            </div>

            {/* 関連運動 */}
            <div className="bg-[#F8F3EF] px-8 py-2 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">関連運動</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700">コルセット脱出運動（2016）</h4>
                  <p className="text-gray-600">
                    女性をジェンダー、社会、身体、心理的抑圧から解放することを呼びかけた先駆的運動。
                    韓国の美の基準と世界第10位の美容市場としての地位に挑戦しました。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">韓国#MeToo運動（2017）</h4>
                  <p className="text-gray-600">
                    セクハラ経験を語ることを奨励し、数百人の女性が声を上げ、女性殺害、リベンジポルノ、
                    職場での女性差別などの問題に取り組みました。
                  </p>
                </div>
              </div>
            </div>

            {/* 現在の影響 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2024年のグローバルな復興</h3>
              <p className="text-gray-600">
                この運動は2024年のアメリカ大統領選挙後に新たな注目を集めました。支持レベルは異なる
                グループ間で異なりますが（18-44歳の女性の43%と白人女性の53%がトランプに投票）、
                運動の原則は世界中でジェンダー平等と女性の権利に関する議論を引き起こしています。
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded">
                <p className="text-sm text-gray-500">
                  「広範な異性との禁欲は実現しそうにありませんが、この運動の文化的影響は顕著です。
                  深い社会的な女性差別を浮き彫りにする強力な話題となっています。」
                  - ヨーロピアン・ニュース・ネットワーク、2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 社会的影響セクション */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">社会的影響と背景</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">人口統計</h3>
                <p className="text-gray-600 mb-4">
                  2023年現在、韓国の出生率は0.7で世界最低であり、65%の女性が子どもを望んでいません。
                  4B運動の正確なメンバー数は不明ですが、2019年時点で約4,000人のメンバーがいると
                  主張しています。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">デジタル・アクティビズム</h3>
                <p className="text-gray-600 mb-4">
                  この運動は主にオンラインコミュニティとして機能し、女性たちが男性なしでの生活について
                  議論し、様々な形式の抗議とライフスタイルの選択を通じて伝統的なジェンダーの期待に
                  挑戦しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* グローバルな影響セクション */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h2 className="text-3xl font-bold mb-6">最近のグローバルな影響</h2>
            <div className="prose lg:prose-xl max-w-6xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  トランプの2024年選挙勝利に対するアメリカ女性の反応
                </h3>
                <p className="text-gray-600 mb-4">
                  ドナルド・トランプが2024年アメリカ大統領選挙で勝利した後、4B運動はアメリカの
                  女性の間で前例のない注目を集めました。運動の原則はソーシャルメディアプラットフォーム
                  で広く共有され、4Bに関するTikTok動画は数百万回の視聴を記録しました。
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">選挙の影響</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>「4B運動」のGoogle検索が450%増加</li>
                      <li>20万人以上が運動を検索</li>
                      <li>Googleトレンドのトップトピックの1つに</li>
                      <li>関心の大部分はアメリカユーザーから</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">女性の権利の背景</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>女性の自由の後退への懸念</li>
                      <li>ロー対ウェイド判決覆後の生殖権への注目</li>
                      <li>14%の有権者が中絶を主要な選挙問題と指摘</li>
                      <li>ハリスが女性有権者で53%対トランプの46%でリード</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F8F3EF] p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">州レベルの影響</h4>
                  <p className="text-gray-700">
                    同時期の州レベルの投票では、7つの州が中絶権の拡大に賛成票を投じ、3つの州
                    （フロリダ、ネブラスカ、サウスダコタ）がこれらの措置を否決しました。これらの
                    結果は、2022年の最高裁判決以来、反中絶活動家の初めての勝利を示しています。
                  </p>
                </div>

                <blockquote className="border-l-4 border-purple-300 pl-4 italic text-gray-600">
                  「アメリカ人女性として、昨夜共和党支持の彼氏と別れ、今朝正式に4B運動に参加し、
                  私にできることをしています。」
                  <footer className="text-sm mt-2">- Xプラットフォーム（旧Twitter）ユーザー</footer>
                </blockquote>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>出典：ヨーロピアン・ニュース・ネットワーク、ブルームバーグ</span>
                <span>2024年11月8日</span>
              </div>
            </div>
          </div>
        </section>

        {/* 最新記事 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">最新記事</h2>
            <p className="text-xl text-gray-600">
              フェミニズム運動と社会変革に関する最新の記事をご覧ください
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
                      {new Date(post.date!).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link href={`/posts/${post.slug}`} className="text-purple-600 text-sm font-medium">続きを読む →</Link>
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
              すべての記事を見る
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
