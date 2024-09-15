import Image from 'next/image'
import LogoBlack from '../../../public/logo-black.png'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"
import Hamburger from '../../../public/hamburger-black.png'

export default function Header() {
  
    return (
      
        <header className="flex items-center justify-between sm:px-28 px-10 pt-5 pb-5">
      <Link href="/" prefetch={false}>
      <Image
            src={LogoBlack}
            />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Link href="#" prefetch={false} className='px-4 py-2 sm:hidden'>
      <Image
            src={Hamburger}
            />
      </Link>

      
        </SheetTrigger>
        <SheetContent side="top" className="sm:hidden w-full bg-white text-grayscale-placeholder">
      <Image
            src={LogoBlack}
            alt="Logo"
            className='mx-5 mt-5'
            />

             <SheetClose className="absolute top-4 right-4 mx-5 mt-5">
            <button className="text-2xl">✕</button>
          </SheetClose>
          
          <nav className="flex flex-col items-start gap-6 p-6 mt-10">
          <Link
                href="/"
                className="text-grayscale-placeholder hover:rounded-3xl hover:bg-white hover:bg-opacity-10 hover:text-grayscale-header py-3 px-6"
              >
                Home
              </Link>
        <Link
                href="/#features"
                className="text-grayscale-placeholder hover:rounded-3xl hover:bg-white hover:bg-opacity-10 hover:text-grayscale-header py-3 px-6"
              >
                Features
              </Link>
        <Link
                href="/#faqs"
                className="text-grayscale-placeholder hover:rounded-3xl hover:bg-white hover:bg-opacity-10 hover:text-grayscale-header py-3 px-6"
              >
                FAQ
              </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden items-center sm:flex">
      <Link
                href="/"
                className="relative text-grayscale-placeholder hover:rounded-3xl hover:bg-grayscale-placeholder hover:text-grayscale-background py-3 px-6"
              >
                Home
              </Link>
        <Link
                href="/#features"
                className="relative text-grayscale-placeholder hover:rounded-3xl hover:bg-grayscale-placeholder hover:text-grayscale-background py-3 px-6"
              >
                Features
              </Link>
        <Link
                href="/#faqs"
                className="relative text-grayscale-placeholder hover:rounded-3xl hover:bg-grayscale-placeholder hover:text-grayscale-background py-3 px-6"
              >
                FAQ
              </Link>
        
      </nav>
    </header>

  );

}