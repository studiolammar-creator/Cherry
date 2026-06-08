import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import VideosSection from './components/VideosSection'
import CollabSection from './components/CollabSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <HeroSection />
      <ContentSection />
      <VideosSection />
      <CollabSection />
      <Footer />
    </div>
  )
}
