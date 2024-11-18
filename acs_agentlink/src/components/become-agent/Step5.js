import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import FileIcon from '../../../public/file-icon.svg';
import { useEffect } from 'react';

export default function Step5() {

  const { register, setValue, watch, control, formState: { errors } } = useFormContext();

  const resumeFile = watch('resume');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('resume', file, { shouldValidate: true }); 
    }
  };
  

   // Watch the value of the work experience switch
   const workExperience = watch('workExperience');
   const hasWorkExperience = watch('hasWorkExperience', true); // Default to true
  
  // Effect to handle workExperience value based on switch state
  useEffect(() => {
    if (!hasWorkExperience) {
      setValue('workExperience', 'None');
    } else if (workExperience === 'None') {
      setValue('workExperience', '')
    }
  }, [hasWorkExperience, workExperience, setValue]);

  return (
    <>
    <h2 className='text-2xl mb-2'>Personal Information</h2>
      <div className="space-y-5">
     
{/* Do you currently hold another job? */}
      <div className='space-y-2'>
  <h2 className='text-2xl mb-2 text-[#344054]'>Work Experience</h2>
  <div className='flex justify-between items-center'>
    <Label className='text-base font-normal flex-1 pr-2' htmlFor="workExperience">
      Have you worked with proprietary firms before? If so, please provide details
    </Label>
    <Controller
    name='hasWorkExperience'
    control={control}
    defaultValue={true}
    render={({ field: { value, onChange} }) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  {hasWorkExperience && (
      <Input className="h-28 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" id="workExperience" {...register('workExperience')} placeholder="Tell us about your experience" />

  )}
          {errors.workExperience && <p className='text-red-500'>{errors.workExperience.message}</p>}

</div>

<div className='space-y-2'>
  <h2 className='text-2xl mb-2 text-[#344054]'>Availability and Commitment</h2>
  
  <div className='flex justify-between items-center'>
    <Label className='text-base font-normal flex-1 pr-2' htmlFor="availability">
      Can you commit to 7-8 hours per day for 5 days a week?
    </Label>
    <Controller
    name='availability'
    control={control}
    defaultValue={true}
    render={({ field: { value, onChange } }) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
</div>

          {/* Resume Upload Section */}
          <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="resume">
        </Label>
        <h2 className='text-2xl mb-2 text-[#344054]'>Resume</h2>

        <div 
          className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"
          onClick={() => document.getElementById('resume').click()}
        >
          <Input 
            id="resume" 
            type="file" 
            {...register('resume', { required: "Resume is required" })} 
            className="hidden " 
            onChange={handleFileChange}
          />
          <div className="text-gray-500 flex flex-col items-center">
                 <Image
            src={FileIcon}
            alt='File Icon'
            />
            <p>Upload or drag and drop</p>
            <p className="text-sm text-gray-400">max. 2MB</p>
           
            {resumeFile && <p className="text-sm text-green-500 mt-2">{resumeFile.name}</p>}
          </div>
        </div>
        {errors.resume && <p className='text-red-500'>{errors.resume.message}</p>}
      </div>
      

      </div>
    
     
    </>
  );
}
