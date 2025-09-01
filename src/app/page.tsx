import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </div>
  )
}
