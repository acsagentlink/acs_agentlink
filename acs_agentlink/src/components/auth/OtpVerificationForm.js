import { useState, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function OtpVerificationForm({ email, onVerify }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const inputRefs = useRef([]);
  const [otp2, setOtp2] = useState(Array(6).fill(""));
  const [otp, setOtp] = useState("");

  const handleVerify = async (data) => {
    setLoading(true);
    // Call Verify OTP API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const responseData = await response.json();

    if (response.ok) {
      setLoading(false);
      onVerify(responseData.reset_token);
    } else {
      setLoading(false);
      // Parse error response
      const apiError = responseData.error || "An unexpected error occurred.";
      setErrorMessage(apiError); 
    }
  };

  return (
    <div className="form space-y-5">
           <p className="pb-4 text-center text-3xl font-semibold text-[#101828]">Email Verification</p>
           <p className="text-center text-[#667085]">Enter the 6-digit code received on the email you provided</p>
      <div className="flex gap-2 justify-center otp-inputs">
        {[...Array(6)].map((_, i) => (
          <Input
          className="text-center w-20 h-20 text-5xl text-grayscale-line focus:outline-none focus:ring-transparent"
            key={i}
            type="text"
            maxLength="1"
            value={otp[i] || ""}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setOtp((prev) => prev.slice(0, i) + value + prev.slice(i + 1));
              setOtp2((prev) => {
                const newOtp = [...prev];
                newOtp[i] = value;
                return newOtp;
              });
              if (i < 5 && value) {
                inputRefs.current[i + 1].focus();
              }
            }}

            onKeyDown={(e) => {
              // Handle backspace to focus previous input
              if (e.key === "Backspace" && !otp2[i] && i > 0) {
                inputRefs.current[i - 1].focus();
              }
            }}
          />
        ))}
        
      </div>
      <div className="justify-center flex space-x-2">
 <p className="text-grayscale-placeholder">
        Didn’t receive the code? 
      </p>
<Link href="#" className="text-primary">Resend</Link>
 </div>
      <Button   
      disabled={loading} 
         className="w-full btn-primary rounded-full p-8 text-md text-grayscale-white"
 onClick={handleVerify}> {loading ?  <div className="spinner"></div>  : "Verify" }</Button>

{errorMessage && (
            <div className='text-red-500 mt-2'>
              {errorMessage}
            </div>
          )}
    </div>
  );
}
