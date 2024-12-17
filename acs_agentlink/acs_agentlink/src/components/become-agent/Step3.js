"use client";

import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import CustomSlider from "../shared/CustomSlider";

export default function Step3() {
  const {
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const languagesList = ["English", "Spanish", "French", "German", "Arabic"];

  // Watch the languages array
  const selectedLanguages = watch("languages", []);

  const otherLanguageName = watch("otherLanguage", ""); // Watch "Other" language input value
  const otherLanguageSelected = watch("otherSelected", false); // Checkbox state for "Other

  // Function to handle language selection
  const handleLanguageSelection = (language) => {
    const currentLanguages = getValues("languages") || [];
    const languageIndex = currentLanguages.findIndex(
      (item) => item.language === language
    );

    if (languageIndex > -1) {
      // Language already selected -> Remove it
      const updatedLanguages = currentLanguages.filter(
        (item) => item.language !== language
      );
      setValue("languages", updatedLanguages);
    } else {
      // Add the new language with a default proficiency
      const updatedLanguages = [...currentLanguages, { language, percent: 50 }];
      setValue("languages", updatedLanguages);
    }
  };

  // Function to handle proficiency slider changes
  const handlePercentChange = (language, percent) => {
    const currentLanguages = getValues("languages") || [];
    const updatedLanguages = currentLanguages.map((item) =>
      item.language === language ? { ...item, percent } : item
    );
    setValue("languages", updatedLanguages);
  };

   // Handle "Other" checkbox change
   const handleOtherSelection = (isChecked) => {
    setValue("otherSelected", isChecked);

    if (!isChecked) {
      // Unchecking "Other" clears its input and removes it from the list
      setValue("otherLanguage", "");
      const currentLanguages = getValues("languages") || [];
      const updatedLanguages = currentLanguages.filter(
        (item) => item.language !== otherLanguageName
      );
      setValue("languages", updatedLanguages);
    }
  };

 // Handle "Other" input change
 const handleOtherInputChange = (value) => {
  setValue("otherLanguage", value);

  // Update the languages array when the input is valid
  const currentLanguages = getValues("languages") || [];
  const otherIndex = currentLanguages.findIndex(
    (item) => item.language === otherLanguageName
  );

  // Replace or add the "Other" language dynamically
  if (value) {
    if (otherIndex > -1) {
      currentLanguages[otherIndex].language = value;
    } else {
      currentLanguages.push({ language: value, percent: 50 });
    }
    setValue("languages", currentLanguages);
  } else if (otherIndex > -1) {
    // Remove if input is cleared
    const updatedLanguages = currentLanguages.filter(
      (item) => item.language !== otherLanguageName
    );
    setValue("languages", updatedLanguages);
  }
};


  // Watch the value of the trading experience and specific skill
  const trading_experience = watch("trading_experience", "1");

  return (
    <>
      <h2 className="text-2xl mb-2">Skills and Qualifications</h2>
      <Label htmlFor="languages">What languages do you speak fluently?</Label>
      <p className="text-grayscale-placeholder font-normal">
        Specify your proficiency level for each language
      </p>

      <div className="space-y-5">
        {/* Select languages */}
        <div className="space-y-2">
          {languagesList.map((lang) => {
            return (
              <div key={lang} className="flex items-center gap-4 pt-6">
                {/* Checkbox */}

                <input
                  type="checkbox"
                  onChange={() => handleLanguageSelection(lang)}
                  checked={selectedLanguages.find(
                    (item) => item.language === lang
                  )}
                />

                {/* Language Label or Custom Input */}
                <Label className="text-lg font-medium flex-1">{lang}</Label>

                {/* Slider */}
                <div className="w-1/2 mr-5">
                  <CustomSlider
                    value={
                      selectedLanguages.find((item) => item.language === lang)
                        ?.percent || 50
                    }
                    onChange={(e) => {
                      handlePercentChange(lang, Number(e.target.value));
                    }}
                    disabled={
                      !selectedLanguages.find((item) => item.language === lang)
                    }
                  />
                </div>
              </div>
            );
          })}

          {/* "Other" language option */}
          <div className="flex items-center gap-4 pt-6">
            <input
              type="checkbox"
              onChange={(e) => handleOtherSelection(e.target.checked)}
              checked={otherLanguageSelected}
            />
            <Label className="text-lg font-medium flex-1">Other</Label>
            <div className="w-1/2 mr-5">

            <CustomSlider
                  value={
                    selectedLanguages.find((item) => item.language === otherLanguageName)
                      ?.percent || 50
                  }
                  onChange={(e) =>
                    handlePercentChange(otherLanguageName,
                      Number(e.target.value)
                    )
                  }
                  disabled={!otherLanguageSelected}
                />
                </div>
          </div>
          {otherLanguageSelected && (
              
                <Input
                  className="h-12 w-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
                  type="text"
                  placeholder="Enter language"
                  value={otherLanguageName}
                  onChange={(e) => handleOtherInputChange(e.target.value)}
                />
            )}
             {errors.otherLanguage && (
            <p className="text-red-500">{errors.otherLanguage.message}</p>
          )}
          {errors.languages && (
            <p className="text-red-500">{errors.languages.message}</p>
          )}
        </div>

        {/* Trading Experience */}
        <div className="space-y-2">
          <div className="pb-2 pt-2 flex justify-between items-center">
            <Label htmlFor="trading_experience" className="max-w-[70%]">
              Do you have experience working with proprietary trading firms, or
              the finance industry?
            </Label>
            <Controller
              name="trading_experience"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch
                checked={value === "1"} 
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                  setValue("trading_experience_description", checked ? "" : "none", { shouldValidate: true })
                }} />
              )}
            />
          </div>
          {trading_experience == true && (
            <textarea
              id="trading_experience_description"
              {...register("trading_experience_description")}
              placeholder="Detail your experience emphasizing relevant skills, and insights gained"
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
            />
          )}
          {errors.trading_experience_description && (
            <p className="text-red-500">{errors.trading_experience_description.message}</p>
          )}
        </div>

        {/* Specific skill */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="specific_skills">
            What specific skills do you possess that make you an ideal candidate
            for this role?
          </Label>
          <textarea
            id="specific_skills"
            {...register("specific_skills")}
            placeholder="e.g., exceptional communication, analytical problem-solving, effective multitasking, etc"
            className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.specific_skills && (
            <p className="text-red-500">{errors.specific_skills.message}</p>
          )}
        </div>
      </div>
    </>
  );
}
