import { StaticImageData } from 'next/image';
import AIImage from '@/app/content/images/ai-news.jpg';
import WebDevImage from '@/app/content/images/web-dev.jpg';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: StaticImageData;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'introduction-to-gpt4',
    title: 'Understanding GPT-4: The Next Generation of AI',
    excerpt: 'Explore the capabilities and implications of OpenAI\'s latest language model.',
    date: '2024-03-15',
    category: 'AI News',
    readTime: '5 min',
    image: AIImage,
  },
  {
    slug: 'web-dev-trends-2024',
    title: 'Web Development Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the future of web development.',
    date: '2024-03-10',
    category: 'Web Development',
    readTime: '4 min',
    image: WebDevImage,
  },
  // Add more blog posts
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPosts
    .filter(post => post.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug);
} 