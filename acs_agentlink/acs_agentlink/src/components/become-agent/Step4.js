"use client";

import { Controller } from "react-hook-form";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";
import CustomSlider from "../shared/CustomSlider";

export default function Step4() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="space-y-5">
        {/* Profiency, Responses and Complex Messages question */}
        <h2 className="text-2xl mb-2">Communication Skills Assessment</h2>
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="proficiency">
            How would you evaluate your proficiency in punctuation, and message
            construction?
          </Label>
          <Controller
            name="proficiency"
            control={control}
            defaultValue={80}
            render={({ field }) => (
              <div className="ml-5 mr-5">
                <CustomSlider value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="responses">
            To what extent can you deliver clear, and timely responses to
            complex inquiries?
          </Label>
          <Controller
            name="responses"
            control={control}
            defaultValue={80}
            render={({ field }) => (
              <div className="ml-5 mr-5">
                <CustomSlider value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="responses">
            How proficient are you in reading, and comprehending complex
            messages quickly to provide accurate, and relevant responses?
          </Label>
          <Controller
            name="complex_messages"
            control={control}
            defaultValue={80}
            render={({ field }) => (
              <div className="ml-5 mr-5">
                <CustomSlider value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
        </div>

        {/* Client dissatisfaction */}
        <h2 className="text-2xl mb-2">Scenario-Based Questions</h2>
        <div className="space-y-2">
          <Label htmlFor="express_dissatisfaction" className="max-w-[70%]">
            How would you handle a situation where a client expresses
            dissatisfaction with your support?
          </Label>
          <textarea
            id="express_dissatisfaction"
            {...register("express_dissatisfaction")}
            placeholder=" Provide a brief response outlining your approach"
            className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.express_dissatisfaction && (
            <p className="text-red-500">{errors.express_dissatisfaction.message}</p>
          )}
        </div>

        {/* Assist Customer */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="assist_customer">
            Share an example of a time when you went above, and beyond to assist
            a customer. What was the situation, and what outcome did your
            actions lead to?
          </Label>
          <textarea
            id="assist_customer"
            {...register("assist_customer")}
            placeholder="e.g., exceptional communication, analytical problem-solving, effective multitasking, etc"
            className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.assist_customer && (
            <p className="text-red-500">{errors.assist_customer.message}</p>
          )}
        </div>
      </div>
    </>
  );
}
