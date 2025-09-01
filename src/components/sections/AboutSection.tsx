import { User, Calendar, MapPin, Award } from 'lucide-react'

export function AboutSection() {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '20+' },
    { icon: User, label: 'Happy Clients', value: '15+' },
    { icon: MapPin, label: 'Countries Worked', value: '5+' },
  ]

  const experiences = [
    {
      year: '2023',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      description: 'Led development of scalable web applications using React, Node.js, and AWS.',
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Startup',
      description: 'Built responsive user interfaces and implemented modern design systems.',
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Developed websites and web applications using various technologies.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies 
            and a commitment to delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Turning Ideas Into Reality
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated full-stack developer with over 3 years of experience creating 
              innovative web solutions. My passion lies in building applications that not only 
              look great but also provide exceptional functionality and user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in modern JavaScript frameworks like React and Next.js, along with 
              robust backend development using Node.js, Python, and various databases. I believe 
              in writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Remote / Worldwide</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {experience.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {experience.title}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300 mb-3">
                      {experience.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
