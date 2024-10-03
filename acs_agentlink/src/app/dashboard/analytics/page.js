"use client";

import Layout from "@/components/dashboard/Layout";
import Image from "next/image";
import Chart0 from "../../../../public/chart0.svg";
import ArrowUpGreen from "../../../../public/arrow-up-green.svg";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import { useState } from "react";

export default function Analytics() {
  const [selectedMonth, setSelectedMonth] = useState("Feb");
  const [year, setYear] = useState(2024);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  return (
    <Layout>
      <div className="text-[#101828]">
        <h1 className="text-2xl font-medium mb-6">Analytics</h1>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Image className="pt-10" src={Chart0} alt="Chart 0" />

          <div className="flex flex-col pb-10 space-y-4 justify-center items-center">
            <p className="text-[#101828] text-lg">Performance report</p>
            <p className="text-[#101828] text-[28px]">🎉 Excellent</p>

            <div className="flex text-sm gap-2 items-center">
              <Image src={ArrowUpGreen} alt="Arrow Up" />
              <span className="text-success-strong">20%</span>
              <span className="text-[#667085]">vs last month</span>
            </div>
          </div>

          <PerformanceChart />
        </div>

        {/* Month Selection and Year Dropdown */}
        <p className="text-lg font-medium text-[#101828] pb-6">Feedback</p>

        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedMonth === month
                    ? "bg-[#101828] text-white"
                    : "bg-[#F8F9FC] text-[#363F72]"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
          <div className="relative">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#F8F9FC] text-[#363F72]"
            >
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
            </select>
          </div>
        </div>

        {/* High Performer Section */}
        <div className="space-x-2 flex">
<div className="p-5 border rounded-2xl bg-grayscale-white space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">🎉</h1>
            <div className="px-3 py-1 rounded-full text-xs text-[#363F72] bg-[#F8F9FC]">
              15th Jan, 2023
            </div>
          </div>
          <div>
            <p className="text-base font-medium text-[#171A1C]">
              High Performer
            </p>
            <p className="text-xs text-grayscale-label">
              Keep up the outstanding work, James! We&apos;re constantly impressed by
              your dedication and efficiency. To further maximize your impact,
              consider taking on a mentorship role or exploring leadership
              opportunities within the team.
            </p>
          </div>
        </div>
        <div className="p-5 border rounded-2xl bg-grayscale-white space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">🎉</h1>
            <div className="px-3 py-1 rounded-full text-xs text-[#363F72] bg-[#F8F9FC]">
              15th Jan, 2023
            </div>
          </div>
          <div>
            <p className="text-base font-medium text-[#171A1C]">
              High Performer
            </p>
            <p className="text-xs text-grayscale-label">
              Keep up the outstanding work, James! We&apos;re constantly impressed by
              your dedication and efficiency. To further maximize your impact,
              consider taking on a mentorship role or exploring leadership
              opportunities within the team.
            </p>
          </div>
        </div>
        </div>
        
      </div>
    </Layout>
  );
}
