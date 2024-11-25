import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Danicel',
  description: 'Learn more about my background, skills, and experience in computer science and AI.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 