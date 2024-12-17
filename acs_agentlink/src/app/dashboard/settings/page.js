"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Layout from '@/components/dashboard/Layout'
import UserAvatar from '../../../../public/Avatar.svg'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { useEffect } from 'react'


const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  // lastName: z.string().min(2, "Last name must be at least 2 characters"),
  image: null,
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().regex(/^\+?[0-9]{10,14}$/, "Invalid WhatsApp number"),
})

const securitySchema = z.object({
  oldPassword: z.string().min(8, "Password must be at least 8 characters"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null)
  const [error2, setError2] = useState(null)
  const [previewImage, setPreviewImage] = useState(null); // Preview state for the selected image
  const user = useUser();

  const profileForm = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: user? user.name : "",
      image: user? user.image : "",
      email: user? user.email : "",
      whatsapp: user? user.phone : "",
    },
  })


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      profileForm.setValue("image", event.target.files);
    }
  };


  const securityForm = useForm({
    resolver: zodResolver(securitySchema),
  })

  const onProfileSubmit = async (data) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("whatsapp", data.whatsapp);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await axios.post(`/api/settings/update-profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      const apiError =
        error.response?.data?.error || error.response?.data?.message || "An unexpected error occurred.";
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };


  const onSecuritySubmit = (data) => {
    console.log(data)
    // Handle password change
    submit_data(data)
  }

  const openFile = () => {
    document.getElementById("profile_image").click()
  }
  const submit_data = async (data) => {

    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('old_password', data.oldPassword);
    formData.append('new_password', data.newPassword);
    formData.append('new_password_confirmation', data.confirmPassword);


    try {
      const response = await axios.post(`/api/settings/update-password`, formData);

  setLoading(false)
  // setCryptoDetails(data);
  // window.location.reload()
  window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };


    const [showModal, setShowModal] = useState(false); // Controls modal visibility
    const [reason, setReason] = useState(""); // State to store textarea input

    // Open modal
    const openModal = () => setShowModal(true);

    // Close modal
    const closeModal = () => {
        setShowModal(false);
        setReason(""); // Reset input field on close
    };

    // Submit form
    const deleteSubmit = async (e) => {
        e.preventDefault();
        setLoading2(true);
        setError2(null);
        try {
            const response = await fetch("/api/delete-account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ reason }),
            });

            if (response.ok) {
              
                closeModal(); // Close modal after successful submission
            } else {
                setError2("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError2("An error occurred while processing your request.");
            setLoading2(false);
        }
    };
  const [isLoadingUser, setIsLoadingUser] = useState(true) // Track if user data is loaded

  // Wait for `user` context to load
  useEffect(() => {
    if (user) {
      setIsLoadingUser(false)
    }
  }, [user])

  if(isLoadingUser === true)
    return (
      <div className="w-full h-screen items-center justify-center bg-white">
        <div className="flex flex-auto h-full flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
          <div className="custom-loader"></div>
          </div>
        </div>


      </div>
    );

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medium text-grayscale-header">Settings</h1>
        <Button type="submit" disabled={loading} form={activeTab === 'Profile' ? 'profile-form' : 'security-form'} className="bg-primary text-white rounded-full">
        {loading ? (<div className='spinner'></div>) : "Save Changes" }
        </Button>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['Profile', 'Security'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {activeTab === 'Profile' && (
        <form id="profile-form" onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="flex gap-8">
          <div className="w-1/3">
            <h2 className="text-[#344054] text-sm font-medium">Personal info</h2>
            <p className="text-sm text-grayscale-placeholder mt-1">Update your photo and personal details.</p>
          </div>
          <div className="w-1/3 space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src={previewImage || `${process.env.NEXT_PUBLIC_IMAGE_URL}/storage${user.image}`}
                width={20}
                height={20}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <input type="file" className='hidden' id="profile_image" accept="image/*"
                onChange={handleImageChange} />
              <button type="button" onClick={() => openFile()} className="text-primary text-sm font-medium">
                Change profile picture
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 text-[#344054]">
              {[
                { label: 'Full name', name: 'fullName' },
                { label: 'Email address', name: 'email' },
                { label: 'Whatsapp number', name: 'whatsapp' },
              ].map((field) => (
                <div key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    {...profileForm.register(field.name)}
                    className="mt-1 text-grayscale-header"
                    readonly={field.name == 'email'? true : false}
                  />
                  {profileForm.formState.errors[field.name] && (
                    <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors[field.name].message}</p>
                  )}
                </div>
              ))}

              <div>
                <Label htmlFor="country">Country</Label>
                <div className="mt-1 flex items-center space-x-2 border rounded-md p-2">
                  <span className="text-xl">🇳🇬</span>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {activeTab === 'Security' && (
        <>
        <form id="security-form" onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="flex gap-8">
          <div className="w-1/3">
            <h2 className="text-sm text-[#344054] font-medium">Change password</h2>
            <p className="text-sm text-grayscale-placeholder mt-1">Update your password</p>
          </div>
          <div className="w-1/3 space-y-6 text-[#344054]">
            {[
              { label: 'Old password', name: 'oldPassword' },
              { label: 'New password', name: 'newPassword' },
              { label: 'Confirm new password', name: 'confirmPassword' },
            ].map((field) => (
              <div key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <div className="relative mt-1">
                  <Input
                    id={field.name}
                    {...securityForm.register(field.name)}
                    type={
                      field.name === 'oldPassword' ? (showOldPassword ? "text" : "password") :
                      field.name === 'newPassword' ? (showNewPassword ? "text" : "password") :
                      (showConfirmPassword ? "text" : "password")
                    }
                    className="pr-10 text-grayscale-header"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => {
                      if (field.name === 'oldPassword') setShowOldPassword(!showOldPassword)
                      else if (field.name === 'newPassword') setShowNewPassword(!showNewPassword)
                      else setShowConfirmPassword(!showConfirmPassword)
                    }}
                  >
                    {(field.name === 'oldPassword' && showOldPassword) ||
                     (field.name === 'newPassword' && showNewPassword) ||
                     (field.name === 'confirmPassword' && showConfirmPassword) ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {securityForm.formState.errors[field.name] && (
                  <p className="mt-1 text-sm text-red-600">{securityForm.formState.errors[field.name].message}</p>
                )}
                  {error && (
                    <div className='text-red-500 mt-2'>
                      {error}
                    </div>
                  )}
                {field.name === 'oldPassword' && (
                  <Link href="/forget-password" className="text-sm text-[#2B2E32] hover:text-primary mt-1 inline-block">
                    Forgot password?
                  </Link>
                )}
              </div>
            ))}
          </div>
        </form>
        <div id="delete-action" className="flex gap-8 mt-20">
          <div className="w-1/3">
            <h2 className="text-sm text-[#344054] font-medium">Delete Account</h2>
            <p className="text-sm text-grayscale-placeholder mt-1">This action is permanent, and all your data will be lost</p>
          </div>
          <div className="w-1/3 space-y-6 text-[#344054]">
          <button
            onClick={openModal}
            className="relative w-full flex items-center justify-center text-grayscale-white bg-[#FB4E4E] rounded-full hover:rounded-full hover:text-grayscale-background py-5 px-8 ring-[rgba(251,78,78,0.1)]  ring-8"
          >
            Delete Your account
          </button>
          </div>
        </div>


        {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-0 w-96 relative">
                    <div className="bg-gray-100 w-full flex items-center justify-between py-5 px-4 rounded-t-3xl">
                      <h4 className="text-black text-left text-lg font-semibold">Delete Your Account</h4>
                    
                      <button type="button" onClick={closeModal} className="outline-none h-6 w-6 rounded-full ml-auto hover:border-primary-500 flex items-center justify-center">
                        <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width={24} height={24} rx={12} fill="white" stroke="#8E8E8E" />
                            <path d="M16.25 8.75L8.75 16.25" stroke="#8E8E8E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.75 8.75L16.25 16.25" stroke="#8E8E8E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                  </div>

                     <div className='p-4'>
                        <p className="text-sm mb-4 text-gray-600">
                            Why do you want to delete your account?
                        </p>

                        {/* Form */}
                        <form onSubmit={deleteSubmit}>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Please share your reason..."
                                className="w-full h-32 border rounded p-2 text-sm"
                                required
                            ></textarea>
                            {error2 && (
                              <div className='text-red-500 mt-2'>
                                {error2}
                              </div>
                            )}
                            {/* Submit Button */}
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                >
                                    {loading2 ? (<div className='spinner'></div>) : "Submit" }
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            )}
        </>
      )}
    </Layout>
  )
}