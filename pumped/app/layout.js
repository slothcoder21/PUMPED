import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pumped",
  description: "Track your fitness goals and workouts with Pumped",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-white text-[#284352]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
