// Import Link component from Next.js for client-side navigation
import Link from 'next/link';
// Import Hero section component for the landing page
import { Hero } from './components/Hero';
// Import Features section component that showcases app capabilities
import { Features } from './components/Features';

// Home component - serves as the landing page for the application
export default function Home() {
  return (
    // Main container with flex column layout that fills the screen height
    <div className="flex flex-col min-h-screen">
      {/* Header section with navigation */}
      <header className="p-6 flex items-center justify-between">
        {/* Logo/Brand section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#305C74]">
            {/* App name with accent color */}
            <span className="text-[#4D8DAA]">PUMPED</span>
          </h1>
        </div>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              {/* Sign In link with hover effect */}
              <Link href="/signin" className="text-[#305C74] hover:text-[#4D8DAA] transition-colors">
                Sign In
              </Link>
            </li>
            <li>
              {/* Sign Up button with styling */}
              <Link href="/signup" className="bg-[#4D8DAA] hover:bg-[#3B728E] px-4 py-2 rounded-md text-white transition-colors shadow-md">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area that grows to fill available space */}
      <main className="flex-grow">
        {/* Hero section with attention-grabbing content */}
        <Hero />
        {/* Features section showcasing app capabilities */}
        <Features />
      </main>

      {/* Footer with copyright information */}
      <footer className="py-8 text-center text-[#6FA8C1]">
        {/* Dynamic copyright year that updates automatically */}
        <p>© {new Date().getFullYear()} Pumped. All rights reserved.</p>
      </footer>
    </div>
  );
}
