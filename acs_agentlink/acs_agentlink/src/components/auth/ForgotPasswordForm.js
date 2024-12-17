"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPasswordForm({ onNext }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // Call Forgot Password API
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        onNext(data.email);
      } else {
        setLoading(false);
        // Parse error response
        const apiError = responseData.error.email || "An unexpected error occurred.";
        setErrorMessage(apiError);
      }
   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="pb-4 text-center text-3xl font-semibold text-[#101828]">
        Forgot password
      </p>
      <p className="mb-6 text-center text-[#667085]">Reset your password</p>
      <Label className="text-[#344054]" htmlFor="email">
        Email address
      </Label>
      <Input
        type="email"
        {...register("email")}
        placeholder="Enter your email address"
        className="mt-2 h-12 text-grayscale-header_weak focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <div className="pt-10">
        <Button
          disabled={loading}
          type="submit"
          className="w-full btn-primary rounded-full p-8 text-md text-grayscale-white"
        >
          {loading ? <div className="spinner"></div> : "Next"}
        </Button>
      </div>

      {errorMessage && (
            <div className='text-red-500 mt-2'>
              {errorMessage}
            </div>
          )}
    
    </form>
  );
}
