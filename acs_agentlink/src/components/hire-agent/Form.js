"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "./FormSchema";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HireForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      emailSupportCombined: [],
      liveChatCombined: [],
      socialMediaCombined: [],
      otherPlatformsCombined: [],
    },
    resolver: zodResolver(FormDataSchema),
    mode: "onBlur",
  });

  const { handleSubmit, trigger, watch } = methods;

  const processForm = async (data) => {
    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone_number", data.whatsapp_number);
    formData.append("telegram", data.telegram);
    formData.append("location", data.location);
    formData.append("another_job", data.another_job);
    formData.append("job_description", data.job_description);
    formData.append("availability", data.availability);

    formData.append("support_experience", data.support_experience);
    formData.append("support_experience_description", data.support_experience_description);
    formData.append("email_support", JSON.stringify(data.emailSupportCombined)); 
    formData.append("live_chat", JSON.stringify(data.liveChatCombined)); 
    formData.append("social_media_support", JSON.stringify(data.socialMediaCombined)); 
    formData.append("other_platforms", JSON.stringify(data.otherPlatformsCombined)); 

    try {
      console.log(data)
      await axios.post("/api/hire-an-agent", formData);
      router.push("/hire-an-agent/success");
    } catch (error) {
      setLoading(false);
      const apiError =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "An unexpected error occurred.";
      setErrorMessage(apiError);
    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) {
      console.error("Validation failed for fields:", methods.formState.errors);
      return;
    }

    if (output) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit(processForm)();
      }
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className="flex flex-col justify-between text-[#101828] pb-10">
        {/* Steps Indicator */}
        <nav aria-label="Progress" className="w-[100px] mt-5">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1">
                <div className="relative">
                  {/* Step Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 left-full transform -translate-y-1/2 w-full border-t-2 ${
                        currentStep > index
                          ? "border-grayscale-header_weak"
                          : "border-gray-200"
                      }`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {/* Step Line */}
                  <div
                    className={`w-full h-1 rounded-full ${
                      currentStep >= index
                        ? "bg-grayscale-header_weak"
                        : "bg-gray-200"
                    }`}
                    style={{ height: "4px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Form */}
        <form className="py-10">
          {currentStep === 0 && (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Step1 />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Step2 />
            </motion.div>
          )}
        </form>

        {/* Display error message below the form if there is any */}
        {errorMessage && (
          <div className="text-red-500 mt-2 break-words">{errorMessage}</div>
        )}
        {/* Navigation */}
          <div className="flex justify-between gap-5">
            {currentStep > 0 && (
              <button
                onClick={prev}
                className="w-full btn-secondary rounded-full border border-grayscale-line"
              >
                Back
              </button>
            )}
            <Button
              onClick={next}
              className="w-full btn-primary rounded-full p-8 text-md text-grayscale-white"
            >
              {loading ? (
                <div className="spinner"></div>
              ) : currentStep === steps.length - 1 ? (
                "Submit"
              ) : (
                "Next"
              )}
            </Button>
          </div>
      </section>
    </FormProvider>
  );
}

const steps = [
  {
    id: "1",
    fields: [
      
    ],
  },
  {
    id: "2",
    fields: [
      
    ],
  },
];
