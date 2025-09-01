import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      password: hashedPassword,
    },
  })

  // Create demo projects
  const demoProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and payment integration.',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/demo/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      technologies: JSON.stringify(['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma']),
      featured: true,
      userId: demoUser.id,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/demo/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      technologies: JSON.stringify(['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']),
      featured: true,
      userId: demoUser.id,
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current conditions, forecasts, and historical data with interactive charts.',
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/demo/weather-dashboard',
      liveUrl: 'https://weather-demo.vercel.app',
      technologies: JSON.stringify(['Vue.js', 'Chart.js', 'OpenWeather API', 'Vite', 'CSS3']),
      featured: false,
      userId: demoUser.id,
    },
  ]

  for (const project of demoProjects) {
    await prisma.project.upsert({
      where: { 
        title_userId: {
          title: project.title,
          userId: demoUser.id,
        }
      },
      update: {},
      create: project,
    })
  }

  // Create demo skills
  const demoSkills = [
    { name: 'JavaScript', category: 'Frontend', level: 5, userId: demoUser.id },
    { name: 'TypeScript', category: 'Frontend', level: 4, userId: demoUser.id },
    { name: 'React', category: 'Frontend', level: 5, userId: demoUser.id },
    { name: 'Next.js', category: 'Frontend', level: 4, userId: demoUser.id },
    { name: 'Node.js', category: 'Backend', level: 4, userId: demoUser.id },
    { name: 'Express', category: 'Backend', level: 4, userId: demoUser.id },
    { name: 'PostgreSQL', category: 'Database', level: 3, userId: demoUser.id },
    { name: 'MongoDB', category: 'Database', level: 3, userId: demoUser.id },
    { name: 'Docker', category: 'DevOps', level: 3, userId: demoUser.id },
    { name: 'AWS', category: 'DevOps', level: 2, userId: demoUser.id },
  ]

  for (const skill of demoSkills) {
    await prisma.skill.upsert({
      where: { 
        name_userId: {
          name: skill.name,
          userId: demoUser.id,
        }
      },
      update: {},
      create: skill,
    })
  }

  console.log('Demo account created successfully!')
  console.log('Email: demo@example.com')
  console.log('Password: demo123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
