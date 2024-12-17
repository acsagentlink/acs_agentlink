"use client";

import Layout from "@/components/dashboard/Layout";
import Image from "next/image";
import Chart0 from "../../../../public/chart0.svg";
import ArrowUpGreen from "../../../../public/arrow-up-green.svg";
import ArrowDownRed from "../../../../public/arrow-down-red.svg";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import { useState, useEffect } from "react";
import { useFeedbackChart } from "@/context/DashboardContext";
import axios from "axios";
import Gauge from "@/components/dashboard/Gauge";

export default function Analytics() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [year, setYear] = useState("2024");
  const [data, setData] = useState([]);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthNumber = (monthAbbreviation) => {
    return new Date(`${monthAbbreviation} 1, 2000`).getMonth() + 1;
  }
  const feedbackChart = useFeedbackChart();

  const fetchData = async (year = null) => {
    try {
      if(year){
        const response = await axios.get("/api/analytics?year="+year);
        setData(response.data);
      }else {
        const response = await axios.get("/api/analytics");
        setData(response.data);
      }
    } catch (err) {
      setError("Failed to fetch dashboard data");
    }
  };

  const changeYear = (year) => {
    setData([])
    fetchData(year)
    setYear(year)
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (data.length == 0)
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
      <div className="text-[#101828]">
        <h1 className="text-2xl font-medium mb-6">Analytics</h1>

        <div className="flex flex-col lg:flex-row justify-between items-center">
        <Gauge  activePercentage={((data.active_jobs_count / 5) * 100) / 2} activeUsers={data.active_jobs_count} totalUsers={5} text="Active Jobs"/>


          <div className="flex flex-col pb-10 space-y-4 justify-center items-center">
          <p className="text-[#101828] text-lg">Performance report</p>
          {data.feedback && data.feedback.length > 0 && <><p className="text-[#101828] text-[28px]">{data.feedback[0].text}</p>

            <div className="flex text-sm gap-2 items-center">
            <div
            className={`w-4 h-4 transform ${
            data.trend == "increase" ? "" : "rotate-180"
            } ${data.trend == "increase" ? "text-success-strong" : "text-error"}`}
            >
            <Image
            src={data.trend == "increase"?ArrowUpGreen : ArrowDownRed} // Use the same arrow-up icon
            alt={data.trend == "increase" ? "Arrow Up" : "Arrow Down"}
            className="w-full h-full"
            />
            </div>
            <span
            className={data.trend == "increase" ? "text-success-strong" : "text-error"}
            >{`${Math.round(data.percentageChange, 2)}%`}</span>
            <span className="text-[#667085]">vs last month</span>
            </div>
            </>}
          </div>

          <PerformanceChart feedbackChartData={feedbackChart} />
        </div>

        {/* Month Selection and Year Dropdown */}
        <p className="text-lg font-medium text-[#101828] pb-6">Feedback</p>

        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {months.map((month, id) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(monthNumber(month))}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedMonth == id + 1 
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
              onChange={(e) => changeYear(e.target.value)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#F8F9FC] text-[#363F72]"
            >
               {data.availableYears.map((data) =><option value={data}>{data}</option>)}
            </select>
          </div>
        </div>

        {/* High Performer Section */}

        {Object.entries(data.feedbacks).map(([month, feedbacks]) => <><div className={`space-x-2 ${monthNumber(month) == selectedMonth ? "flex" : "hidden" }`}>

        {feedbacks.map((data) => <div className="p-5 border rounded-2xl bg-grayscale-white space-y-4">
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-md">{data.text}</h1>
            <div className="px-3 py-1 rounded-full text-xs text-[#363F72] bg-[#F8F9FC]">
            {new Date(data.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
            </div>
          </div>
          <div>
            {/* <p className="text-base font-medium text-[#171A1C]">
              High Performer
            </p> */}
            <p className="text-xs text-grayscale-label">
             {data.review}
            </p>
          </div>
        </div>)}
        </div></>)}
        
      </div>
    </Layout>
  );
}
