"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Layout from '@/components/dashboard/Layout'
import Image from 'next/image'
import Signature from '../../../../public/signature.svg'

export default function ContractPage() {
  // State to track if the contract is signed
  const [isSigned, setIsSigned] = useState(false);
  const [signDate] = useState(new Date().toISOString());

  const handleSign = () => {
    setIsSigned(true);
  };

  const zoomIn = () => {/* Implement zoom in functionality */}
  const zoomOut = () => {/* Implement zoom out functionality */}

  return (
    <Layout>
      <h1 className="text-2xl text-[#101828] font-medium mb-4">Contract</h1>

      <div className="container text-[#101828] bg-grayscale-background">
        <div className="border rounded-lg overflow-hidden shadow-lg rounded-b-2xl">
          <div className="bg-[#323639] text-white p-2 flex justify-between items-center">
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
          <div className="bg-white p-4 max-w-2xl mx-auto">
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

          <div className='border rounded-2xl'>
            {/* Signature Section */}
            <div className="p-4 flex justify-between items-center">
              <div className='space-y-3'>
                <div className='p-3 rounded-2xl bg-gray-100'>
                  <p className='text-sm'>James Steve</p>
                </div>
                <p className="text-xs text-gray-600">Signature of support agent</p>
              </div>
              <div className="text-right space-y-3">
                <Image src={Signature} alt="Signature" className="inline-block w-24 h-12" />
                <p className='text-xs'>Signature of A.C.S AgentLink</p>
              </div>
            </div>

            {/* Conditional rendering for signed state */}
            {isSigned ? (
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
                      <p>Name: James Steve</p>
                      <p>Date signed: {new Date(signDate).toLocaleString()}</p>
                    </div>
                    <div>
                      <p>Name: A.C.S AgentLink</p>
                      <p>Date signed: {new Date(signDate).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 gap-1 flex flex-col items-center">
                <Button onClick={handleSign} className="bg-primary text-white rounded-full">
                  Sign contract
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
