import Header from "../../../components/shared/nav-bar"
import Image from "next/image"
import checkIcon from "../../../../public/success_check.svg"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header/>
            <div className="items-center text-center flex flex-col gap-3 mt-10">

<Image
src={checkIcon}
height={250}
width={250}
/>

<p className="text-[#101828] text-2xl">Application completed!</p>
<p className="text-[#667085]">Thanks for applying, we will review<br></br>your application soon</p>
<Button className="rounded-full">Done</Button>
            
            </div>
            
        </div>
    )
}