export interface User {
  id: string
  email: string
  name: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string | null
  githubUrl?: string | null
  liveUrl?: string | null
  technologies: string // JSON string
  featured: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
  user: User
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  createdAt: Date
  updatedAt: Date
  userId: string
  user: User
}

export interface Contact {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
