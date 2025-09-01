import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Portfolio',
  description: 'Get in touch with me for opportunities and collaborations',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your project or explore opportunities to work together.
          </p>
        </div>
        
        <div className="text-center py-12">
          <p className="text-gray-600 mb-8">
            Contact page coming soon! This will contain a contact form and my contact information.
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
