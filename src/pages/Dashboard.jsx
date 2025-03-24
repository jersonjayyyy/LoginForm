import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MetricsCard from "../components/MetricsCard";
import SalesChart from "../components/SalesChart";
import PieChartComponent from "../components/PieChart";
import BarChartComponent from "../components/BarChart";
import DataTable from "../components/DataTable";
import authService from "../services/authService"; 
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    authService.logout();
    
    
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        
        
        <div className="logout-container">
          <button 
            className="logout-button" 
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        
        <div className="metrics-container">
          <MetricsCard title="Total Sales" value="₱727K" />
          <MetricsCard title="Total Quantity" value="₱214K" />
          <MetricsCard title="Total Transactions" value="₱149K" />
        </div>
        <div className="charts-container">
          <PieChartComponent title="Sales by Store" />
          <PieChartComponent title="Quantity by Store" />
          <SalesChart title="Sales by Month" />
        </div>
        <div className="bottom-section">
          <BarChartComponent title="Sales by Product Category" />
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;