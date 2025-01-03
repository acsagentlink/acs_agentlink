"use client"

import Header from "../../components/shared/nav-bar"
import FormImage from "../../../public/form-img.svg"
import BecomeAgentForm from "@/components/become-agent/Form"
import Image from "next/image"
import { getCookie } from "cookies-next"
import { redirect } from "next/navigation"

export default function BecomeAgent() {
    const token = getCookie('token'); // Retrieve the token from cookies
      if (token) {
        redirect('/dashboard'); // Redirect to login if no token
      }
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header/>
            <div className="flex justify-between gap-20 px-0 sm:px-4 md:px-10 lg:pl-20 lg:pr-[7rem]">

            <div className="hidden md:block flex-1 -ml-10 lg:-ml-10 md:ml-2">
          <Image
            src={FormImage}
            alt="Form Image"
            className="pb-10"
          />
        </div>


            <div className="m-auto p-5 sm:p-0 flex-1 md:max-w-lg max-w-[32rem] lg:mt-16 mt:mb-16">
                <p className="text-[#101828] text-5xl font-semibold mb-4">Become an agent</p>

                <BecomeAgentForm/>
            </div>
            </div>
            
        </div>
    )
}