import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'View all my projects and work',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my work, showcasing various technologies 
            and problem-solving approaches.
          </p>
        </div>
        
        <div className="text-center py-12">
          <p className="text-gray-600 mb-8">
            Projects page coming soon! This will display all projects with filtering and search capabilities.
          </p>
          <a
            href="/"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  )
}
