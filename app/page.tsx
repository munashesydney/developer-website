import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ExperienceEducation from '@/components/experience-education'
import Projects from '@/components/projects'
import MobileApps from '@/components/mobile-apps'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ExperienceEducation />
      <Projects />
      <MobileApps />
      <Skills />
      <Contact />
    </main>
  )
}