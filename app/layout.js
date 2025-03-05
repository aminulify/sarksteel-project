// Import the necessary fonts from next/font/google
import { Allura, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

// Outfit font configuration with specific weights
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200","300", "400", "500", "600", "700", "800"], 
});

// Allura font configuration (it typically has one weight)
const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "SarkSteel । Home",
  description: "Make your dreams come true with Sarkbd.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${allura.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
