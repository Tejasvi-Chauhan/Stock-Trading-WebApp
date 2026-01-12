import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/allOrders");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  // EMPTY STATE
  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  // ORDERS LIST
  return (
    <div className="orders">
  <table className="orders-table">
    <thead>
      <tr>
        <th>Instrument</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Type</th>
      </tr>
    </thead>

    <tbody>
      {orders.map((order) => (
        <tr key={order._id}>
          <td className="symbol">{order.name}</td>
          <td>{order.qty}</td>
          <td>₹{order.price}</td>
          <td  className={order.mode}>
            {order.mode}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Orders;
