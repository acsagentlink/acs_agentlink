import { Controller } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';
import { Switch } from '../ui/switch';

export default function Step4() {
  const { control, watch, formState: { errors } } = useFormContext();

  watch("has_pc", true);
  watch("consistent_pc", true);
  watch("internetAccess", true);

  return (
    <>
        <div className='space-y-5'>
 <div className='space-y-2'>
<h2 className='text-2xl mb-2 text-[#344054]'>Salary Discussion</h2>
  <div className='flex justify-between items-center'>
    <p className='flex-1 pr-2'>
    📝 The details regarding compensation will be discussed upon successful completion of the 1-week test
    </p>
  </div>
  </div>

   <div className='space-y-2'>
       <h2 className='text-2xl mb-2 text-[#344054]'>Technical Setup</h2>
  <div className='flex justify-between items-center pb-2'>
    <p className='flex-1 pr-2'>
    Do you have a personal computer (PC) available for work?
    </p>
    <Controller
    name='has_pc'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  <div className='flex justify-between items-center pb-2'>
    <p className='flex-1 pr-2'>
    Can your PC be consistently on for 9 hours a day, 5 days a week without interruption?
    </p>
    <Controller
    name='consistent_pc'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  <div className='flex justify-between items-center'>
    <p className='flex-1 pr-2'>
    Is your internet connection stable enough to support continuous work without interruptions?
    </p>
    <Controller
    name='internetAccess'
    control={control}
    defaultValue={true}
    render={({ field: {value, onChange}} ) => (
          <Switch checked={value} onCheckedChange={onChange} />

    )}
    />
  </div>
  </div>

    </div>
    </>
  );
}
