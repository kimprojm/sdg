export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">SDG16</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">홈</a>
          <a href="#" className="hover:underline">강의</a>
          <a href="#" className="hover:underline">공지사항</a>
        </nav>
      </header>
      <section className="px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">사회적 약자를 위한 시스템 구축</h2>
        <p className="text-lg max-w-2xl mx-auto">
          광고 분석을 통해 세상의 구조를 들여다보는 정치교육 플랫폼, SDG16에 오신 걸 환영합니다.
        </p>
      </section>
      <section className="px-6 py-10 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">세상에서 가장 조용한 CM송 - 광고 속 사회 메시지 분석</h3>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-JU-szuigfo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4 max-w-xl mx-auto">
          이 광고는 단순한 아이스크림 광고가 아닙니다. 침묵 속의 외침, 사회적 약자의 목소리를 담고 있습니다.
        </p>
      </section>
      <section className="px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">강의 목록</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "1. 광고로 보는 사회 구조의 은유",
            "2. 침묵과 목소리: 약자의 표현 방식",
            "3. 정치 커뮤니케이션의 미묘한 전략",
            "4. 이 광고가 우리 사회에 던지는 질문"
          ].map((title, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
              <iframe
                className="w-full rounded-md"
                height="215"
                src="https://www.youtube.com/embed/-JU-szuigfo"
                title={`Lecture ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h4 className="mt-4 text-lg font-bold">{title}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-10 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4 text-center">공지사항</h3>
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">📢 새로운 강의 시리즈 준비 중!<br />6월 중순, ‘시민과 정의’에 대한 새로운 영상 공개 예정입니다.<br />많은 관심 부탁드립니다.</p>
          </div>
        </div>
      </section>
      <footer className="text-center text-sm text-gray-500 py-4 border-t mt-10">
        ⓒ 2025 SDG16. All rights reserved.
      </footer>
    </main>
  );
}