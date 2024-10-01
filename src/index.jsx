import React from "react";
import { createRoot } from "react-dom/client";
import WeatherDashboard from "./App"; // Import the WeatherDashboard component

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<WeatherDashboard />);
