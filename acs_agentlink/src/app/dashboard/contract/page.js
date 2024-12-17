"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Layout from '@/components/dashboard/Layout'
import Image from 'next/image'
import Signature from '../../../../public/signature.svg'
import axios from "axios";
import { useUser } from '@/context/UserContext'


export default function ContractPage() {
  // State to track if the contract is signed
  const [isSigned, setIsSigned] = useState(false);
  const user = useUser();
  const [signDate] = useState(new Date().toISOString());
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSign = async () => {

    setLoading(true);
    setErrorMessage(null)
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('name', user.name);

    try {
      const response = await axios.post(`/api/contracts/sign`, formData);

  setIsSigned(true)
  window.location.reload()
    } catch (error) {
      setLoading(false);
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setErrorMessage(apiError);
    } finally {
      setLoading(false);
    }
  };


  const fetchRequests = async () => {
    try {
      const response = await axios.get("/api/jobs/requests");
      setJobRequests(response.data.jobs);
    } catch (err) {
      setError("Failed to fetch dashboard data");
    }
  };

  useEffect(() => {
    console.log(user);
    if(user && user.contract_signature){
      setIsSigned(true)
    }
    const fetchContract = async () => {
      try {
        const response = await axios.get("/api/contracts/pdf", {
          responseType: "blob",
          headers: {
            Accept: 'application/pdf', // Explicitly request a PDF
          }, // Ensure response is treated as a file
        });
        const file = new Blob([response.data]);
        var URL = window.URL || window.webkitURL;
        setPdf(URL.createObjectURL(file)); // Convert file into object URL
        const file2 = window.URL.createObjectURL( new Blob([response.data], { type: "application/pdf" }));
      //  console.log(file2);
      setPdf(file2)
        const iframe = document.querySelector("iframe");
              if (iframe?.src) iframe.src = file2;
      } catch (err) {
        setError("Failed to fetch contract");
        console.error("Error fetching PDF:", err);
      }
    }

   

    fetchContract();
  }, []);
  if (!pdf)
    return (
      <div className="w-full h-screen items-center justify-center bg-white">
        <div className="flex flex-auto h-full flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
          <div className="custom-loader"></div>
          </div>
        </div>


      </div>
    );

  const zoomIn = () => {/* Implement zoom in functionality */}
  const zoomOut = () => {/* Implement zoom out functionality */}

  return (
    <Layout>
      <h1 className="text-2xl text-[#101828] font-medium mb-4">Contract</h1>

      <div className="container text-[#101828] bg-grayscale-background">
        <div className="border rounded-lg overflow-hidden shadow-lg rounded-b-2xl">
          <div className="hidden bg-[#323639] text-white p-2 flex justify-between items-center">
            <span>A.C.S Contract</span>
            <div className="flex items-center space-x-2">
              <button onClick={zoomOut} className="p-1">-</button>
              <span>100%</span>
              <button onClick={zoomIn} className="p-1">+</button>
              <button className="p-1">⟳</button>
              <button className="p-1">↓</button>
              <button className="p-1">⎙</button>
            </div>
          </div>
          
          {/* Contract Content Area */}
          <div className="bg-white p-4 max-w-2xl mx-auto hidden">
            <div className="p-8 min-h-[800px]">
              <h2 className="text-xl font-semibold mb-4">Title</h2>
              <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              </p>
            </div>
          </div>
          <div className="h-[500px] border">
          {pdf ? (
            <iframe
              src={""}
              className="w-full h-[500px]"
              frameBorder="0"
              title="Contract PDF"
            />
          ) : (
            <p>Loading PDF...</p>
          )}
          
        </div>
          <div className='border rounded-2xl'>
            {/* Signature Section */}
            <div className="p-4 flex justify-between items-center">
              <div className='space-y-3'>
                <div className='p-3 rounded-2xl bg-gray-100'>
                  <p className='text-sm'>{user.name}</p>
                </div>
                <p className="text-xs text-gray-600">Signature of support agent</p>
              </div>
              <div className="text-right space-y-3">
                <Image src={Signature} alt="Signature" className="inline-block w-24 h-12" />
                <p className='text-xs'>Signature of A.C.S AgentLink</p>
              </div>
            </div>

            {/* Conditional rendering for signed state */}
            {user && user.contract_signature !== null ? (
              <div className="p-5 gap-1 text-center">
                <div className='flex justify-center space-x-2'>
                                    <span className="p-2 text-sm rounded-full text-primary bg-opacity-10 bg-primary">✔️ Signed</span>
                                    <p className="text-xs text-grayscale-label mt-2 mb-2">
                  By signing, I accept the terms of the A.C.S AgentLink contract
                </p>
                </div>
                <div className="text-xs text-grayscale-label mt-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p>Name: {user.name}</p>
                      <p>Date signed: {new Date(user.signed_date).toLocaleString()}</p>
                    </div>
                    <div>
                      <p>Name: A.C.S AgentLink</p>
                      <p>Date signed: {new Date(user.signed_date).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 gap-1 flex flex-col items-center">
                  {errorMessage && (
            <div className='text-red-500 my-2'>
              {errorMessage}
            </div>
          )}
                <Button onClick={handleSign} className="bg-primary text-white rounded-full">
                {loading ? (<div className='spinner'></div>) : "Sign contract" }
                </Button>
                <p className="text-xs text-grayscale-label mt-2 mb-2">
                  By signing, I accept the terms of the A.C.S AgentLink contract
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
