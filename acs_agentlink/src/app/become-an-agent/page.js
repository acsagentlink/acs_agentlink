import Header from "../../components/shared/nav-bar"
import FormImage from "../../../public/form-img.svg"
import BecomeAgentForm from "@/components/become-agent/Form"
import Image from "next/image"

export default function BecomeAgent() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header/>
            <div className="flex gap-10 lg:gap-20">

            <div className="hidden md:block pl-10 lg-pl-0">
          <Image
            src={FormImage}
            alt="Form Image"
          />
        </div>


            <div className="w-full p-10 pt-3">
                <p className="text-[#101828] text-5xl font-semibold mb-4">Become an agent</p>

                <BecomeAgentForm/>
            </div>
            </div>
            
        </div>
    )
}