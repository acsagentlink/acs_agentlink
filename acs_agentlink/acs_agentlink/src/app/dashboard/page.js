"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/dashboard/Layout";
import ArrowUpGreen from "../../../public/arrow-up-green.svg";
import Image from "next/image";
import Chart0 from "../../../public/chart0.svg";
import Coin from "../../../public/coin.svg";
import CreditIcon from "../../../public/credit-notification.png";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import EarningOverview from "@/components/dashboard/EarningOverview";
import ArrowDown from "../../../public/arrow-down.svg";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("/api/dashboard");
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch dashboard data");
      }
    };

    fetchDashboardData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data)
    return (
      <div className="w-full h-screen items-center justify-center bg-white">
        <div className="spinner"></div>
      </div>
    );

  const { user, notifications, feedbacks, earnings, active_jobs, feedback_chart } = data;

  // Determine the icon direction, color, and trend text dynamically
const isIncrease = feedback_chart.trend === "increase";
const percentageChange = feedback_chart.percentage_change;

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div className="flex-col">
          <p className="text-3xl text-grayscale-header font-normal">
            Hi {user.name} 👋
          </p>
          <p className="text-[#667085] text-sm">
            Track, manage and monitor your jobs
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-grayscale-header">Job requests</p>
          <p className="rounded-full bg-primary bg-opacity-10 text-primary pr-1 pl-1">
            {data.job_requests}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center pt-12 pb-12">
          <p className="text-[#667085] font-medium text-sm">Current Jobs</p>
          <p className="text-[#101828] text-4xl font-semibold ">4</p>
        </div>
        
        {/* <Image className="pt-10" src={Chart0} alt="Chart 0" /> */}

        <div className="flex flex-col pb-10 space-y-4 justify-center items-center">
          <p className="text-[#101828] text-lg">Performance report</p>
          <p className="text-[#101828] text-[28px]">🎉 Excellent</p>

          <div className="flex text-sm gap-2 items-center">
          <div
      className={`w-4 h-4 transform ${
        isIncrease ? "" : "rotate-180"
      } ${isIncrease ? "text-success-strong" : "text-error"}`}
    >
      <Image
        src={ArrowUpGreen} // Use the same arrow-up icon
        alt={isIncrease ? "Arrow Up" : "Arrow Down"}
        className="w-full h-full"
      />
    </div>
    <span
      className={isIncrease ? "text-success-strong" : "text-error"}
    >{`${percentageChange}%`}</span>
    <span className="text-[#667085]">vs last month</span>
          </div>
        </div>

        <PerformanceChart feedbackChartData={data.feedback_chart} />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-10">
        {/* Earnings Card */}
        <div className="lg:w-1/3 w-full">
          <p className="text-lg font-medium text-[#101828] pb-6">Earnings</p>
          <div className="bg-grayscale-header rounded-[2rem] p-6 space-y-16">
            <div className="p-4 bg-grayscale-white bg-opacity-10 rounded-2xl w-fit">
              <Image src={Coin} alt="Coin Icon" />
            </div>
            <p className="pt-5 text-[44px] font-bold">
              <span className="text-primary">{earnings.salary} USD</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:w-full">
          <p className="text-lg font-medium text-[#101828]">Earning Overview</p>
          <EarningOverview earningsChartData={earnings} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#101828] pt-10">
        {/* Active Jobs Section */}

        <div>
          <div className="pb-5 flex justify-between items-center">
            <p className="text-lg font-medium">Active jobs</p>
            <Link href="" className="flex">
              <p className="text-sm font-medium">See all</p>
              <Image src={ArrowDown} />
            </Link>
          </div>

          {active_jobs.map((job) => (
            <div key={job.id} className="p-5 border rounded-2xl bg-grayscale-white space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image src={job.image} alt="Job Icon" width={80} height={80}/>
                  <div>
                    <p className="text-base font-semibold">{job.name}</p>
                  
                  </div>
                </div>
                <div className="flex items-center p-3 bg-grayscale-header_weak text-xs text-white rounded-full">
        
                  {job.preferred_time}
                </div>
              </div>

              <div>
                <p className="pb-2 text-base font-medium">Salary</p>
                  <p className="flex gap-1 items-center">
                    {job.salary} USD
                  </p>
              </div>

              <div>
                <p className="pb-2 text-base font-medium">Apps</p>
                <div className="flex space-x-5">
                  {job.apps.map((app) => (
                      <div key={app.id} className="flex gap-1 items-center">
                      <Image src={app.image} alt="Icon" width={20}
height={20} />
                      {app.name}
                    </div>



                    // <div className="flex gap-1 items-center">
                    //   <Image src={SlackIcon} alt="Slack Icon" />
                    //   Slack
                    // </div>
                    // <div className="flex gap-1 items-center">
                    //   <Image src={InstagramIcon} alt="Instagram Icon" />
                    //   Instagram
                    // </div>
                  ))}
                
                </div>
              </div>

              <div>
                <p className="text-base font-medium">Task</p>
                <p className="text-sm text-grayscale-label">
                 {job.task}
                </p>
              </div>

              <div>
                <p className="text-base font-medium">Performance</p>
                <div className="bg-gradient-to-b from-white to-orange-50 p-4 rounded-lg">
                  <EarningOverview earningsChartData={earnings} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback and Notifications Section */}
        <div className="space-y-6">
          {/* Feedback Section */}
          <div>
            <div className="pb-5 flex justify-between items-center">
              <p className="text-lg font-medium">Feedback</p>
              <Link href="" className="flex">
                <p className="text-sm font-medium">See all</p>
                <Image src={ArrowDown} alt="Arrow Icon" />
              </Link>
            </div>
            <div className="p-5 border rounded-2xl bg-grayscale-white space-y-4">
              {feedbacks &&
                feedbacks.map((feedback, index) => (
                  <div key={feedback.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl">🎉</h1>
                      <div className="px-3 py-1 rounded-full text-xs text-[#363F72] bg-[#F8F9FC]">
                        {new Date(feedback.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-medium text-[#171A1C]">
                        {feedback.text}
                      </p>
                      <p className="text-xs text-grayscale-label">
                        {feedback.review}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <div className="pb-5 flex justify-between items-center">
              <p className="text-lg font-medium">Notifications</p>
              <Link href="" className="flex">
                <p className="text-sm font-medium">See all</p>
                <Image src={ArrowDown} alt="Arrow Icon" />
              </Link>
            </div>
            <div className="space-y-5">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center"
                >
                  <Image
                    src={CreditIcon}
                    alt="Credit Icon"
                    className="w-20 h-20"
                  />
                  <div>
                    <p className="text-base font-medium text-[#171A1C]">
                      {notification.title}
                    </p>
                    <p className="text-sm text-grayscale-header">
                      {notification.body}
                    </p>
                    <p className="text-xs text-grayscale-label">
                      {notification.created_at}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
