import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import Head from 'next/head'

export default async function KOPage() {
  const posts = getAllPosts(['title', 'description', 'cover', 'lang', 'slug', 'date'])
    .filter(post => post.lang === 'ko')
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* 히어로 섹션 - 네거티브 마진과 전체 너비 배경 사용 */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-[#F8F3EF]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">4B 운동이란?</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              한국의 페미니즘 운동으로, 네 가지 핵심 원칙을 통해 여성의 자율성을 옹호하고 가부장제 사회에 저항합니다:
              <span className="text-purple-600"> 비연애</span>,
              <span className="text-purple-600"> 비섹스</span>,
              <span className="text-purple-600"> 비혼</span>,
              <span className="text-purple-600"> 비출산</span>
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/for-4b.jpg"
              alt="4B 운동 일러스트레이션" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 다른 콘텐츠는 max-w-6xl 컨테이너에 포장 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 4B 설명 - 업데이트된 설명 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">4B 이해하기</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비연애</h3>
              <p className="text-gray-600">
                연애 거부 - 여성에게 불평등한 기대와 경제적 부담을 지우는 한국의 가부장적 연애 문화에 반대
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비섹스</h3>
              <p className="text-gray-600">
                성관계 거부 - 여성의 신체와 출산 능력의 대상화에 저항
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비혼</h3>
              <p className="text-gray-600">
                결혼 거부 - 기혼 여성에게 불균형적인 가사 부담을 지우는 한국의 전통적 결혼 제도에 도전
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">비출산</h3>
              <p className="text-gray-600">
                출산 거부 - 한국의 출산장려 정책과 세계 최저 출산율에도 불구하고 여성에게 가해지는 출산 압박에 저항
              </p>
            </div>
          </div>
        </section>

        {/* 역사적 배경 섹션 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">역사적 배경</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">고대의 뿌리</h3>
                <p className="text-gray-600">
                  여성들이 관계 거부를 항의의 형태로 사용한 개념은 고대 그리스로 거슬러 올라갑니다. 
                  아리스토파네스의 희극 '리시스트라타'(기원전 411년)는 그리스 여성들이 남성들과의 
                  친밀한 관계를 거부함으로써 펠로폰네소스 전쟁을 종식시키려 했던 이야기를 담고 있습니다 - 
                  오늘날의 운동과 공명하는 주제입니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">현대적 기원</h3>
                <p className="text-gray-600">
                  4B 운동은 2017-2018년 한국 페미니스트 트위터 커뮤니티에서 시작되어, 2016년 
                  '탈코르셋' 운동 이후 한국의 #MeToo 운동 기간 동안 모멘텀을 얻었습니다.
                </p>
              </div>
            </div>

            {/* 관련 운동 */}
            <div className="bg-[#F8F3EF] px-8 py-2 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">관련 운동</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700">탈코르셋 운동 (2016)</h4>
                  <p className="text-gray-600">
                    여성들이 성별, 사회적, 신체적, 심리적 억압으로부터 해방되기를 촉구한 선구적 운동. 
                    세계 10대 미용 시장인 한국의 미용 기준에 도전했습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">한국의 #MeToo 운동 (2017)</h4>
                  <p className="text-gray-600">
                    성희롱 경험을 공유하도록 여성들을 격려했으며, 수백 명의 여성들이 나서게 되었고 
                    여성 살해, 비동의 포르노, 직장 내 여성혐오 등의 문제를 다루게 되었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 현재 영향 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2024년 글로벌 부활</h3>
              <p className="text-gray-600">
                이 운동은 2024년 미국 대선 이후 새로운 주목을 받았습니다. 다양한 집단의 지지도가 
                다르지만(18-44세 여성의 43%와 백인 여성의 53%가 트럼프에 투표), 이 운동의 원칙들은 
                전 세계적으로 성평등과 여성의 권리에 대한 논의를 촉발했습니다.
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded">
                <p className="text-sm text-gray-500">
                  "광범위한 이성과의 금욕이 실현되기는 어렵겠지만, 이 운동의 문화적 영향력은 
                  상당합니다. 깊이 뿌리박힌 사회적 여성혐오를 부각시키는 강력한 대화 주제가 
                  되었습니다." - 유럽뉴스네트워크, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 사회적 영향 섹션 */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">사회적 영향과 맥락</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">인구통계</h3>
                <p className="text-gray-600 mb-4">
                  2023년 기준 한국의 출산율은 0.7로 세계 최저이며, 65%의 여성이 자녀를 원하지 
                  않는다고 답했습니다. 4B 운동의 정확한 회원 수는 알려지지 않았으나, 2019년 약 
                  4,000명의 회원이 있다고 주장했습니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">디지털 액티비즘</h3>
                <p className="text-gray-600 mb-4">
                  이 운동은 주로 온라인 커뮤니티로 운영되며, 여성들은 남성 없이 사는 방법을 논의하고 
                  다양한 형태의 항의와 생활방식 선택을 통해 전통적인 성역할 기대에 도전합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 글로벌 영향 섹션 */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h2 className="text-3xl font-bold mb-6">최근 글로벌 영향</h2>
            <div className="prose lg:prose-xl max-w-6xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  트럼프의 2024년 대선 승리에 대한 미국 여성들의 반응
                </h3>
                <p className="text-gray-600 mb-4">
                  도널드 트럼프가 2024년 미국 대선에서 승리한 후, 4B 운동은 미국 여성들 사이에서 
                  전례 없는 관심을 받았습니다. 이 운동의 원칙들이 소셜 미디어 플랫폼에서 널리 
                  공유되었고, 4B에 대한 틱톡 동영상들이 수백만 회의 조회수를 기록했습니다.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">선거의 영향</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>구글 검색 "4B 운동" 450% 증가</li>
                      <li>20만 명 이상이 운동 검색</li>
                      <li>구글 트렌드 주요 토픽으로 등장</li>
                      <li>대부분의 관심이 미국 사용자들로부터</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">여성 권리 맥락</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>여성의 자유 후퇴 우려</li>
                      <li>로 대 웨이드 판결 폐지 후 출산권 관심</li>
                      <li>14%의 유권자가 낙태를 주요 선거 이슈로 꼽음</li>
                      <li>해리스가 여성 유권자 중 53% 대 트럼프 46%로 앞섬</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F8F3EF] p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">주 단위 영향</h4>
                  <p className="text-gray-700">
                    같은 시기 주 단위 투표에서 7개 주가 낙태권 확대에 찬성했으나, 3개 주(플로리다, 
                    네브래스카, 사우스다코타)는 이를 거부했습니다. 이는 2022년 대법원 판결 이후 
                    낙태 반대 운동가들의 첫 승리를 의미합니다.
                  </p>
                </div>

                <blockquote className="border-l-4 border-purple-300 pl-4 italic text-gray-600">
                  "미국 여성으로서, 어제 밤 공화당 남자친구와 헤어졌고 오늘 아침 공식적으로 4B 
                  운동에 동참했습니다. 제가 할 수 있는 일을 하고 있습니다."
                  <footer className="text-sm mt-2">- X(구 트위터) 사용자</footer>
                </blockquote>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>출처: 유럽뉴스네트워크, 블룸버그</span>
                <span>2024년 11월 8일</span>
              </div>
            </div>
          </div>
        </section>

        {/* 최신 글 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">최신 글</h2>
            <p className="text-xl text-gray-600">
              페미니즘 운동과 사회 변화에 대한 최신 글을 탐색해보세요
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
                      {new Date(post.date!).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link href={`/posts/${post.slug}`} className="text-purple-600 text-sm font-medium">더 보기 →</Link>
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
              모든 글 보기
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
