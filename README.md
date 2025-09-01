# Portfolio - Full Stack Developer

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates full-stack development capabilities with authentication, database integration, and a beautiful user interface.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Next.js 14**: Latest features including App Router and Server Components
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Interactive Components**: Form validation, loading states, and user feedback

### Backend
- **API Routes**: RESTful API endpoints for data management
- **Authentication**: NextAuth.js with credentials provider
- **Database**: Prisma ORM with SQLite (easily switchable to PostgreSQL/MySQL)
- **Form Validation**: Zod schema validation for type safety
- **Error Handling**: Comprehensive error handling and user feedback

### Key Sections
- **Hero Section**: Animated landing with call-to-action
- **About Section**: Professional experience and statistics
- **Skills Section**: Interactive skill categories with proficiency levels
- **Projects Section**: Dynamic project showcase with filtering
- **Contact Section**: Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM + SQLite
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cv-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Demo Account

For testing purposes, a demo account has been created:

- **Email:** `demo@example.com`
- **Password:** `demo123`

This account includes sample projects and skills to demonstrate the portfolio functionality.

## 🗂️ Project Structure

```
cv-nextjs/
├── src/                   # Source code directory
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── auth/         # Authentication pages
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── layout/      # Layout components
│   │   ├── providers/   # Context providers
│   │   └── sections/    # Page sections
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── prisma/               # Database schema
└── public/               # Static assets
```

## 🔧 Configuration

### Database
The project uses Prisma with SQLite by default. To switch to another database:

1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql" // or "mysql"
     url      = env("DATABASE_URL")
   }
   ```

2. Update your `.env.local` with the new database URL

3. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

### Authentication
The authentication system uses NextAuth.js with credentials provider. To add more providers:

1. Install additional provider packages
2. Update `lib/auth.ts` with new providers
3. Configure provider-specific environment variables

## 📝 Customization

### Content Updates
- **Personal Information**: Update content in component files
- **Projects**: Add projects through the API or database
- **Skills**: Modify skill categories and levels in `SkillsSection.tsx`
- **Contact Info**: Update contact details in `ContactSection.tsx`

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Components**: Update component styles in respective files
- **Animations**: Customize animations in `globals.css`

### Features
- **Add Blog**: Create blog functionality with markdown support
- **Portfolio Gallery**: Add image gallery for projects
- **Testimonials**: Include client testimonials section
- **Resume Download**: Add downloadable resume feature

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Use Railway's database and deployment services
- **DigitalOcean**: Deploy to App Platform or Droplet

## 🔒 Security Considerations

- **Environment Variables**: Never commit sensitive data
- **Authentication**: Use strong passwords and secure sessions
- **API Protection**: Implement rate limiting for production
- **Database**: Use connection pooling and proper indexing
- **HTTPS**: Always use HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first approach
- Prisma for the excellent ORM
- NextAuth.js for authentication

## 📞 Support

If you have any questions or need help with the project:

- Create an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
