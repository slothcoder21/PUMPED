import Link from 'next/link';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-purple-500">PUMPED</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/signin" className="text-white hover:text-purple-300 transition-colors">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white transition-colors">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <Hero />
        <Features />
      </main>

      <footer className="py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Pumped. All rights reserved.</p>
      </footer>
    </div>
  );
}
