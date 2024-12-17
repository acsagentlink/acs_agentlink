import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from '../../components/auth/Schema';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(); 
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(FormDataSchema),
    mode: 'onBlur'
  });

  const { handleSubmit, watch, setValue, register, formState: { errors }, control, trigger } = methods;

  const processForm = async (data) => {
    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, formData);

          // Store the token in a secure, HTTP-only cookie
    setCookie('token', response.data.token, { path: '/' });
      window.location.href = "/dashboard";
    

      // router.push('/dashboard');
    } catch (error) {
      setLoading(false);
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setErrorMessage(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className='flex flex-col justify-between text-[#101828] sm:w-none lg:w-full'>

        {/* Single screen form */}
        <form className='py-8' onSubmit={handleSubmit(processForm)}>
          <div className="space-y-5">
            <div className='space-y-2'>
              <Label className="text-[#344054]" htmlFor="email">Email address</Label>
              <Input type='email' id="email" {...register('email')} placeholder="Enter your email address" className="h-12 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak"/>
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div className='space-y-2 relative'>
              <Label className="text-[#344054]" htmlFor="password">Password</Label>
              <div className='relative'>
                    <Input
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                {...register('password')} 
                placeholder="Enter your password" 
                className="h-12 focus:outline-none focus:ring-2 focus:ring-grayscale-header_weak" />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              <span onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"

                >
{showPassword ? <EyeOffIcon className='text-grayscale-placeholder'/> : <EyeIcon className='text-grayscale-placeholder'/>}
              </span>
              </div>
          
            </div>


            <div className='flex justify-between'>
 <div className="flex items-center space-x-2">
              <Input 
                type="checkbox" 
                id="rememberMe" 
                {...register('rememberMe')}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
              />
              <Label htmlFor="rememberMe" className="text-sm text-[#344054]">
                Remember Me
              </Label>
            </div>
            <Link href='/forget-password' className='text-primary'>Forget password</Link>

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
              {loading ? (<div className='spinner'></div>) : "Login" }  
            </Button>
          </div>

          <div className='flex mt-5 justify-center gap-1'>
            <p>Don&apos;t have an account?</p>
            <Link href='/become-an-agent' className='text-primary'>Become an agent</Link>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
