"use client"

import Header from "../../components/shared/nav-bar"
import FormImage from "../../../public/form-img.svg"
import Image from "next/image"
import HireAgentForm from "@/components/hire-agent/Form"

export default function HireAgent() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header />
            <div className="flex justify-between items-center gap-20 px-0 sm:px-4 md:px-10 lg:px-20">
                <div className="hidden md:block flex-1 -ml-10 lg:-ml-10 md:ml-2">
                    <Image
                        src={FormImage}
                        alt="Form Image"
                        className="pb-10"
                    />
                </div>

                <div className="p-5 sm:p-0 flex-1 max-w-lg lg:pr-16">
                    <p className="text-[#101828] text-5xl font-semibold">Hire an<br />agent</p>
                    <HireAgentForm />
                </div>
            </div>
        </div>
    )
}
