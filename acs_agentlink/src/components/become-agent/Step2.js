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
import MoonIcon from '../../../public/moon.svg';
import SunIcon from '../../../public/sun.svg';
import SunFogIcon from '../../../public/sun-fog.svg';

export default function Step2() {
  const { register, setValue, watch, control, formState: { errors } } = useFormContext();

  const [selectedTime, setSelectedTime] = useState(watch('preferredTime', '3pm - 11pm')); // Default to '3pm - 11pm'

   const handleTimeSelection = (time) => {
    event.preventDefault();
    setSelectedTime(time);
     setValue('preferredTime', time); // Set form value without state
   };

    // Watch for the file input
  const resumeFile = watch('resume');

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue('resume', file); // Register the file with react-hook-form
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
<div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} placeholder="Enter your name" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </div>
      <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="country">Country</Label>
        <Input id="country" {...register('country')} className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.country && <p className='text-red-500'>{errors.country.message}</p>}
      </div>
      <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="phoneNo">Phone number</Label>
        <Input id="phoneNo" {...register('phoneNo')} className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.phoneNo && <p className='text-red-500'>{errors.phoneNo.message}</p>}

      </div>
      <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="telegramUsername">Telegram username</Label>
        <Input id="telegramUsername" {...register('telegramUsername')} placeholder="@username" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.telegramUsername && <p className='text-red-500'>{errors.telegramUsername.message}</p>}
      </div>
      <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} placeholder="Enter your email address" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </div>
     
      
      <div className='space-y-2'>
        <Label className="text-[#344054]" htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register('password')} className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
      </div>

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
  <p className='flex-1 pr-2'>
      Please specify your preferred start time for work?
    </p>

  <div className='flex space-x-4 mt-2'>
            <Button 
              className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === '8am - 3pm' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
              onClick={() => handleTimeSelection('8am - 3pm')}
            >
                  <Image src={MoonIcon} alt='8am - 3pm Icon' className='w-5 h-5 mr-2' />

              8am - 3pm
            </Button>
            <Button 
              className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === '3pm - 11pm' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
              onClick={() => handleTimeSelection('3pm - 11pm')}
            >
                                <Image src={SunIcon} alt='3pm - 11pm Icon' className='w-5 h-5 mr-2' />

              3pm - 11pm
            </Button>
            <Button 
              className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === 'Both' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
              onClick={() => handleTimeSelection('Both')}
            >
                                <Image src={SunFogIcon} alt='Both Icon' className='w-5 h-5 mr-2' />

              Both
            </Button>
          </div>

          {/* Register the preferredTime field */}
          <Input 
            type="hidden" 
            {...register('preferredTime')} // Register the hidden input
          />

          {/* preferredTime Error Message */}
          {errors.preferredTime && <p className='text-red-500'>{errors.preferredTime.message}</p>}
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
            onChange={handleFileChange}  // Handle the change event
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
