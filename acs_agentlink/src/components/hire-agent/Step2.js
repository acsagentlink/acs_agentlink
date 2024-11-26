import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function Step2() {
  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const [count, setCount] = useState(2);
  
  const increment = () => {
    if (count < 2) setCount(count + 1);
  }

  const decrement = () => {
    if (count > 1) setCount(count -1);
  }

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

  // watch additional requirements 
  const additional_requirements = watch("additional_requirements", "1");

  return (
    <>
      <h2 className="text-2xl mb-2">Agent Requirements</h2>
      <div className="space-y-5">
      <div className="flex gap-6">
      <p className="text-sm text-[#344054]">How many agents are you looking to hire?</p>
      <div className="flex items-center gap-2">
        <Button
        type="button"
          onClick={decrement}
          className="bg-grayscale-background_weak rounded-2xl hover:bg-transparent h-8"
        >
          -
        </Button>
        <span
          className="text-sm text-grayscale-header"
        > 
          {count}
        </span>
        <Button
        type="button"
          onClick={increment}
          className="bg-grayscale-background_weak rounded-2xl hover:bg-transparent h-8"
        >
          +
        </Button>
      </div>
    </div>

               {/* Customer Support */}
        <div className="space-y-4">
          <Label className="text-sm text-[#344054]">
            Which platforms have you utilized for customer support?
          </Label>
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

        {/* Working hours */}
        <div className="space-y-2">
            <Label
              htmlFor="availability"
            >
              What are their working hours?
            </Label>
            <Input
            id="availability"
            {...register("availability")}
            placeholder="Include time zone"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.availability && (
            <p className="text-red-500">{errors.availability.message}</p>
          )}
        </div>

         {/* Additional Requirements */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="additional_requirements" className="max-w-[200px]">
              Any Additional Requirements?
            </Label>
            <Controller
              name="additional_requirements"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch
                  checked={value === "1"}
                  onCheckedChange={(checked) => {
                    onChange(checked ? "1" : "0");
                    // Update prior experience field
                    setValue(
                      "additional_requirement_detials",
                      checked ? "" : "none",
                      { shouldValidate: true }
                    );
                  }}
                />
              )}
            />
          </div>
          {additional_requirements == true && (
            <textarea
              id="additional_requirement_detials"
              {...register("additional_requirement_detials")}
              placeholder="Let us know if there’s anything else that will help us match your company with the perfect agents"
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
            />
          )}
          {errors.additional_requirement_detials && (
            <p className="text-red-500">
              {errors.additional_requirement_detials.message}
            </p>
          )}
        </div>



      </div>
    </>
  );
}
