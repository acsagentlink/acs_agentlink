import Sidebar from './Sidebar';
import { Outfit } from "next/font/google";

const outfit = Outfit({ 
  subsets: ['latin'], 
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Layout = ({ children }) => {
  return (
    <div className={`${outfit.className} flex h-screen overflow-hidden`}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 bg-grayscale-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
