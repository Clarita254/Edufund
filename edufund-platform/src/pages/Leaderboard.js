import React, { useEffect, useState } from 'react';
import "../styles/leaderboard.css";
import Footer from "../components/Footer";

const Leaderboard = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated fetch function (replace with actual API URL)
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("https://your-api-url.com/leaderboard"); // ← Replace with your real endpoint
        const data = await response.json();

        // Assume the data is an array of { user: "USER123", amount: 5000 }
        // Sort by amount (highest first)
        const sortedData = data.sort((a, b) => b.amount - a.amount);

        setDonors(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      {/* Main Content */}
      <main className="main">
        <h1 className="page-title">LEADERBOARD</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>RANK</th>
                <th>USER</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr key={index}>
                  <td className="rank">{index + 1}</td>
                  <td>{donor.user}</td>
                  <td className="amount">${donor.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Leaderboard;