import Image from "next/image";
import FooterIcon from "../../../public/footer-icon.svg";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

export default function Footer() {
  return (
    <div className="w-full text-center items-center bg-grayscale-header rounded-[34px]">
      <div className="flex flex-col text-white items-center p-5">
        <Image src={FooterIcon} />

        <p className="text-5xl">
          Ready to boost your<br></br>community support?
        </p>
        <p className="mt-5 opacity-60">Get started now or become an agent</p>

        <div className="mt-12 justify-center flex flex-col md:flex-row gap-4 items-center">
          <Link
            href="hire-an-agent"
            className="relative text-grayscale-white bg-primary rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-8 ring-[rgba(250,133,7,0.1)]  ring-8"
          >
            Hire an agent
          </Link>
          <Link
            href="become-an-agent"
            className="relative text-grayscale-white rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-6 border"
          >
            Become an agent
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row items-start m-6 sm:m-20 p-10 text-white bg-white bg-opacity-10 rounded-3xl">
        <div className="flex-shrink-0 space-y-20 mb-10 sm:mb-0">
          <Image src={Logo} alt="Footer Icon" />
        </div>

        <div className="flex-1"></div>

        <div className="sm:mt-0 mt-10 md:mt-20 sm:mt-20 lg:mt-0 flex flex-col lg:flex-row gap-20 text-left">
          <div className="flex flex-col">
            <p className="mb-4">Company</p>

            <div className="flex flex-col opacity-60 space-y-4">
              <Link href="contact">Contact us</Link> 
            </div>
          </div>

          <div className="flex flex-col">
            <p className="mb-4">Legal</p>
            <div className="flex flex-col opacity-60 space-y-4">
              <Link href="">Privacy policy</Link>
              <Link href="">Terms and conditions</Link> 
            </div>
          </div>

          <div className="flex flex-col">
            <p className="mb-4">Social</p>
            <div className="flex gap-4 opacity-60">
              {/* <Link href="">
                <Image src={FacebookIcon} />
              </Link>
              <Link href="">
                <Image src={TwitterIcon} />
              </Link> */}

              <Link href="">
                <Image src={InstagramIcon} />
              </Link>
              {/* <Link href="">
                <Image src={LinkedinIcon} />
              </Link> */}
            </div>
          </div>

        <p className="flex flex-col text-left opacity-70">© 2024 ACS Agent Link<br></br>
          All right reserved</p> 

        </div>

      
      </div>
    </div>
  );
}
