import React from "react";
import "../components/plans.css";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(ArcElement);

export default function Plans() {
  const data = {
    labels: ["Inprogress", "Open", "Validated", "Completed", "OnHold"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
        ],
      },
    ],
  };

  return (
    <div className="divpie1">
      <div className="divpie2">
        <h2 className="j">Production planning</h2>
        <Pie data={data} />
      </div>
    </div>
  );
}
