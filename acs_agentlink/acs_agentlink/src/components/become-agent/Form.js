"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "./FormSchema";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Step5 from "./Step5";

export default function BecomeAgentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      languages: [],
      proficiency: 80,
      responses: 80,
      complex_messages: 80,
      emailSupportCombined: [],
      liveChatCombined: [],
      socialMediaCombined: [],
      otherPlatformsCombined: [],
      employerCount: '1',
      employers: [
        { company_name: "", position_held: "", duration: "", supervisor_name: "", contact: "" },
      ],
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
    formData.append("employers_no", data.employerCount);
    if (Array.isArray(data.employers)) {
      data.employers.forEach((employer, index) => {
        Object.keys(employer).forEach((key) => {
          formData.append(`employers[${index}][${key}]`, employer[key] || "");
        });
      });
    }

    data.languages.forEach((language, index) => {
      formData.append(`languages[${index}][language]`, language.language);
      formData.append(`languages[${index}][percent]`, language.percent);
    });
    formData.append("trading_experience", data.trading_experience);
    formData.append("trading_experience_description", data.trading_experience_description);
    formData.append("specific_skills", data.specific_skills);

    formData.append("proficiency", data.proficiency);
    formData.append("respones", data.responses);
    formData.append("complex_messages", data.complex_messages);
    formData.append("express_dissatisfaction", data.express_dissatisfaction);
    formData.append("assist_customer", data.assist_customer);

    formData.append("internet_power", data.internet_power);
    formData.append("internet_power_details", data.internet_power_details);
    formData.append("pc", data.pc);
    formData.append("pc_details", data.pc_details);
    formData.append("tools", data.tools);
    formData.append("tool_details", data.tool_details);
    formData.append("new_software", data.new_software);
    formData.append("new_software_details", data.new_software_details);
    formData.append("questions", data.questions)
    formData.append("question_details", data.question_details);
    formData.append("additional_information", data.additional_information);
    formData.append("resume", data.resume);

    console.log(data.resume);

    try {
      console.log(data)
      await axios.post("/api/become-an-agent", formData);
      router.push("/become-an-agent/success");
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
        <nav aria-label="Progress" className="w-[200px]">
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
        <form className="py-12">
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

          {currentStep === 2 && (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Step3 />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Step4 />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Step5 />
            </motion.div>
          )}
        </form>

        {/* Display error message below the form if there is any */}
        {errorMessage && (
          <div className="text-red-500 mt-2 break-words">{errorMessage}</div>
        )}
        {/* Navigation */}
        <div className="pt-5">
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
        </div>
      </section>
    </FormProvider>
  );
}

const steps = [
  {
    id: "1",
    fields: [
      "name",
      "email",
      "password",
      "whatsapp_number",
      "telegram",
      "location",
      "availability",
      "job_description",
    ],
  },
  {
    id: "2",
    fields: [
      "support_experience_description",
      "email_support",
      "live_chat_support",
      "social_media_support",
      "other_platform",
      "employers"
    ],
  },
  { id: "3", fields: ["languages", "otherLanguage", "trading_experience_description", "specific_skills"] },
  { id: "4", fields: ["express_dissatisfaction", "assist_customer"] },
  {
    id: "5",
    fields: [
      "internet_power_details",
      "pc_details",
      "tool_details",
      "new_software_details",
      "additional_information",
      "question_details",
      "resume",
    ],
  },
];
