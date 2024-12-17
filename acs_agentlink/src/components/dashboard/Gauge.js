import React from "react";

const Gauge = ({ activePercentage, activeUsers, totalUsers, text }) => {
  return (
    <div className="relative w-[20rem] h-[15rem] mt-10">
      {/* SVG Gauge */}
      <svg className="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle (Gauge) */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-[#F4F4FD]"
          strokeWidth="3.5"
          strokeDasharray="50 100"
          strokeLinecap="round"
        />
        {/* Gauge Progress */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-[#fa8508]"
          strokeWidth="3.5"
          strokeDasharray={`${activePercentage / 2} 100`}
          strokeLinecap="round"
        />
      </svg>

      {/* Value Text */}
      <div className="absolute top-[4rem] start-1/2 transform -translate-x-1/2 text-center">
        <span className="text-sm text-[#000] text-md mb-2 block">{text}</span>
        <span className="text-4xl font-semibold text-[#000]">
          {activeUsers.toLocaleString()}
          {/* <b className="text-[#000] font-semibold">/{totalUsers.toLocaleString()}</b> */}
        </span>
      </div>
    </div>
  );
};

export default Gauge;
