
"use client"

import Header from "../../../components/shared/nav-bar"
import Image from "next/image"
import checkIcon from "../../../../public/success_check.svg"
import reviewIcon from "../../../../public/review_icon.svg"
import responseIcon from "../../../../public/response_icon.svg"
import needIcon from "../../../../public/need_icon.svg"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

import { useRouter } from "next/navigation"

export default function SuccessPage() {
    const router = useRouter();

    const handleDone = () => {
         router.push('/');
    }

    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header/>
            <div className="items-center text-center flex flex-col gap-3 mt-10">

<Image
src={checkIcon}
height={250}
width={250}
/>

<p className="text-[#101828] text-2xl">Thank You for Your Request!</p>
<p className="text-[#667085]">We appreciate you reaching out to A.C.S AgentLink.<br></br> Your request has been successfully submitted, and our team is now <br></br> reviewing the details provided.</p>
<Button onClick={handleDone} className="rounded-full">Done</Button>
            
            </div>

            {/* Icon Blocks */}
<div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<p className="text-[#101828] text-xl text-center mb-10">What Happens Next?</p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
    {/* Icon Block */}
    <div className="rounded-3xl border border-[#D9DBE9] px-6 pt-6 pb-16 h-full">
    <Image src={reviewIcon} height={150} width={150} />
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Review Process</h3>
        <p className="mt-1 text-[#A0A3BD]">Our team will carefully evaluate your requirements to ensure we match you with the most suitable agents.</p>
      </div>
    </div>
    {/* End Icon Block */}
    {/* Icon Block */}
    <div className="rounded-3xl border border-[#D9DBE9] px-6 pt-6 pb-16 h-full">
    <Image src={responseIcon} height={150} width={150} />
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Response Time</h3>
        <p className="mt-1 text-[#A0A3BD]">You can expect to hear from us within 24 hours with updates, or any additional questions.</p>
      </div>
    </div>
    {/* End Icon Block */}
    {/* Icon Block */}
    <div className="rounded-3xl border border-[#D9DBE9] px-6 pt-6 pb-16 h-full">
    <Image src={needIcon} height={150} width={150} />
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Need Immediate <br /> Assistance?</h3>
        <p className="mt-1 text-[#A0A3BD]">If you have urgent inquiries, please, don’t hesitate to contact us at <a href="mailto:partners@acsagentlink.com" className="text-gray-800">partners@acsagentlink.com </a></p>
      </div>
    </div>
    {/* End Icon Block */}
  </div>
</div>
{/* End Icon Blocks */}

            
        </div>
    )
}