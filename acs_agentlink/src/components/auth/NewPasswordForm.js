"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const schema = z.object({
  password: z
    .string()
    .min(5, "Password must be longer than 4 characters")
    .regex(/[A-Z]/, "Password should include 1 uppercase letter")
    .regex(/\d/, "Password should include 1 number")
    .regex(/[!@#$%^&*]/, "Password should include 1 symbol"),
});

export default function NewPasswordForm({ email, resetToken, onSubmit }) {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const handlePasswordSubmit = async (data) => {
    setLoading(true);
    // Call API to save new password
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email,
        reset_token: resetToken,
        new_password: data.password }),
    });

    const responseData = await response.json();

    if (response.ok) {
        setLoading(false);
      onSubmit();
    } else {
        setLoading(false);
      // Parse error response
      const apiError = typeof responseData.error === "string"
  ? responseData.error
  : JSON.stringify(responseData.error || "An unexpected error occurred.");

      setErrorMessage(apiError);
    }
  };

  return (
    <form onSubmit={handleSubmit(handlePasswordSubmit)} className="form space-y-2">
                   <p className="pb-4 text-center text-3xl font-semibold text-[#101828]">New Password</p>
                   <p className="text-center text-[#667085]">Create a new secure password</p>
                   <div className='relative'>
                    <Input
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                {...register('password')} 
                placeholder="Enter new password" 
                className="h-12 text-grayscale-header_weak focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" />
              <span onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"

                >
{showPassword ? <EyeOffIcon className='text-grayscale-placeholder'/> : <EyeIcon className='text-grayscale-placeholder'/>}
              </span>
              </div>
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}


      <Button 
      disabled={loading} 
         className="w-full btn-primary rounded-full p-8 text-md text-grayscale-white"
      type="submit">Submit</Button>

{errorMessage && (
            <div className='text-red-500 mt-2'>
              {errorMessage}
            </div>
          )}
    </form>
  );
}
