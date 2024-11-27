"use client"

import Header from "../../components/shared/nav-bar"
import ForgotPasswordFlow from "@/components/auth/ForgotPasswordFlow"

export default function ForgetPassword() {
    return (
        <div className=" bg-grayscale-white w-full min-h-screen overflow-hidden">
            <Header />
            <div className="flex flex-col items-center justify-center w-full min-h-[calc(80vh-64px)]">
                <div className="w-[60%] md:w-[50%]">

                    <ForgotPasswordFlow/>

                </div>
                  

            </div>
        </div>
    )
}
