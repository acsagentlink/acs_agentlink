import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import FileIcon from "../../../public/file-icon.svg";

export default function Step5() {
  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const resumeFile = watch("resume");
  console.log(resumeFile);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("resume", file, { shouldValidate: true });
    }
  };

   // Watch the switch state and text field
   const internet_power = watch("internet_power", "1"); // "1" => Yes, "0" => No
   const pc = watch("pc", "1");
   const tools = watch("tools", "1");
   const new_software = watch("new_software", "1");
   const questions = watch("questions", "1");

  return (
    <>
      <div className="space-y-5">
        {/* Internet power */}
        <div className="space-y-2">
          <h1 className="text-2xl mb-2 text-[#101828]">
            Technical Proficiency
          </h1>
          <div className="flex justify-between items-center">
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="internet_power"
            >
              Will you have a steady power supply, and stable internet for the
              days, and hours that you have indicated that you will be available
              to work?
            </Label>
            <Controller
              name="internet_power"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch 
                checked={value === "1"}
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0")
                  // Update the value of internet_power_details
                  setValue("internet_power_details", checked ? "" : "none", { shouldValidate: true }) 

                }} />
              )}
            />
          </div>
          {internet_power == true && (
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="internet_power_details"
              {...register("internet_power_details")}
              placeholder="Provide details about your power backup, or internet solutions"
            />
          )}
          {errors.internet_power_details && (
            <p className="text-red-500">{errors.internet_power_details.message}</p>
          )}
        </div>

              {/* Pc details */}
              <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="pc"
            >
             Do you own a personal computer that you will utilize for work?
            </Label>
            <Controller
              name="pc"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch 
                checked={value==="1"} 
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                   // Update the value of pc_details 
                   setValue("pc_details", checked ? "" : "none", { shouldValidate: true })

                }} 
                />
              )}
            />
          </div>
          {pc == true && (
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="pc_details"
              {...register("pc_details")}
              placeholder="Describe the specifications of your computer"
            />
          )}
          {errors.pc_details && (
            <p className="text-red-500">{errors.pc_details.message}</p>
          )}
        </div>

         {/* Tools used */}
         <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="tools"
            >
             What software, or tools are you familiar with that could assist you in this role?
            </Label>
            <Controller
              name="tools"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch checked={value === "1"} onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                  // Update tool details field
                  setValue("tool_details", checked ? "" : "none", { shouldValidate: true})
                }} />
              )}
            />
          </div>
          {tools == true && (
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="tool_details"
              {...register("tool_details")}
              placeholder="e.g., ticketing systems, CRM software, etc"
            />
          )}
          {errors.workExperience && (
            <p className="text-red-500">{errors.workExperience.message}</p>
          )}
        </div>

        {/* New software */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="new_software"
            >
             Are you comfortable learning new software, and tools?
            </Label>
            <Controller
              name="new_software"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch
                checked={value === "1"}
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                  // Update new software details field
                  setValue("new_software_details", checked ? "" : "none", { shouldValidate: true })
                }} />
              )}
            />
          </div>
          {new_software == true && (
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="new_software_details"
              {...register("new_software_details")}
              placeholder="Provide examples of tools you have learned quickly in the past"
            />
          )}
          {errors.new_software_details && (
            <p className="text-red-500">{errors.new_software_details.message}</p>
          )}
        </div>

         {/* Additional Information */}
         <div className="space-y-2">
          <h1 className="text-2xl mb-2 text-[#101828]">
            Additional Information
          </h1>
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="additional_information"
            >
              Why do you want to work with A.C.S AgentLink?
            </Label>
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="additional_information"
              {...register("additional_information")}
              placeholder="Share your motivations, and what you hope to achieve in this role"
            />
          {errors.additional_information && (
            <p className="text-red-500">{errors.additional_information.message}</p>
          )}
        </div>

         {/* Other Questions */}
         <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              className="text-base font-normal flex-1 pr-2"
              htmlFor="questions"
            >
              Do you have any questions for us? 
            </Label>
            <Controller
              name="questions"
              control={control}
              defaultValue="1"
              render={({ field: { value, onChange } }) => (
                <Switch 
                checked={value === "1"} 
                onCheckedChange={(checked) => {
                  onChange(checked ? "1" : "0");
                  // Update question details text field
                  setValue("question_details", checked ? "" : "none", { shouldValidate: true})
                }} />
              )}
            />
          </div>
          {questions == true && (
            <textarea
              className="text-base h-28 w-full resize-none p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"
              id="question_details"
              {...register("question_details")}
              placeholder="Type your questions here"
            />
          )}
          {errors.question_details && (
            <p className="text-red-500">{errors.question_details.message}</p>
          )}
        </div>

        {/* Resume Upload Section */}
        <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="resume"></Label>
          <h2 className="text-2xl mb-2 text-[#344054]">Resume</h2>

          <div
            className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"
            onClick={() => document.getElementById("resume").click()}
          >
            <Input
              id="resume"
              type="file"
              {...register("resume", { required: "Resume is required" })}
              className="hidden "
              onChange={handleFileChange}
            />
            <div className="text-gray-500 flex flex-col items-center">
              <Image src={FileIcon} alt="File Icon" />
              <p>Upload or drag and drop</p>
              <p className="text-sm text-gray-400">max. 2MB</p>

              {resumeFile && (
                <p className="text-sm text-green-500 mt-2">{resumeFile.name}</p>
              )}
            </div>
          </div>
          {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )}
        </div>
      </div>
    </>
  );
}
