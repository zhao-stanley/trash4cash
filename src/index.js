import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Browse from "./routes/Browse";
import Profile from "./routes/Profile"; 
import Leaderboard from "./routes/Leaderboard";
import Verify from "./routes/Verify";
import Settings from "./routes/Settings";
import Rewards from "./routes/Rewards";
import Redeem from "./routes/Redeem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="browse" element={<Browse />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="redeem" element={<Redeem />} />
        <Route path="verify" element={<Verify />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
