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

  // Watch the value of the has another job switch
  const another_job = watch("another_job", "1"); // Default to true

  return (
    <>
      <h2 className="text-2xl mb-2">Personal Information</h2>
      <div className="space-y-5">
        {/* Fullname */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Full name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
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
          <Label htmlFor="whatsapp_number">
            Whatsapp number
          </Label>
          <Input
            id="whatsapp_number"
            {...register("whatsapp_number")}
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.whatsapp_number && (
            <p className="text-red-500">{errors.whatsapp_number.message}</p>
          )}
        </div>

        {/* Telegram username */}
        <div className="space-y-2">
          <Label htmlFor="telegram">
            Telegram username
          </Label>
          <Input
            id="telegram"
            {...register("telegram")}
            placeholder="@username"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.telegram && (
            <p className="text-red-500">{errors.telegram.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">
            Location
          </Label>
          <Input
            id="location"
            {...register("location")}
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
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
              htmlFor="availability"
            >
              What days, and hours are you available to work?
            </Label>
            <Input
            id="availability"
            {...register("availability")}
            placeholder="Please, specify time zone"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.availability && (
            <p className="text-red-500">{errors.availability.message}</p>
          )}
        </div>

        {/* Do you currently hold another job? */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="job_description"
            >
              Do you currently hold another job?
            </Label>
            <Controller
              name="another_job"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch 
                checked={value === "1"}
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                  // Update new job description field
                  setValue("job_description", checked ? "" : "none", { shouldValidate: true })
                }} />
              )}
            />
          </div>
          {another_job == true && (
            <textarea
              className="text-sm h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="job_description"
              {...register("job_description")}
              placeholder="Describe your current role, and responsibilities"
            />
          )}
          {errors.job_description && (
            <p className="text-red-500">{errors.job_description.message}</p>
          )}
        </div>

      
      </div>
    </>
  );
}
