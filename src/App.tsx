import { useEffect, useState } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null // 클라이언트 렌더링 후에만 렌더

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">🌞 다크모드 테스트</h1>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
          <p className="mb-2">
            현재는 <strong>라이트 모드</strong>일 수도 있고 <strong>다크 모드</strong>일 수도 있어요.
          </p>
          <p>이 상자는 배경과 테두리가 모드에 따라 바뀝니다.</p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Your Company
      </footer>
    </div>
  )
}

export default App
