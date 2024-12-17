import Icon1 from "../../../public/extras-1.svg";
import Icon2 from "../../../public/extras-2.svg"; 
import Image from "next/image";
import Link from "next/link";

export default function Extras() {
  return (
    <div
      className="w-full mt-10 mb-28 items-center p-5 sm:p-20 pb-0 sm:pb-0"
      id="extras"
    > 

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-grayscale-header p-10 space-y-3 rounded-3xl">
          <Image src={Icon1} width={250} />
          <p className="font-medium text-2xl text-white pt-5">
            Hire an Agent
          </p>
          <div className=" text-grayscale-placeholder text-xl">
          Looking for a reliable, professional team to handle your proprietary trading firm’s customer support? With A.C.S AgentLink, you gain access to expert agents who can manage social
          media inquiries, live chat, and email communications 24/7. Our agents are dedicated to providing top-tier service, so you can focus on growing your business.
           <p className="h-5"></p>
          Ready to elevate your firm&apos;s support experience? Hire an agent today, and ensure your clients receive fast, and reliable assistance whenever they need it.
          </div>
          <div className="pt-10 pb-10">  
          <Link
                href="/hire-an-agent"
                className="  text-grayscale-white bg-primary rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-8  "
              >
                Hire an agent
              </Link>  
          </div>
          
        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
          <Image src={Icon2} width={250} />
          <p className="font-medium text-2xl text-grayscale-header pt-5">
            Become an Agent
          </p>
          <div className="text-grayscale-placeholder text-xl">
          Are you a highly skilled customer support professional looking to work with proprietary trading firms? At A.C.S AgentLink, we’re always searching for experienced agents who can deliver exceptional service across social media, live chat, and email platforms. Join our elite team, and help firms maintain strong client relationships while enjoying the flexibility of remote work.
          <p className="h-5"></p>
          Ready to make an impact? Apply now to become part of A.C.S AgentLink’s professional support network.
          </div>
          <div className="pt-10 pb-10">  
          <Link
                href="/become-an-agent"
                className="border border-grayscale-input  text-grayscale-header bg-grayscale-background rounded-full py-5 px-8  "
              >
                Become an agent
              </Link>  
          </div>
        </div>
      </div>
    </div>
  );
}
