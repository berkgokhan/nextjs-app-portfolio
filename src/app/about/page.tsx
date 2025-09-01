import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Portfolio',
  description: 'Learn more about my background and experience',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my journey, skills, and what drives me as a developer.
          </p>
        </div>
        
        <div className="text-center py-12">
          <p className="text-gray-600 mb-8">
            About page coming soon! This will contain detailed information about my background, experience, and skills.
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
