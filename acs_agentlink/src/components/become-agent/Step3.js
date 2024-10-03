import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

export default function Step3() {
  const { register, setValue, watch, control, formState: { errors } } = useFormContext();

  watch('fullTime', true)

   watch('constructMessage', true)
 watch('promptResponse', true)

  // Watch the value of the trading knowledge switch
  const tradingKnowledge = watch('tradingKnowledge');
  const hasTradingKnowledge = watch('hasTradingKnowledge', true); // Default to true
  
  // Effect to handle tradingKnowledge value based on switch state
  useEffect(() => {
    if (!hasTradingKnowledge) {
      setValue('tradingKnowledge', 'None');
    } else if (tradingKnowledge === 'None') {
      setValue('tradingKnowledge', '')
    }
  }, [hasTradingKnowledge, tradingKnowledge, setValue]);

  return (
    <>
    <div className='space-y-5'>
 <div className='space-y-2'>
    <h2 className='text-2xl mb-2 text-[#344054]'>Employment Type</h2>
  <div className='flex justify-between items-center'>
    <Label className='flex-1 pr-2 text-base font-normal' htmlFor="fullTime">
    Are you open to a full-time position? Additionally, note that if employed, you&apos;ll be signing an employment contract.
    </Label>
    <Controller
    name='fullTime'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  </div>

   <div className='space-y-2'>
      <h2 className='text-2xl mb-2 text-[#344054]'>Communication Skills</h2>

  <div className='flex justify-between items-center pb-2'>
    <Label className='flex-1 pr-2 text-base font-normal'  htmlFor="constructMessage">
    Do you possess strong punctuation and message construction skills?
    </Label>
    <Controller
    name='constructMessage'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  <div className='flex justify-between items-center'>
    <Label className='flex-1 pr-2 text-base font-normal' htmlFor="promptResponse">
    Can you provide clear and prompt responses to complex messages?
    </Label>
    <Controller
    name='promptResponse'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  </div>

   <div className='space-y-2'>
  <h2 className='text-2xl mb-2 text-[#344054]'>Trading Knowledge</h2>
  <div className='flex justify-between items-center'>
    <Label className='flex-1 pr-2 text-base font-normal' htmlFor="tradingKnowledge">
    Do you have any knowledge of trading? If yes, please provide details. Any prior experience in trading would be advantageous
    </Label>
    <Controller
    name='hasTradingKnowledge'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  {hasTradingKnowledge && (
      <Input className="h-28 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" id="tradingKnowledge" {...register('tradingKnowledge')} placeholder="Tell us about your experience" />

  )}
  {errors.tradingKnowledge && <p className='text-red-500'>{errors.tradingKnowledge.message}</p>}

</div>

    </div>

    
    </>
  );
}
