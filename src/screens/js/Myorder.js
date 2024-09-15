// MyOrders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Myorders.css';
import Navbar from '../../components/js/Navbar';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://shop-production-09d5.up.railway.app/api/myorders', { withCredentials: true });
        const fetchedOrders = response.data.allOrders || [];

        // Assuming you have the user's email stored in local storage
        const userEmail = localStorage.getItem('userEmail');
        
        // Filter orders based on the logged-in user's email
        const userOrders = fetchedOrders.filter(order => order.userEmail === userEmail);

        // Flatten the orders array and sort by date in ascending order
        const sortedOrders = userOrders
          .flatMap(order => order.items.map(item => ({ ...item, createdAt: order.createdAt })))
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          .reverse(); // Reverse the array to display most recent orders at the top

        setOrders(sortedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      <Navbar setSearchResults={() => {}} />
      <div className='myorder-container'>
        <h2>Your Orders</h2>
        {orders.length > 0 ? (
          <ul>
            {orders.map(item => (
              <li key={item._id}>
                <p>Order ID: {item._id}</p>
                <p>Title: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Discount: {item.discount}</p>
                <p>Total: ${item.total}</p>
                <p>Order Date: { Date(item.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
