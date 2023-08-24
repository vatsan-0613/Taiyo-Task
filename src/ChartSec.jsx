import Header from "./Header";
import React from "react"
import { Link } from "react-router-dom";
import Charts from "./Charts";
import CovidMap from "./Map";

export default function ChartSec() {
  return (
    <div>
    <Header></Header>
    <div className="container-fluid">
            <Charts />
            <CovidMap />
    </div>
    </div>
)
}