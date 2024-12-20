# Project Requirements

## Goals and Objectives
**Homepage**: A visually striking landing page to grab attention with creative, experimental designs.

**Portfolio Page**: Showcasing projects and skills, emphasizing professionalism.

**Projects Page**: A dedicated setion for detailed project descriptions, features and outcomes.

**Blog Page**: Curate articles, news, and updates on computer science and AI.

**Teaching Page**: Provide tutorials and learning resources for students and enthusiasts.

**About Page**: Personal and professional background.

**Contact Page**: Easy ways to connect, including a form and links to social media.

## Functional Requirements

### General
- All pages should be modile-friendly and responsive.
- Dark mode support for accessability and user preference.

### Pages and Features 
1. **Homepage**
   - Introduction of myself
   - Brief summary of my goals
   - Navigation to other pages, like the projects and blog.
2. **About Me**
   - Short bio with my skills, education and contact details.
   - Includes downloadable resume/CV.
3. **CS MindMap**
   - Includes every field in computer science
   - Nodes show my education in its field and link to a page for that field.
4. **Projects Page**
   - A broader collection of projects or grouped by categories.
   - Cards with images, descriptions and links to GitHub repositories or live demos.
5. **Blog Page**
   - Dynamic blog routes: `/blog/[slug]`.
   - Pagination for posts.
   - Newsletter subscription.
6. **Contact Page**
   - Contact form with emailvalidation.
   - Display email, phone, and social media links.

## Non-functional Requirements
- **Performance**
  - Load times <2 seconds.
  - Optimize images and lazy loads where necessary.
- **SEO**
  - Metadata for all pages.
  - Sitemap generation and structured data.
- **Accessability**
  - WCAG-compliant design.
  - Keyboard and screen reader compatibility.
- **Security**
  - Validate all forms to prevent spam.
  - HTTPS enforced on all pages.