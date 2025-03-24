import React from "react";
import Select from "react-select";
import "../styles/Dashboard.css";

const Sidebar = () => {
  const storeOptions = [
    { value: "all", label: "All" },
    { value: "astoria", label: "Astoria" },
    { value: "hells-kitchen", label: "Hell’s Kitchen" },
    { value: "lower-manhattan", label: "Lower Manhattan" }
  ];

  const productOptions = [
    { value: "all", label: "All" },
    { value: "coffee", label: "Coffee" },
    { value: "tea", label: "Tea" },
    { value: "bakery", label: "Bakery" }
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">Filters</h2>
      <label>Store</label>
      <Select options={storeOptions} />
      <label>Product</label>
      <Select options={productOptions} />
      <button className="clear-btn">Clear all filters</button>
    </aside>
  );
};

export default Sidebar;
