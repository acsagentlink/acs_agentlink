import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function Step1() {

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
      <div className="space-y-5">
        {/* Company details */}
        <div className="space-y-2">
        <h2 className="text-2xl mb-2">Company Details</h2>

          <Label htmlFor="companyName">
            Company name
          </Label>
          <Input
            id="companyName"
            {...register("companyName")}
            placeholder="Enter your company name"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
        </div>

        {/* Full name */}
        <div className="space-y-2">
        <h2 className="text-2xl mb-2">Who should we contact?</h2>

          <Label htmlFor="email">
            Full Name
          </Label>
          <Input
            id="name"
            type="name"
            {...register("name")}
            placeholder="Enter your first name"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>

                {/* Email Address */}
                <div className="space-y-2">
          <Label htmlFor="email">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter email address"
            className="h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">
            Where are you located?
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
      
      </div>
    </>
  );
}
