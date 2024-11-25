"use client";

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const CustomSlider = ({ value, onChange, disabled }) => {
  const marks = [
    { value: 0, label: "0%" },
    { value: 20, label: "20" },
    { value: 40, label: "40" },
    { value: 60, label: "60" },
    { value: 80, label: "80" },
    { value: 100, label: "100%" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="custom-slider"
        marks={marks}
        min={0}
        max={100}
        step={10}
        disabled={disabled}
        valueLabelDisplay="auto" // Display value above the slider
        sx={{
          color: disabled ? "#d3d3d3" : "#FF8C42", // Color based on disabled state
        }}
      />
    </Box>
  );
};

export default CustomSlider;
