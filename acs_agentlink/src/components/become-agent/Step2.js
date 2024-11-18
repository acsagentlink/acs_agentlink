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

    // Watch the value of the work experience switch
    const experience = watch("experience");
    const hasExperience = watch("hasExperience", true); // Default to true
  
    // Effect to handle experience value based on switch state
    useEffect(() => {
      if (!hasExperience) {
        setValue("experience", "None");
      } else if (experience === "None") {
        setValue("experience", "");
      }
    }, [hasExperience, experience, setValue]);

  // Watch the state of dynamic fields
  const employerCount = watch("employerCount", 1); // Default to 1 employer

  const [showOtherFields, setShowOtherFields] = useState({
    emailSupport: false,
    liveChat: false,
    socialMedia: false,
    otherPlatforms: false,
  });

  const handleOtherChange = (category, isChecked) => {
    setShowOtherFields((prev) => ({
      ...prev,
      [category]: isChecked,
    }));
  };

  return (
    <>
      <h2 className="text-2xl mb-2">Experience</h2>
      <div className="space-y-5">
        {/* Prior experience */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="experience">
              Do you have prior experience in customer support?
            </Label>
            <Controller
              name="hasExperience"
              control={control}
              defaultValue={true}
              render={({ field: { value, onChange } }) => (
                <Switch checked={value} onCheckedChange={onChange} />
              )}
            />
          </div>
          {hasExperience && (
            <Input
              id="experience"
              {...register("experience")}
              placeholder="Elaborate on your experience, highlighting specific roles, and achievements"
              className="h-28 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
            />
          )}
          {errors.experience && (
            <p className="text-red-500">{errors.experience.message}</p>
          )}
        </div>

                 {/* Email Support */}
      <div>
        <label className="block font-medium text-gray-700">Email Support</label>
        <div className="space-y-2 mt-2">
          <label className="flex items-center">
            <input type="checkbox" {...register("emailSupport.zendesk")} />
            <span className="ml-2">Zendesk</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" {...register("emailSupport.intercom")} />
            <span className="ml-2">Intercom</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("emailSupport.other")}
              onChange={(e) =>
                handleOtherChange("emailSupport", e.target.checked)
              }
            />
            <span className="ml-2">Other</span>
          </label>
          {showOtherFields.emailSupport && (
            <input
              type="text"
              placeholder="Please specify"
              {...register("emailSupport.otherDetails")}
              className="mt-2 border rounded-md w-full p-2"
            />
          )}
        </div>
      </div>

      {/* Live Chat Support */}
      <div>
        <label className="block font-medium text-gray-700">Live Chat Support</label>
        <div className="space-y-2 mt-2">
          <label className="flex items-center">
            <input type="checkbox" {...register("liveChat.liveChat")} />
            <span className="ml-2">Live Chat</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" {...register("liveChat.tidio")} />
            <span className="ml-2">Tidio</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("liveChat.other")}
              onChange={(e) => handleOtherChange("liveChat", e.target.checked)}
            />
            <span className="ml-2">Other</span>
          </label>
          {showOtherFields.liveChat && (
            <input
              type="text"
              placeholder="Please specify"
              {...register("liveChat.otherDetails")}
              className="mt-2 border rounded-md w-full p-2"
            />
          )}
        </div>
      </div>

      {/* Social Media Support */}
      <div>
        <label className="block font-medium text-gray-700">Social Media Support</label>
        <div className="space-y-2 mt-2">
          <label className="flex items-center">
            <input type="checkbox" {...register("socialMedia.discord")} />
            <span className="ml-2">Discord</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" {...register("socialMedia.instagram")} />
            <span className="ml-2">Instagram</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("socialMedia.other")}
              onChange={(e) =>
                handleOtherChange("socialMedia", e.target.checked)
              }
            />
            <span className="ml-2">Other</span>
          </label>
          {showOtherFields.socialMedia && (
            <input
              type="text"
              placeholder="Please specify"
              {...register("socialMedia.otherDetails")}
              className="mt-2 border rounded-md w-full p-2"
            />
          )}
        </div>
      </div>

      {/* Other Platforms */}
      <div>
        <label className="block font-medium text-gray-700">Other Platforms</label>
        <div className="space-y-2 mt-2">
          <label className="flex items-center">
            <input type="checkbox" {...register("otherPlatforms.whatsapp")} />
            <span className="ml-2">WhatsApp</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("otherPlatforms.other")}
              onChange={(e) =>
                handleOtherChange("otherPlatforms", e.target.checked)
              }
            />
            <span className="ml-2">Other</span>
          </label>
          {showOtherFields.otherPlatforms && (
            <input
              type="text"
              placeholder="Please specify"
              {...register("otherPlatforms.otherDetails")}
              className="mt-2 border rounded-md w-full p-2"
            />
          )}
        </div>
      </div>

        {/* Employer Count */}
        <div className="space-y-2">
          <Label className="text-sm font-normal">Please, list up to two of your previous employers in customer support, providing the following information for each. If you have only one employer, that is acceptable.</Label>
            <label className="flex items-center">
              <input
                type="radio"
                value={1}
                {...register("employerCount")}
                defaultChecked
              />
              <span className="ml-2">I have only one employer</span>
            </label>
            <label className="flex items-center">
              <input type="radio" 
              value={2} 
              {...register("employerCount")} />
              <span className="ml-2">I have two employers</span>
            </label>
        </div>

        {/* Employer Fields */}
        {[...Array(Number(employerCount))].map((_, index) => (
          <div key={index} className="space-y-4">
            <Label>Employer {index + 1}</Label>

            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                {...register(`employer[${index}].company_name`)}
                placeholder="Enter company name"
              />
            </div>

            <div className="space-y-2">
              <Label>Position Held</Label>
              <Input
                {...register(`employer[${index}].position_held`)}
                placeholder="Enter position"
              />
            </div>

            <div className="space-y-2">
              <Label>Duration of Employment</Label>
              <Input
                {...register(`employer[${index}].duration`)}
                placeholder="Enter duration"
              />
            </div>

            <div className="space-y-2">
              <Label>Supervisor&apos;s Name</Label>
              <Input
                {...register(`employer[${index}].supervisor_name`)}
                placeholder="Enter supervisor's name"
              />
            </div>

            <div className="space-y-2">
              <Label>Reference Contact Information</Label>
              <Input
                {...register(`employer[${index}].reference_contact`)}
                placeholder="Enter contact information"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
