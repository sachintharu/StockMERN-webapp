import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="dashboard-root"> {/* wrap everything */}
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;