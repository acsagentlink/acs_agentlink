import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from './FormSchema';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MoonIcon from '../../../public/moon.svg';
import SunIcon from '../../../public/sun.svg';
import SunFogIcon from '../../../public/sun-fog.svg';
import { useRouter } from 'next/navigation';

export default function HireAgentForm() {
  const [errorMessage, setErrorMessage] = useState(); 
  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(FormDataSchema),
    mode: 'onBlur'
  });

  const { handleSubmit, watch, setValue, register, formState: { errors }, control, trigger } = methods;
  const [selectedTime, setSelectedTime] = useState(watch('workingHours', '3pm - 11pm')); // Default to '3pm - 11pm'

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setValue('workingHours', time);
  };

  const processForm = async (data) => {
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('no_of_agents', data.no_of_agents);
    formData.append('workingHours', data.preferredTime);

    try {
      await axios.post('/api/submit', formData);
      router.push('/hire-an-agent/success');
    } catch (error) {
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setErrorMessage(apiError);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className='flex flex-col justify-between text-[#101828] sm:w-none lg:w-full'>

        {/* Single screen form */}
        <form className='py-8' onSubmit={handleSubmit(processForm)}>
          <div className="space-y-5">
            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="companyName">Company name</Label>
              <Input id="companyName" {...register('companyName')} placeholder="Enter your company name" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
              {errors.companyName && <p className='text-red-500'>{errors.companyName.message}</p>}
            </div>

            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="companyEmail">Company email</Label>
              <Input id="companyEmail" {...register('companyEmail')} placeholder="Enter your company email" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" />
              {errors.companyEmail && <p className='text-red-500'>{errors.companyEmail.message}</p>}
            </div>

            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="number_of_agents">Number of agents</Label>
              <Input id="number_of_agents" {...register('number_of_agents')} placeholder="How many agents do you need?" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" />
              <p className="text-primary-background_strong text-sm mb-4">476 agents available</p>
              {errors.number_of_agents && <p className='text-red-500'>{errors.number_of_agents.message}</p>}
            </div>


            <div className='space-y-4 mt-2'>
            <Label className="text-[#344054]" htmlFor="workingHours">Desired working hours</Label>
<div className='flex space-x-4'>
  <Button 
              type='button'
                className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === '8am - 3pm' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
                onClick={() => handleTimeSelection('8am - 3pm')}
              >
                <Image src={MoonIcon} alt='8am - 3pm Icon' className='w-5 h-5 mr-2' />
                8am - 3pm
              </Button>
              <Button 
              type='button'
                className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === '3pm - 11pm' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
                onClick={() => handleTimeSelection('3pm - 11pm')}
              >
                <Image src={SunIcon} alt='3pm - 11pm Icon' className='w-5 h-5 mr-2' />
                3pm - 11pm
              </Button>
              <Button 
              type='button'
                className={`px-4 py-2 rounded-full hover:bg-grayscale-header_weak hover:text-white ${selectedTime === 'Both' ? 'bg-grayscale-header_weak text-white' : 'bg-grayscale-background_weak'}`}
                onClick={() => handleTimeSelection('Both')}
              >
                <Image src={SunFogIcon} alt='Both Icon' className='w-5 h-5 mr-2' />
                Both
              </Button>
</div>
              
            </div>
</div>

          {/* Display error message below the form if there is any */}
          {errorMessage && (
            <div className='text-red-500 mt-2'>
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className='pt-10'>
            <Button type="submit" className='w-full btn-primary rounded-full p-8 text-md text-grayscale-white'>
              Send request
            </Button>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
