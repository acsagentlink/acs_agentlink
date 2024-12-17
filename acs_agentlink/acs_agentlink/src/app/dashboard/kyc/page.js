"use client"

import React, { useState } from 'react'
import { Check, Upload, Camera, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Layout from '@/components/dashboard/Layout'
import SuccessIcon from '../../../../public/success_check.svg'
import Image from 'next/image'

export default function KYCVerification() {
  const [currentStep, setCurrentStep] = useState('identity')
  const [completed, setCompleted] = useState(false)

  const handleNext = () => {
    if (currentStep === 'identity') {
      setCurrentStep('selfie')
    } else if (currentStep === 'selfie') {
      setCurrentStep('pending')
      setCompleted(true)
    }
  }

  return (
    <Layout>

      <div className="max-w-2xl text-[#101828]">
      <h1 className="text-2xl font-medium mb-6">KYC Verification</h1>

      <div className="p-6">
        <div className="flex space-x-8">
          <StepIndicator currentStep={currentStep} completed={completed} />
          <div className="flex-1">
            {currentStep === 'identity' && <IdentityDocumentForm onNext={handleNext} />}
            {currentStep === 'selfie' && <SelfieUpload onNext={handleNext} />}
            {currentStep === 'pending' && <PendingApproval />}
          </div>
        </div>
      </div>
    </div>  
    </Layout>
    
  )
}

const StepIndicator = ({ currentStep, completed }) => {
    const steps = [
      { key: 'identity', label: 'Identity document', icon: <Check className="h-4 w-4" /> },
      { key: 'selfie', label: 'Selfie', icon: <Camera className="h-4 w-4" /> },
      { key: 'pending', label: 'Pending approval', icon: <Clock className="h-4 w-4" /> },
    ]
  
    return (
      <div className="flex flex-col space-y-6">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center space-x-2">
            <div className={`rounded-full p-2 ${
              completed || currentStep === step.key ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              {step.icon}
            </div>
            <span className={completed || currentStep === step.key ? 'text-success' : 'text-gray-500'}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    )
  }
  
  const IdentityDocumentForm = ({ onNext }) => {
    const [country, setCountry] = useState('')
    const [idType, setIdType] = useState('')
  
    return (
      <div className="space-y-4">
        <Select onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-grayscale-background text-[#101828]">
            <SelectItem value="nigeria">Nigeria</SelectItem>
            <SelectItem value="united-states">United States</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setIdType}>
          <SelectTrigger>
            <SelectValue placeholder="Select ID type" />
          </SelectTrigger>
          <SelectContent className="bg-grayscale-background text-[#101828]">
            {country === 'nigeria' && <SelectItem value="nin">NIN</SelectItem>}
            {country === 'united-states' && <SelectItem value="ssn">SSN</SelectItem>}
          </SelectContent>
        </Select>
        <Input placeholder="ID number" />
        <div className="space-y-2">
          <div className="border-2 border-dashed rounded-md p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p>Upload or drag and drop ID Photo (Front)</p>
            <p className="text-xs text-gray-500">max. 2mb</p>
          </div>
          <div className="border-2 border-dashed rounded-md p-4 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p>Upload or drag and drop ID Photo (Back)</p>
            <p className="text-xs text-gray-500">max. 2mb</p>
          </div>
        </div>
        <Button onClick={onNext} className="w-full">Save and continue</Button>
      </div>
    )
  }
  
  const SelfieUpload = ({ onNext }) => {
    return (
      <div className="space-y-4">
        <div className="border-2 border-dashed rounded-md p-4 text-center">
          <Upload className="mx-auto h-8 w-8 text-gray-400" />
          <p>Upload or drag and drop Selfie</p>
          <p className="text-xs text-gray-500">max. 2mb</p>
        </div>
        <Button onClick={onNext} className="w-full">Save and continue</Button>
      </div>
    )
  }
  
  const PendingApproval = () => {
    return (
      <div className='bg-grayscale-background rounded'>
        <div className="text-center space-y-4">
          <Image src={SuccessIcon} alt='Success Icon Image' className="w-50 h-50" />
        <h2 className="text-xl font-semibold text-grayscale-header_weak">Pending Approval</h2>
        <p className="text-gray-500">You will be verified when your details are approved</p>
      </div>
      </div>
      
    )
  }