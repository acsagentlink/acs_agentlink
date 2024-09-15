'use client'

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from './FormSchema';
import axios from 'axios';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function BecomeAgentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState(); 

  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(FormDataSchema),
    mode: 'onBlur'
  });

  const { handleSubmit, trigger } = methods;
  

  const processForm = async (data) => {
    const formData = new FormData();

    console.log(data.resume)

    // Append form fields to FormData
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);
    formData.append('password', data.password);
    formData.append('country', data.country);
    formData.append('telegram', data.telegram);
    formData.append('resume', data.resume);
    formData.append('work_experience', data.workExperience);
    formData.append('availability', data.availability ? 'yes' : 'no');
    formData.append('preferred_time', data.preferredTime);
    formData.append('full_time', data.fullTime ? 'yes' : 'no');
    formData.append('construct_message', data.constructMessage ? 'yes' : 'no');
    formData.append('prompt_response', data.promptResponse ? 'yes' : 'no');
    formData.append('trading_knowledge', data.tradingKnowledge);
    formData.append('has_pc', data.has_pc ? 'yes' : 'no');
    formData.append('pc_consistent', data.consistent_pc ? 'yes' : 'no');
    formData.append('internet', data.internetAccess ? 'yes' : 'no');
    formData.append('type', data.type);

     // Log form data entries
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

    try {
      await axios.post('/api/submit', formData);
      router.push('/become-an-agent/success');
    } catch (error) {
      console.log('Error details:', error);  
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setErrorMessage(apiError);    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (output) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit(processForm)();
      }
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className='flex flex-col justify-between text-[#101828] sm:w-none lg:w-[750px]'>
        
        {/* Steps Indicator */}
        <nav aria-label='Progress' className='w-[200px]'>
          <div className='flex items-center gap-4'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex-1'>
                <div className='relative'>
                  {/* Step Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 left-full transform -translate-y-1/2 w-full border-t-2 ${
                        currentStep > index ? 'border-grayscale-header_weak' : 'border-gray-200'
                      }`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {/* Step Line */}
                  <div
                    className={`w-full h-1 rounded-full ${currentStep >= index ? 'bg-grayscale-header_weak' : 'bg-gray-200'}`}
                    style={{ height: '4px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Form */}
        <form className='py-12'>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: '50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Step1 />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: '50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Step2 />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ x: '50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Step3 />
            </motion.div>
          )}

{currentStep === 3 && (
            <motion.div
              initial={{ x: '50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Step4 />
            </motion.div>
          )}
        </form>

{/* Display error message below the form if there is any */}
{errorMessage && (
          <div className='text-red-500 mt-2'>
            {errorMessage}
          </div>
)}
        {/* Navigation */}
        <div className='pt-5'>
          <div className='flex justify-between gap-5'>
            {currentStep > 0 && <button onClick={prev} className='w-full btn-secondary rounded-full border border-grayscale-line'>Back</button>}
            <Button onClick={next} className='w-full btn-primary rounded-full p-8 text-md text-grayscale-white'>
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </section>
    </FormProvider>
  );
}

const steps = [
  { id: '1', fields: ['type'] },
  { id: '2', fields: ['name', 'email', 'phone_number', 'telegram', 'country', 'password', 'workExperience', 'availability', 'preferredTime', 'resume'] },
  { id: '3', fields: ['fullTime', 'constructMessage', 'promptResponse', 'tradingKnowledge'] },
  { id: '4', fields: ['has_pc', 'consistentPc', 'internetAccess'] }
];