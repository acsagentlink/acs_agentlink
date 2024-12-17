"use client"

import React, { useState, useEffect } from 'react'
import { Check, Upload, Camera, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Layout from '@/components/dashboard/Layout'
import SuccessIcon from '../../../../public/success_check.svg'
import Image from 'next/image'
import FileIcon from "../../../../public/file-icon.svg";
import { Label } from '@/components/ui/label'
import axios from "axios";
import { number } from 'zod'


export default function KYCVerification() {
  const [currentStep, setCurrentStep] = useState('identity')
  const [loading, setLoading] = useState(true)
  const [load, setLoad] = useState(true)
  const [approved, setApproved] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [country, setCountry] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [frontImage, setFrontImage] = useState('')
  const [backImage, setBackImage] = useState('')
  const [selfie, setSelfie] = useState('')
  const [error, setError] = useState(null)
  const [kyc, setKyc] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFrontChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFrontImage(file);
    }
  };

  const handleBackChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackImage(file);
    }
  };

  const handleSelfieChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelfie(file);
    }
  };


  const fetchKyc = async () => {
    try {
      console.log("lll")
      const response = await axios.get("/api/kyc/data");
      console.log(response)
      if(response.data && response.data.kyc){
        if(response.data.kyc.status == 0){
          setCurrentStep("pending")
          setLoading(false)
        }
        if(response.data.kyc.status == 1){
          setCurrentStep("pending")
          setApproved(true)
          setLoading(false)
        }
        setKyc(response.data.kyc);
        setLoading(false)
      }
      setLoading(false)
    } catch (err) {
      setError("Failed to fetch dashboard data");
    }
  };

    useEffect(() => {

      fetchKyc();
    }, []);


  const handleNext = async () => {
    // if (currentStep === 'identity') {
    //   setCurrentStep('selfie')
    // } else if (currentStep === 'selfie') {
    //   setCurrentStep('pending')
    //   setCompleted(true)
    // }
    setLoad(false);
    setErrorMessage(null)
    if (currentStep === 'identity') {

      if(!country){
        setErrorMessage("Please Select Your country")
        
        return
      }
      if(country === 'nigeria'){
        if(!idType){
          setErrorMessage("Please Select Your Identity Type")
          return
        }
        if(!idNumber){
          setErrorMessage("Please Enter Your Identity Number")
          return
        }
        if(!frontImage){
          setErrorMessage("Please Provide A Valid Front image of your Identity Document")
          return
        }
        if(!backImage){
          setErrorMessage("Please Provide A Valid Back image of your Identity Document")
          return
        }
        
      }else {
        if(!idNumber){
          setErrorMessage("Please Enter Your Identity Number")
          return
        }
        if(!frontImage){
          setErrorMessage("Please Provide A Valid Front image of your Identity Document")
          return
        }
        if(!backImage){
          setErrorMessage("Please Provide A Valid Back image of your Identity Document")
          return
        }

      }
      setCurrentStep('selfie')
    } else if (currentStep === 'selfie') {
      if(!selfie){
        setErrorMessage("Please Provide A Selfie Photograph")
        return
      }
        // Prepare FormData
        const data = new FormData()
        data.append('country', country)
        data.append('type', idType)
        data.append('number', idNumber)
        data.append('front_image', frontImage)
        data.append('back_image', backImage)
        data.append('selfie', selfie)

        // Send Axios request
        
      setLoad(true);
      setErrorMessage(null)
      const formData = new FormData();
  
  
      try {
        const response = await axios.post(`/api/kyc/update`, data);
        setLoad(false)
        setErrorMessage(null)
        setCurrentStep("pending")
        } catch (error) {
          setLoad(false);
          const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
          setErrorMessage(apiError);
        } finally {
          setLoad(false);
        }
    }
  }

      if(loading === true)
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

      <div className="max-w-2xl text-[#101828]">
      <h1 className="text-2xl font-medium mb-6">KYC Verification</h1>

      <div className="p-6">
        <div className="flex space-x-8">
         {approved == false && <StepIndicator currentStep={currentStep} completed={completed} /> }
          <div className="flex-1">
          {errorMessage && (
            <div className='text-red-500 mb-2'>
              {errorMessage}
            </div>
          )}
            {currentStep === 'identity' && <IdentityDocumentForm onNext={handleNext} idType={idType} country={country} setCountry={setCountry} setIdType={setIdType} frontImage={frontImage} backImage={backImage} handleFrontChange={handleFrontChange} handleBackChange={handleBackChange} setIdNumber={setIdNumber} />}
            {currentStep === 'selfie' && <SelfieUpload onNext={handleNext} selfie={selfie} handleSelfieChange={handleSelfieChange} load={load} errorMessage={errorMessage} />}
            {currentStep === 'pending' && <PendingApproval approved={approved} />}
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
  
  const IdentityDocumentForm = ({ onNext, country, setCountry, idType, setIdType, frontImage, backImage, handleFrontChange, handleBackChange, setIdNumber, errorMessage }) => {

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
        {country == 'nigeria' && <Select onValueChange={setIdType}>
          <SelectTrigger>
            <SelectValue placeholder="Select ID type" />
          </SelectTrigger>
          <SelectContent className="bg-grayscale-background text-[#101828]">
            {country === 'nigeria' && <SelectItem value="nin">NIN</SelectItem>}
            {country === 'united-states' && <SelectItem value="ssn">SSN</SelectItem>}
          </SelectContent>
        </Select>}
        <Input onChange={(e) => setIdNumber(e.target.value)} placeholder="ID number" />
        <div className="space-y-2">
          <div className="border-2 border-dashed rounded-md p-4 text-center">
          <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="resume"></Label>
          <h2 className="text-lg mb-2 text-[#344054]">ID Image(Front)</h2>

          <div
            className="bg-[#FCFCFC] rounded-lg p-6 text-center cursor-pointer"
            onClick={() => document.getElementById("front").click()}
          >
            <Input
              id="front"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleFrontChange}
              className="hidden "
              
            />
            <div className="text-gray-500 flex flex-col items-center">
              <Image src={FileIcon} alt="File Icon" />
              <p>Upload or drag and drop</p>
              <p className="text-sm text-gray-400">max. 2MB</p>

              {frontImage && (
                <p className="text-sm text-green-500 mt-2">{frontImage.name}</p>
              )}
            </div>
          </div>
          {/* {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )} */}
        </div>
          </div>
          <div className="border-2 border-dashed rounded-md p-4 text-center">
          <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="resume"></Label>
          <h2 className="text-lg mb-2 text-[#344054]">ID Image(Back)</h2>

          <div
            className="bg-[#FCFCFC] rounded-lg p-6 text-center cursor-pointer"
            onClick={() => document.getElementById("back").click()}
          >
            <Input
              id="back"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleBackChange}
              className="hidden "
              
            />
            <div className="text-gray-500 flex flex-col items-center">
              <Image src={FileIcon} alt="File Icon" />
              <p>Upload or drag and drop</p>
              <p className="text-sm text-gray-400">max. 2MB</p>

              {backImage && (
                <p className="text-sm text-green-500 mt-2">{backImage.name}</p>
              )}
            </div>
          </div>
          {/* {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )} */}
        </div>
          </div>
        </div>
        {errorMessage && (
            <div className='text-red-500 my-2'>
              {errorMessage}
            </div>
          )}
        <Button onClick={onNext} className="w-full">Save and continue</Button>
      </div>
    )
  }
  
  const SelfieUpload = ({ onNext, selfie, handleSelfieChange, load, errorMessage }) => {
    return (
      <div className="space-y-4">
        <div className="border-2 border-dashed rounded-md p-4 text-center">
          <div className="space-y-2">
          <Label className="text-[#344054]" htmlFor="resume"></Label>
          <h2 className="text-lg mb-2 text-[#344054]">Selfie</h2>

          <div
            className="bg-[#FCFCFC] rounded-lg p-6 text-center cursor-pointer"
            onClick={() => document.getElementById("selfie").click()}
          >
            <Input
              id="selfie"
              type="file"
              onChange={handleSelfieChange}
              accept="image/png, image/jpg, image/jpeg"
              className="hidden "
              
            />
            <div className="text-gray-500 flex flex-col items-center">
              <Image src={FileIcon} alt="File Icon" />
              <p>Upload or drag and drop</p>
              <p className="text-sm text-gray-400">max. 2MB</p>

              {selfie && (
                <p className="text-sm text-green-500 mt-2">{selfie.name}</p>
              )}
            </div>
          </div>
          {/* {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )} */}
        </div>
        </div>
        {/* {errorMessage && (
            <div className='text-red-500 my-2'>
              {errorMessage}
            </div>
          )} */}
        <Button onClick={onNext} disabled={load} className="w-full">  {load ? (<div className='spinner'></div>) : "Save and continue" } </Button>
      </div>
    )
  }
  
  const PendingApproval = ({approved}) => {
    return (
      <div className='bg--grayscale-background rounded'>
        <div className="text-center space-y-4">
          <Image src={SuccessIcon} alt='Success Icon Image' className="w-50 h-50" />
        <h2 className="text-xl font-semibold text-grayscale-header_weak">{approved? "Kyc Approved" : "Pending Approval"}</h2>
        <p className="text-gray-500">{approved? "Your details have been approved": "You will be verified when your details are approved"}</p>
      </div>
      </div>
      
    )
  }