import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

export default function Step2() {
  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  // Support experience functions
  const support_experience = watch("support_experience", "1");

  // Customer support functions
  const [showOtherFields, setShowOtherFields] = useState({});

  const categories = [
    {
      id: "emailSupport",
      label: "Email Support",
      options: ["Zendesk", "Intercom", "Other"],
    },
    {
      id: "liveChat",
      label: "Live Chat Support",
      options: ["Live Chat", "Tidio", "Zendesk", "Intercom", "Other"],
    },
    {
      id: "socialMedia",
      label: "Social Media Support",
      options: ["Discord", "Instagram", "Facebook", "Twitter", "Other"],
    },
    {
      id: "otherPlatforms",
      label: "Other Platforms",
      options: ["Whatsapp", "Other"],
    },
  ];

  const handleOtherChange = (categoryId, isChecked) => {
    setShowOtherFields((prev) => ({ ...prev, [categoryId]: isChecked }));
    if (!isChecked) {
      setValue(`${categoryId}.otherDetails`, ""); // Clear "Other" input if unchecked
    }
  };

  const combineOptions = (categoryId) => {
    const options = watch(categoryId) || {};
    const selectedOptions = Object.entries(options)
      .filter(([key, value]) => key !== "otherDetails" && value) // Exclude 'otherDetails' and keep checked options
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1)); // Capitalize first letter

    const otherDetails = options.otherDetails?.trim();
    return otherDetails ? [...selectedOptions, otherDetails] : selectedOptions;
  };

  const updateCombinedValues = (categoryId) => {
    const combined = combineOptions(categoryId);
    setValue(`${categoryId}Combined`, combined);
  };

  useEffect(() => {
    const currentCount = watch("employerCount");
    setValue(
      "employers",
      Array.from({ length: currentCount }, (_, index) => ({
        company_name: "",
        position_held: "",
        duration: "",
        supervisor_name: "",
        contact: "",
        ...(watch(`employers[${index}]`) || {}),
      }))
    );
  }, [watch("employerCount")]);
  

  // Employer functions
  const employerCount = watch("employerCount", 1); // Default to 1 employer

// Clear extra employer fields when switching back to 1 employer
const clearEmployerFields = () => {
  if (employerCount === 1) {
    setValue(`employers[1].company_name`, "");
    setValue(`employers[1].position_held`, "");
    setValue(`employers[1].duration`, "");
    setValue(`employers[1].supervisor_name`, "");
    setValue(`employers[1].contact`, "");
  }
};

  return (
    <>
      <h2 className="text-2xl mb-2">Experience</h2>
      <div className="space-y-5">
        {/* Prior experience */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="support_experience">
              Do you have prior experience in customer support?
            </Label>
            <Controller
              name="support_experience"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch
                  checked={value === "1"}
                  onCheckedChange={(checked) => {
                    onChange(checked ? "1" : "0");
                    // Update prior experience field
                    setValue(
                      "support_experience_description",
                      checked ? "" : "none",
                      { shouldValidate: true }
                    );
                  }}
                />
              )}
            />
          </div>
          {support_experience == true && (
            <textarea
              id="support_experience_description"
              {...register("support_experience_description")}
              placeholder="Elaborate on your experience, highlighting specific roles, and achievements"
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
            />
          )}
          {errors.support_experience_description && (
            <p className="text-red-500">
              {errors.support_experience_description.message}
            </p>
          )}
        </div>

        {/* Customer Support */}
        <div className="space-y-4">
          <p className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#344054]">
            Which platforms have you utilized for customer support?
          </p>
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <Label className="font-medium font-sm">{category.label}</Label>
              <div className="space-y-2 mt-2">
                {category.options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      {...register(`${category.id}.${option.toLowerCase()}`, {
                        onChange: () => updateCombinedValues(category.id),
                      })}
                      onClick={() =>
                        option === "Other" &&
                        handleOtherChange(
                          category.id,
                          !watch(`${category.id}.other`)
                        )
                      }
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
                {watch(`${category.id}.other`) && (
                  <Input
                    type="text"
                    placeholder="Specify other"
                    {...register(`${category.id}.otherDetails`, {
                      onChange: () => updateCombinedValues(category.id),
                    })}
                    className="mt-2 w-80 p-2 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
                  />
                )}
                {/* {errors[category.id]?.otherDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors[category.id].otherDetails.message}
              </p>
            )} */}
              </div>
              {/* <div className="mt-2">
                <Label>Selected {category.label} Options:</Label>
                <p className="text-gray-700">
                  {JSON.stringify(watch(`${category.id}Combined`) || [])}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Employers */}
        <div className="space-y-2">
          <p className="pb-2 pt-2 text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#344054]">
            Please, list up to two of your previous employers in customer
            support, providing the following information for each. If you have
            only one employer, that is acceptable.
          </p>
          <Label className="flex items-center">
            <input
              type="radio"
              value={1}
              {...register("employerCount", {
                onChange: clearEmployerFields,
              })}
              defaultChecked
            />
            <p className="text-base text-grayscale-header ml-2">
              I have only one employer
            </p>
          </Label>
          <Label className="flex items-center">
            <input type="radio" 
            value={2}
             {...register("employerCount", {
              onChange: clearEmployerFields
             })} />
            <span className="text-base text-grayscale-header ml-2">
              I have two employers
            </span>
          </Label>
        </div>
        {/* Employer Fields */}
        {[...Array(Number(employerCount))].map((_, index) => (
          <div key={index} className="space-y-4">
            <Label>Employer: {index + 1}</Label>

            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                {...register(`employers[${index}].company_name`, { required: true })}
                placeholder="Enter company name"
                className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              />
            </div>

            <div className="space-y-2">
              <Label>Position Held</Label>
              <Input
                {...register(`employers[${index}].position_held`)}
                placeholder="Enter position"
                className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              />
            </div>

            <div className="space-y-2">
              <Label>Duration of Employment</Label>
              <Input
                {...register(`employers[${index}].duration`)}
                placeholder="Enter duration"
                className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              />
            </div>

            <div className="space-y-2">
              <Label>Supervisor&apos;s Name</Label>
              <Input
                {...register(`employers[${index}].supervisor_name`, { required: true })}
                placeholder="Enter supervisor's name"
                className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              />
            </div>

            <div className="space-y-2">
              <Label>Reference Contact Information</Label>
              <Input
                {...register(`employers[${index}].contact`)}
                placeholder="Enter contact information"
                className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
