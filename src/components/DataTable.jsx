import React from "react";
import "../styles/Dashboard.css";

const DataTable = () => {
  return (
    <div className="table-container">
      <h3>Recent Sales Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Store</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-03-10</td>
            <td>Latte</td>
            <td>Astoria</td>
            <td>₱5.50</td>
          </tr>
          <tr>
            <td>2025-03-09</td>
            <td>Espresso</td>
            <td>Lower Manhattan</td>
            <td>₱3.00</td>
          </tr>
          <tr>
            <td>2025-03-08</td>
            <td>Croissant</td>
            <td>Hell’s Kitchen</td>
            <td>₱2.75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
