import React from "react";



import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="dashboard-root"> {/* root wrapper */}
      <div className="dashboard-container">
        <WatchList />

        <div className="content">

          
            
            <Summary />
            
          

        </div>
      </div>
    </div>
  );
};

export default Dashboard;