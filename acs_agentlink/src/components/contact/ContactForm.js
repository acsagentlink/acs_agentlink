import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from './Schema';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(FormDataSchema),
    mode: 'onBlur'
  });

  const { handleSubmit, watch, setValue, register, formState: { errors }, control, trigger } = methods;

  const processForm = async (data) => {
    console.log(data)
    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('email', data.email);
    formData.append('name', data.name);
    formData.append('hear', data.hear_about_us);
    formData.append('reason', data.reason);
    formData.append('message', data.message);

    try {
      await axios.post('/api/contact', formData);
      router.push('/dashboard');
    } catch (error) {
      setLoading(false);
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

                     {/* Name */}
          <div className='space-y-2'>
            <Label className="text-[#344054]" htmlFor="name">Name</Label>
              <Input type='name' id="name" {...register('name')} placeholder="Enter your name" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

                     {/* Email */}
            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="email">Email address</Label>
              <Input type='email' id="email" {...register('email')} placeholder="Enter your email address" className="focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

                     {/* Reason for Contact */}
                     <div className='space-y-2'>
              <Label className="text-[#344054]">Reason for Contact</Label>
              <div className="space-y-4">
                {["General Inquiry", "Requesting Information about Services", "Becoming an Agent", "Partnership Opportunities", "Other"].map((reason, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <Input 
                      type="radio" 
                      {...register('reason')} 
                      value={reason} 
                      className="w-5 h-5 accent-primary"
                    />
                    <span className="text-base text-grayscale-header">{reason}</span>
                  </label>
                ))}
              </div>
              {errors.reason && <p className='text-red-500'>{errors.reason.message}</p>}
            </div>

                     {/* Message */}
            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="message">Message</Label>
              <Input type='message' id="message" {...register('message')} placeholder="Write your message..." className="h-28 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

                             {/* How did you hear about us */}
                             <div className='space-y-2'>
              <Label className="text-[#344054]">How did you hear about us?</Label>
              <div className="space-y-4">
                {["Search Engine (Google, Bing, etc.", "Social Media", "Referral", "Advertisement", "Other"].map((hear_about_us, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <Input 
                      type="radio" 
                      {...register('hear_about_us')} 
                      value={hear_about_us} 
                      className="w-5 h-5 accent-primary"
                    />
                    <span className="text-base text-grayscale-header">{hear_about_us}</span>
                  </label>
                ))}
              </div>
              {errors.reason && <p className='text-red-500'>{errors.reason.message}</p>}
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
              {loading ? (<div className='spinner'></div>) : "Submit" }  
            </Button>
          </div>

        </form>
      </section>
    </FormProvider>
  );
}
