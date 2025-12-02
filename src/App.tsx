import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import Home from './pages/Home.tsx'
import Story from './pages/Story.tsx'
import Questions from './pages/Questions.tsx'
import LearnMore from './pages/LearnMore.tsx'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </Layout>
  )
}

export default App
