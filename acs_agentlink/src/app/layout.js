import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ['latin'], 
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "A.C.S. AgentLink",
  description: "Elevate your prop firm with expert support agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
