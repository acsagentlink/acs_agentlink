"use client"

import Layout from '@/components/dashboard/Layout'
import { useState, useEffect } from 'react'
import CreditIcon from "../../../../public/credit-notification.png"
import Image from 'next/image'
import axios from "axios";




export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All')
  const [notifications, setNotifications] = useState(null)
  const [error, setError] = useState(null);
  function formatDate(createdAt) {
    const date = new Date(createdAt);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear();
  
    // Add suffix for the day (st, nd, rd, th)
    const daySuffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    return `${day}${daySuffix(day)} ${month}, ${year}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/notifications");
        setNotifications(response.data);
      } catch (err) {
        setError("Failed to fetch dashboard data");
      }
    };
    fetchData();
  }, []);
if (!notifications)
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
        
        {activeTab == "All" && notifications && notifications.all.map((notification, index) => (
          <div key={index} className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center">
          <Image src={CreditIcon} alt='Credit Icon Image' className="w-20 h-20" />
          <div>
            <p className="text-base font-medium text-[#171A1C]">{notification.title}</p>
            <p className="text-sm text-grayscale-header">{notification.body}</p>
            <p className="text-xs text-grayscale-label">{formatDate(notification.created_at)}</p>
          </div>
        </div>
        ))}

        {activeTab == "Read" && notifications && notifications.read.map((notification, index) => (
          <div key={index} className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center">
          <Image src={CreditIcon} alt='Credit Icon Image' className="w-20 h-20" />
          <div>
            <p className="text-base font-medium text-[#171A1C]">{notification.title}</p>
            <p className="text-sm text-grayscale-header">{notification.body}</p>
            <p className="text-xs text-grayscale-label">{formatDate(notification.created_at)}</p>
          </div>
        </div>
        ))}

        {activeTab == "Unread" && notifications && notifications.unread.map((notification, index) => (
          <div key={index} className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center">
          <Image src={CreditIcon} alt='Credit Icon Image' className="w-20 h-20" />
          <div>
            <p className="text-base font-medium text-[#171A1C]">{notification.title}</p>
            <p className="text-sm text-grayscale-header">{notification.body}</p>
            <p className="text-xs text-grayscale-label">{formatDate(notification.created_at)}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
     
    </Layout>
    
  )
}