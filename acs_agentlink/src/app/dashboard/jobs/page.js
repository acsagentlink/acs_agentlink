"use client"

import Layout from "@/components/dashboard/Layout";
import { useState, useEffect } from 'react'
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
import { useFeedbackChart } from "@/context/DashboardContext";
import EarningOverview from "@/components/dashboard/EarningOverview";
import axios from "axios";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import debounce from "lodash.debounce";

export default function MyJobs() {
    const [activeTab, setActiveTab] = useState("active")
    const [jobData, setJobData] = useState([]);
    const [jobRequests, setJobRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(0);
    const [loading3, setLoading3] = useState(0)
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const feedbackChart = useFeedbackChart();
    const [searchQuery, setSearchQuery] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  // Function to handle search
  const handleSearch = async (query) => {
    setLoadingSearch(true);
    try {
     

      // Update state based on active tab
      if (activeTab == "active") {
        const response = await axios.get(`/api/jobs/active?query=` + query);
        setJobData(response.data.jobs);
      } else {
        const response = await axios.get(`/api/jobs/pending?query=` + query);
        setJobRequests(response.data.jobs);
      }
    } catch (err) {
      setError("Failed to fetch search results");
    } finally {
      setLoadingSearch(false);
    }
  };

  // Debounced search handler to optimize performance
  const debouncedSearch = debounce((query) => {
    if(query !== ""){
      handleSearch(query);
    }else {
      fetchJobs();
      fetchRequests();
    }
   
  }, 300);




    // Map icon to apps
    const appIconMap = {
      Discord: DiscordIcon,
      Slack: SlackIcon,
      Instagram: InstagramIcon,
    };
  
    // Fetch jobs from an API
    const accept = async (id) => {
      console.log(id)

      setLoading2(id);
      setErrorMessage(null)
      const formData = new FormData();
  
      // Append form fields to FormData
      formData.append('job_id', id);
  
      try {
        const response = await axios.post(`/api/jobs/accept`, formData);
  
    setJobData([])
    setLoading(true)
    fetchJobs()
    setLoading2(0)
      } catch (error) {
        setLoading2(0);
        const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
        setErrorMessage(apiError);
      } finally {
        setLoading2(0);
      }
    };

    const decline = async (id) => {

      setLoading3(id);
      setErrorMessage(null)
      const formData = new FormData();
  
      // Append form fields to FormData
      formData.append('job_id', id);
  
      try {
        const response = await axios.post(`/api/jobs/decline`, formData);
  
    setJobData([])
    setLoading(true)
    fetchJobs()
    setLoading3(0)
      } catch (error) {
        setLoading(30);
        const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
        setErrorMessage(apiError);
      } finally {
        setLoading3(0);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs/active");
        setJobData(response.data.jobs);
        fetchRequests()
      } catch (err) {
        setError("Failed to fetch dashboard data");
      }
    };
  

    const fetchRequests = async () => {
      try {
        const response = await axios.get("/api/jobs/requests");
        setJobRequests(response.data.jobs);
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch dashboard data");
      }
    };

      // Handle input change
  const onSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Call the debounced function
    debouncedSearch(query);
  };


      useEffect(() => {

        fetchJobs();
        fetchRequests();
      }, []);
      // if (jobData.length == 0 && jobRequests.length == 0)
        if(loading)
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
              value={searchQuery}
              onChange={onSearchChange}
              className="pl-10 pr-4 py-2 w-[200px] rounded-full text-[#000] border-gray-300"
            />
          </div>
        </div>
        {errorMessage && (
            <div className='text-red-500 my-2'>
              {errorMessage}
            </div>
          )}

        {/* Active Jobs Tab */}
        {activeTab === "active" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobData.map((job, index) => (
            <div key={index} className="p-5 border rounded-2xl bg-grayscale-white space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/storage` + job.image} alt={job.name} className="border border-gray-200 rounded-2xl object-cover" style={{width: "80px", height: "80px"}} width={80} height={80} />
                  <div>
                    <p className="text-base font-semibold text-grayscale-header">{job.name}</p>
                    <div className="flex gap-1 items-center">
                      <Image src={GlobalIcon} alt="Global Icon" className="w-4 h-4" />
                      <p className="text-sm text-grayscale-placeholder">{job.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-grayscale-header_weak text-xs text-white rounded-full">
                  <Image src={SunIcon} alt={job.hours} className="w-5 h-5 mr-2" />
                  {job.preferred_time}
                </div>
              </div>
        
              <div>
                <p className="pb-2 text-base font-medium text-[#2B2E32]">Apps</p>
                <div className="flex space-x-5 text-[#171A1C]">
                  {job.apps.map((app, i) => {
                    return (
                         <div key={i} className="flex gap-1 items-center">
                      {<Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/` + app.image} alt={app.name} className="w-5 h-5" width={15} height={15} />}
                      {app.name}
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

                <PerformanceChart feedbackChartData={feedbackChart} width={"100%"}/>

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
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/storage` + job.image} alt={job.name} className="border border-gray-200 rounded-2xl"  style={{width: "80px", height: "80px"}}  width={80} height={80} />
            <div>
              <p className="text-base font-semibold text-grayscale-header">
                {job.name}
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
            {job.preferred_time}
          </div>
        </div>

        <div>
          <p className="pb-2 text-base font-medium text-[#2B2E32]">Apps</p>
          <div className="flex space-x-5 text-[#171A1C]">
            {job.apps.map((app, i) => {
              return (
                <div key={i} className="flex gap-1 items-center">
                {<Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/` + app.image} alt={app.name} className="w-5 h-5" width={15} height={15} />}
                {app.name}
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
       {job.status == "pending"? <div className="flex space-x-2">
          
          <Button disabled={loading3 == job.id} onClick={() => decline(job.id)} className="px-4 py-2 bg-error bg-opacity-10 text-error rounded-full hover:bg-error hover:text-white">
            {loading3 == job.id ? (<div className='spinner'></div>) : "Decline" } 
          </Button>
          <Button disabled={loading2 == job.id} onClick={() => accept(job.id)} className="px-4 py-2 bg-success text-white rounded-full hover:bg-success-strong">
            {loading2 == job.id ? (<div className='spinner'></div>) : "Accept" }  
          </Button>
        </div> : ""}

        {job.status == "accepted"? <div className="flex space-x-2">
          
          <p className="text-success">You have already accepted this offer and will be notified once the job becomes active</p>
        </div> : ""}
      </div>
    ))}
  </div>
)}


      </div>
        </Layout>
        
    )
}