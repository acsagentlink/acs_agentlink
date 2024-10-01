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

const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
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

  const profileForm = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: 'James',
      lastName: 'Steve',
      email: 'jameyst@acs.com',
      whatsapp: '+234 9130733098',
    },
  })

  const securityForm = useForm({
    resolver: zodResolver(securitySchema),
  })

  const onProfileSubmit = (data) => {
    console.log(data)
    // Handle profile update
  }

  const onSecuritySubmit = (data) => {
    console.log(data)
    // Handle password change
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medium text-grayscale-header">Settings</h1>
        <Button type="submit" form={activeTab === 'Profile' ? 'profile-form' : 'security-form'} className="bg-primary text-white rounded-full">
          Save changes
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
                src={UserAvatar}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <button type="button" className="text-primary text-sm font-medium">
                Change profile picture
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 text-[#344054]">
              {[
                { label: 'Full name', name: 'fullName' },
                { label: 'Last name', name: 'lastName' },
                { label: 'Email address', name: 'email' },
                { label: 'Whatsapp number', name: 'whatsapp' },
              ].map((field) => (
                <div key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    {...profileForm.register(field.name)}
                    className="mt-1 text-grayscale-header"
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
                {field.name === 'oldPassword' && (
                  <a href="#" className="text-sm text-[#2B2E32] hover:text-primary mt-1 inline-block">
                    Forgot password?
                  </a>
                )}
              </div>
            ))}
          </div>
        </form>
      )}
    </Layout>
  )
}