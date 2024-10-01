"use client"

import Layout from '@/components/dashboard/Layout'
import { useState } from 'react'
import CreditIcon from "../../../../public/credit-notification.png"
import Image from 'next/image'

const notifications = [
  { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' },
  { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' },
  { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' },
  { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' }
]

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <Layout>
      <h1 className="text-3xl text-grayscale-header font-medium mb-6">Notifications</h1>
      <div className='flex gap-20'>
 <div className="mb-6">
        <div className="inline-flex rounded-full p-1 border border-grayscale-line">
          {['All', 'Read', 'Unread'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'text-grayscale-placeholder hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full">
        {notifications.map((notification, index) => (
          <div key={index} className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center">
          <Image src={CreditIcon} className="w-20 h-20" />
          <div>
            <p className="text-base font-medium text-[#171A1C]">{notification.title}</p>
            <p className="text-sm text-grayscale-header">{notification.message}</p>
            <p className="text-xs text-grayscale-label">{notification.date}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
     
    </Layout>
    
  )
}