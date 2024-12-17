"use client";

import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

// Create separate contexts for performance and earnings data
const FeedbackChartContext = createContext();
const EarningsContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [feedbackChart, setFeedbackChart] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("/api/dashboard");
        const { feedback_chart, earnings } = response.data;
        
        // Set the specific data for feedback_chart and earnings
        setFeedbackChart(feedback_chart);
        setEarnings(earnings);
        
      } catch (err) {
        // setError("Failed to fetch dashboard data");
      }
    };

    fetchDashboardData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <FeedbackChartContext.Provider value={feedbackChart}>
      <EarningsContext.Provider value={earnings}>
        {children}
      </EarningsContext.Provider>
    </FeedbackChartContext.Provider>
  );
};

// Custom hooks to access the context values
export const useFeedbackChart = () => useContext(FeedbackChartContext);
export const useEarnings = () => useContext(EarningsContext);
