'use client'

import { useState } from 'react'
import { Code, Database, Palette, Cloud, Smartphone, Globe } from 'lucide-react'

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'devops', name: 'DevOps', icon: Cloud },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'other', name: 'Other', icon: Globe },
  ]

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'GraphQL', level: 65 },
    ],
    design: [
      { name: 'Figma', level: 70 },
      { name: 'Adobe XD', level: 65 },
      { name: 'Photoshop', level: 60 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Design Systems', level: 70 },
    ],
    devops: [
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'Linux', level: 70 },
      { name: 'Nginx', level: 60 },
    ],
    mobile: [
      { name: 'React Native', level: 70 },
      { name: 'Flutter', level: 60 },
      { name: 'Mobile UI', level: 75 },
      { name: 'App Store', level: 65 },
      { name: 'PWA', level: 80 },
    ],
    other: [
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Project Management', level: 75 },
      { name: 'Technical Writing', level: 70 },
      { name: 'Mentoring', level: 80 },
      { name: 'Problem Solving', level: 90 },
    ],
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills].map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. I regularly participate in online courses, attend 
              conferences, and contribute to open-source projects to expand my knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>• Currently learning: Rust & WebAssembly</span>
              <span>• Following: AI/ML Integration</span>
              <span>• Exploring: Blockchain Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
