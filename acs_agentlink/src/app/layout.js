import { Outfit } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { DashboardProvider } from "@/context/DashboardContext";
import Head from 'next/head'


const outfit = Outfit({ 
  subsets: ['latin'], 
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "A•C•S AgentLink",
  description: "Elevate your prop firm with expert support agents",
};

export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <DashboardProvider>
        <UserProvider>{children}</UserProvider>
        </DashboardProvider>
</body>
    </html>
  );
}
