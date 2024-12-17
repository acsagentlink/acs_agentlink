"use client"

import Image from "next/image"
import checkIcon from "../../../public/tick-circle.svg"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
    const router = useRouter();

    const handleDone = () => {
         router.push('/login');
    }

    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <div className="items-center text-center flex flex-col gap-3 mt-10">

<Image
src={checkIcon}
height={200}
width={200}
/>

<p className="text-[#101828] text-2xl">Password changed Successfully</p>
<p className="text-[#667085]">You can now log in with your new password</p>
<Button onClick={handleDone} className="rounded-full">Done</Button>
            
            </div>
            
        </div>
    )
}