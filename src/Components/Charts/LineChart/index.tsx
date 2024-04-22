"use client";
import React, { useEffect, useRef } from "react";
import Chart, { ChartOptions } from "chart.js/auto";

interface LineChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, labels, title }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart instance
      }
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: title,
                data: data,
                fill: false,
                borderColor: "rgb(6, 123, 194)",
                tension: 0.14,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Dates Played",
                },
              },
              y: {
                title: {
                  display: false,
                  text: "",
                },
              },
            },
            animation: {
              duration: 1000,
              easing: "linear",
            },
          } as ChartOptions, // ChartOptions type is necessary for TypeScript
        });
      }
    }
  }, [data, labels, title]);

  return <canvas ref={chartRef} style={{}} />;
};

export default LineChart;
