import React, { useState, useEffect } from "react";
import "./progress.css";

const Progress = ({ progress }) => {
  const [offset, setOffset] = useState(0);
  const size = 100;
  const center = size / 2;
  const radius = size / 2 - 10; // Subtract stroke width to adjust svg circle
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <div className="circular-progress-wrapper">
      <h2>Progress</h2>
      <div className="circular-progress-bar">
        <svg className="circular-progress-bar-svg" width={size} height={size}>
          <circle
            className="circular-progress-bar-circle-bg"
            stroke="#eee"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth="5"
          />
          <circle
            className="circular-progress-bar-circle"
            stroke="#7bcdc8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="circular-progress-bar-text">{progress}%</span>
      </div>
    </div>
  );
};

export default Progress;
