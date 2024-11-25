import Navigation from '@/components/Navigation';
import ContactForm from '@/components/contact/ContactForm';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h1>
            
            {/* Social Links */}
            <div className="mb-12 flex flex-wrap gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                         rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                         rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                         rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaTwitter className="text-xl" />
                <span>Twitter</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                         rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 