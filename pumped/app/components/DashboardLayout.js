'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';
import SvgIcon from './SvgIcon';

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { name: 'Workouts', href: '/workouts', icon: 'workouts' },
  { name: 'Log Workout', href: '/workouts/log', icon: 'log-workout' },
  { name: 'Progress', href: '/progress', icon: 'progress' },
  { name: 'AI Workouts', href: '/ai-workouts', icon: 'ai-workouts' },
  { name: 'Profile', href: '/profile', icon: 'profile' },
  { name: 'Settings', href: '/settings', icon: 'settings' },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/signin');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-[#6FA8C1] hover:text-[#3B728E] hover:bg-[#F4F8FB]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar */}
      <div 
        className={`lg:hidden fixed inset-0 z-10 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#305C74] shadow-xl">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              <SvgIcon name="close" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-white">PUMPED</span>
              </h1>
            </div>
            <nav className="mt-8 px-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    pathname === item.href 
                      ? 'bg-[#4D8DAA] text-white' 
                      : 'text-[#CDE0EA] hover:bg-[#3B728E]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SvgIcon 
                    name={item.icon}
                    className="mr-3 h-5 w-5" 
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-[#3B728E] p-4">
            <button onClick={handleSignOut} className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="inline-block h-9 w-9 rounded-full bg-[#4D8DAA] overflow-hidden">
                  {session?.user?.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <SvgIcon name="user" className="h-full w-full text-[#CDE0EA]" />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{session?.user?.name || 'User'}</p>
                  <p className="text-xs font-medium text-[#9EC4D6] group-hover:text-white">
                    Sign out
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex-1 flex flex-col min-h-0 bg-[#305C74] shadow-xl">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-6">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-[#9EC4D6]">PUMPED</span>
              </h1>
            </div>
            <nav className="mt-8 flex-1 px-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    pathname === item.href 
                      ? 'bg-[#4D8DAA] text-white' 
                      : 'text-[#CDE0EA] hover:bg-[#3B728E] hover:text-white'
                  }`}
                >
                  <SvgIcon 
                    name={item.icon}
                    className="mr-3 h-5 w-5" 
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-[#3B728E] p-4">
            <button onClick={handleSignOut} className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="inline-block h-9 w-9 rounded-full bg-[#4D8DAA] overflow-hidden">
                  {session?.user?.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <SvgIcon name="user" className="h-full w-full text-[#CDE0EA]" />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{session?.user?.name || 'User'}</p>
                  <p className="text-xs font-medium text-[#9EC4D6] group-hover:text-white">
                    Sign out
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:pl-64 flex flex-col">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 