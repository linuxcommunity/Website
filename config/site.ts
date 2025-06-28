// Domain configuration for SEO and metadata
export const SITE_CONFIG = {
  // Main domain
  domain: 'linuxcomunity.my.id',
  url: 'https://linuxcomunity.my.id/',
  
  // Personal information
  name: 'Linux Community',
  title: 'Komunitas Linux',
  description: 'Komunitas Linux Indonesia 🐧',
  
  // Social media profiles
  social: {
    github: 'https://github.com/linuxcommunity',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: '@', // Update dengan email yang sesuai
  },
  
  // SEO Keywords
  keywords: [
    'Linux Community',
    'Linux Indonesia',
    '@',
    'Web Developer',
    'Web Developer',
    'Laravel Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio Reza',
    'Developer Indonesia',
    'Programmer Indonesia'
  ],
  
  // Open Graph image with cache busting
  ogImage: `/images/profile.webp?v=${Date.now()}`,
  
  // Google verification (to be updated after setup)
  googleVerification: 'your-google-verification-code',
  
  // Analytics (optional)
  googleAnalytics: 'G-XXXXXXXXXX', // To be updated
}

export default SITE_CONFIG;
