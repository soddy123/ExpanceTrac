import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import {Toaster} from 'sonner'


const inter = Inter ({subsets:["latin"]});

export const metadata = {
  title: "Expance",
  description: "Manage Your Finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
       <body
        className={`${inter.className}`}
       >
        {/* -------------------header --------------------------*/}

        <Header/>
        <main className="min-h-screen">
          
          {children}
        </main>


{/* ---------------Toster------------------------ */}
        <Toaster richColors/>

        {/* -----------------footer ------------*/}

        <footer/>
       </body>
      </html>
    </ClerkProvider>
    
  );
}
