import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pumped - Gym Tracker",
  description: "Track your fitness goals and workouts with Pumped",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
