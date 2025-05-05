import Link from 'next/link';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#305C74]">
            <span className="text-[#4D8DAA]">PUMPED</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/signin" className="text-[#305C74] hover:text-[#4D8DAA] transition-colors">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/signup" className="bg-[#4D8DAA] hover:bg-[#3B728E] px-4 py-2 rounded-md text-white transition-colors shadow-md">
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

      <footer className="py-8 text-center text-[#6FA8C1]">
        <p>© {new Date().getFullYear()} Pumped. All rights reserved.</p>
      </footer>
    </div>
  );
}
