import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Spinner } from "react-bootstrap";

function formatDate(dateString) {
  const options = { year: "numeric", month: "short" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

function Charts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const historicalData = response.data;
        const formattedData = Object.keys(historicalData.cases).map((date) => ({
          date,
          cases: historicalData.cases[date],
        }));
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="chart-container">
        <h3 className="mt-3">Covid-19 Cases Fluctuation</h3>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <LineChart width={700} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              interval="preserveStartEnd"
            />
            <YAxis tickFormatter={formatNumber} hide />{" "}
            {/* Removed label-related props */}
            <Tooltip labelFormatter={formatDate} />
            <Legend />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#8884d8"
              name="Cases"
            />
          </LineChart>
        )}
      </div>
    </div>
  );
}

export default Charts;
