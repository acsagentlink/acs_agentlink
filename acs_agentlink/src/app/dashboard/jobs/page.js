"use client"

import Layout from "@/components/dashboard/Layout";
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Clock, Search } from 'lucide-react'
import Chart2 from "../../../../public/chart2.svg"
import MTNICON from "../../../../public/mtn-logo.svg";
import GLASSDOORICON from "../../../../public/glassdoor-logo.svg"
import GlobalIcon from "../../../../public/global.svg";
import DiscordIcon from "../../../../public/discord.svg";
import SlackIcon from "../../../../public/slack.svg";
import InstagramIcon from "../../../../public/instagram.svg";
import SunIcon from "../../../../public/sun-white.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EarningOverview from "@/components/dashboard/EarningOverview";

export default function MyJobs() {
    const [activeTab, setActiveTab] = useState("active")

        // Map icon to apps
        const appIconMap = {
          "Discord": DiscordIcon,
          "Slack": SlackIcon,
          "Instagram": InstagramIcon,
        };

    const jobData = [
      {
        company: "Glassdoor",
        logo: GLASSDOORICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
      {
        company: "MTN Nigeria",
        logo: MTNICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
    ]
  
    const jobRequests = [
      {
        company: "MTN Nigeria",
        logo: MTNICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
      {
        company: "MTN Nigeria",
        logo: MTNICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
      {
        company: "MTN Nigeria",
        logo: MTNICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
      {
        company: "MTN Nigeria",
        logo: MTNICON,
        location: "Lagos, Nigeria",
        hours: "3pm -11pm",
        apps: ["Discord", "Slack", "Instagram"],
        task: "Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.",
      },
    ]

    return (
        <Layout>
      <h1 className="text-3xl font-medium mb-4 text-grayscale-header">Jobs</h1>
      <div className="w-full">
        {/* Tab navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("active")}
              className={`pb-2 font-medium text-lg ${
                activeTab === "active"
                  ? "text-primary border-b-2 border-primary"
                  : "text-[#667085]"
              }`}
            >
              Active jobs
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`pb-2 font-medium text-lg flex items-center ${
                activeTab === "requests"
                  ? "text-primary border-b-2 border-primary"
                  : "text-[#667085]"
              }`}
            >
              Job requests
              <span className="ml-2 px-2 py-0.5 bg-gray-200 rounded-full text-xs text-gray-600">
                {jobRequests.length}
              </span>
            </button>
          </div>
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-[200px] rounded-full border-gray-300"
            />
          </div>
        </div>

        {/* Active Jobs Tab */}
        {activeTab === "active" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobData.map((job, index) => (
            <div key={index} className="p-5 border rounded-2xl bg-grayscale-white space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
                  <div>
                    <p className="text-base font-semibold text-grayscale-header">{job.company}</p>
                    <div className="flex gap-1 items-center">
                      <Image src={GlobalIcon} alt="Global Icon" className="w-4 h-4" />
                      <p className="text-sm text-grayscale-placeholder">{job.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-grayscale-header_weak text-xs text-white rounded-full">
                  <Image src={SunIcon} alt={job.hours} className="w-5 h-5 mr-2" />
                  {job.hours}
                </div>
              </div>
        
              <div>
                <p className="pb-2 text-base font-medium text-[#2B2E32]">Apps</p>
                <div className="flex space-x-5 text-[#171A1C]">
                  {job.apps.map((app, i) => {
                    const IconComponent = appIconMap[app]
                    return (
                         <div key={i} className="flex gap-1 items-center">
                      {IconComponent && <Image src={IconComponent} alt={app} className="w-5 h-5" />}
                      {app}
                    </div>
                    );
                 
})}
                </div>
              </div>
        
              <div>
                <p className="text-base font-medium text-[#2B2E32]">Task</p>
                <p className="text-sm text-grayscale-label">
                  {job.task}
                </p>
              </div>
        
              <div>
                <p className="text-base font-medium text-[#2B2E32]">Performance</p>
                <div className="w-full  bg-gradient-to-b from-white to-orange-50 p-4 rounded-lg">

                <EarningOverview/>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        )}

       {/* Job Requests Tab */}
{/* Job Requests Tab */}
{activeTab === "requests" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {jobRequests.map((job, index) => (
      <div key={index} className="p-5 border rounded-2xl bg-grayscale-white space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
            <div>
              <p className="text-base font-semibold text-grayscale-header">
                {job.company}
                <span className="text-sm font-normal text-error bg-opacity-10 bg-error rounded-full py-1  px-2 ml-2">Pending</span> {/* Pending */}
              </p>
              <div className="flex gap-1 items-center">
                <Image src={GlobalIcon} alt="Global Icon" className="w-4 h-4" />
                <p className="text-sm text-grayscale-placeholder">{job.location}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-grayscale-header_weak text-xs text-white rounded-full">
            <Image src={SunIcon} alt={job.hours} className="w-5 h-5 mr-2" />
            {job.hours}
          </div>
        </div>

        <div>
          <p className="pb-2 text-base font-medium text-[#2B2E32]">Apps</p>
          <div className="flex space-x-5 text-[#171A1C]">
            {job.apps.map((app, i) => {
              const IconComponent = appIconMap[app];
              return (
                <div key={i} className="flex gap-1 items-center">
                  {IconComponent && <Image src={IconComponent} alt={app} className="w-5 h-5" />}
                  {app}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-base font-medium text-[#2B2E32]">Task</p>
          <p className="text-sm text-grayscale-label">
            {job.task}
          </p>
        </div>

        {/* Border Line */}
        <div className="border-t my-4"></div>

        {/* Accept and Decline Buttons */}
        <div className="flex space-x-2">
          
          <Button className="px-4 py-2 bg-error bg-opacity-10 text-error rounded-full hover:bg-error hover:text-white">
            Decline
          </Button>
          <Button className="px-4 py-2 bg-success text-white rounded-full hover:bg-success-strong">
            Accept
          </Button>
        </div>
      </div>
    ))}
  </div>
)}


      </div>
        </Layout>
        
    )
}