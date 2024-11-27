"use client"

import Header from "../../components/shared/nav-bar"
import FormImage from "../../../public/form-img.svg"
import Image from "next/image"
import LoginForm from "@/components/auth/LoginForm"

export default function Login() {
    return (
        <div className="bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header />
            <div className="flex justify-between gap-20 px-0 sm:px-4 md:px-10 lg:px-20">
                <div className="hidden md:block flex-1 -ml-10 lg:-ml-10 md:ml-2">
                    <Image
                        src={FormImage}
                        alt="Form Image"
                        className="pb-10"
                    />
                </div>

                <div className="m-auto p-5 sm:p-0 flex-1 md:max-w-lg max-w-[32rem] lg:mt-16 mt:mb-16">
                    <p className="text-[#101828] text-5xl font-semibold">Login</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
