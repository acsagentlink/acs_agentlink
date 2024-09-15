import Header from "../../components/shared/nav-bar"
import FormImage from "../../../public/form-img.svg"
import BecomeAgentForm from "@/components/become-agent/Form"
import Image from "next/image"
import checkIcon from "../../../../public/success_check.svg"

export default function SuccessPage() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header/>
            <div className="flex gap-10 lg:gap-20">

<Image
src={checkIcon}
/>

<p>Request Sent</p>
<p>Thanks for requesting an agent, we will contact you shortly</p>
            
            </div>
            
        </div>
    )
}