"use client"

import Header from "../../components/shared/nav-bar"
import ContactImage from "../../../public/contact.svg"
import Image from "next/image"
import ContactForm from "@/components/contact/ContactForm"

export default function Contact() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header />
            <div className="flex justify-between gap-20 px-0 sm:px-4 md:px-10 lg:px-20">
                <div className="hidden md:block flex-1 -ml-10 lg:-ml-10 md:ml-2">
                    <Image
                        src={ContactImage}
                        alt="Form Image"
                        className="pb-10"
                    />
                </div>

                <div className="p-5 sm:p-0 flex-1 max-w-lg lg:pr-16 lg:mt-16 mt:mb-16">
                    <p className="mb-2 text-[#101828] text-2xl font-medium">Contact us</p>
                    <p className="text-grayscale-placeholder">We&apos;re here to help! Whether you have questions, feedback, or need more information about our services, please feel free to reach out. Complete the form below, and a member of our team will get back to you via email as soon as possible.</p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
