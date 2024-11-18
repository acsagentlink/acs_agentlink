import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import FileIcon from "../../../public/file-icon.svg";
import { useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Step1() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const resumeFile = watch("resume");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("resume", file, { shouldValidate: true });
    }
  };

  // Watch the value of the has another job switch
  const anotherJob = watch("anotherJob");
  const hasAnotherJob = watch("hasAnotherJob", true); // Default to true

  // Effect to handle anotherJob value based on switch state
  useEffect(() => {
    if (!hasAnotherJob) {
      setValue("anotherJob", "None");
    } else if (anotherJob === "None") {
      setValue("anotherJob", "");
    }
  }, [hasAnotherJob, anotherJob, setValue]);

  return (
    <>
      <h2 className="text-2xl mb-2">Personal Information</h2>
      <div className="space-y-5">
        {/* Fullname */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="password">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            >
              {showPassword ? (
                <EyeOffIcon className="text-grayscale-placeholder" />
              ) : (
                <EyeIcon className="text-grayscale-placeholder" />
              )}
            </span>
          </div>
        </div>

        {/* Whatsapp number */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="whatsapp_number">
            Whatsapp number
          </Label>
          <Input
            id="whatsapp_number"
            {...register("whatsapp_number")}
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.whatsapp_number && (
            <p className="text-red-500">{errors.whatsapp_number.message}</p>
          )}
        </div>

        {/* Telegram username */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="telegram">
            Telegram username
          </Label>
          <Input
            id="telegram"
            {...register("telegram")}
            placeholder="@username"
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.telegram && (
            <p className="text-red-500">{errors.telegram.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="location">
            Location
          </Label>
          <Input
            id="location"
            {...register("location")}
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <h2 className="text-2xl mb-2 text-[#344054]">
            Availability
          </h2>

            <Label
              className="text-[#344054]"
              htmlFor="availability"
            >
              What days, and hours are you available to work?
            </Label>
            <Input
            id="availability"
            {...register("availability")}
            className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.availability && (
            <p className="text-red-500">{errors.availability.message}</p>
          )}
        </div>

        {/* Do you currently hold another job? */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              className="text-[#344054]"
              htmlFor="anotherJob"
            >
              Do you currently hold another job?
            </Label>
            <Controller
              name="hasAnotherJob"
              control={control}
              defaultValue={true}
              render={({ field: { value, onChange } }) => (
                <Switch checked={value} onCheckedChange={onChange} />
              )}
            />
          </div>
          {hasAnotherJob && (
            <Input
              className="h-28 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="anotherJob"
              {...register("anotherJob")}
              placeholder="Describe your current role, and responsibilities"
            />
          )}
          {errors.anotherJob && (
            <p className="text-red-500">{errors.anotherJob.message}</p>
          )}
        </div>

      
      </div>
    </>
  );
}
