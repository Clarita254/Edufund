import React, { useEffect, useState } from 'react';
import '../styles/DonationHistory.css';
import { FaSearch } from 'react-icons/fa';
import Footer from "../components/Footer";

const DonationHistory = () =>{

// eslint-disable-next-line no-unused-vars
const [donations, setDonations] = useState([]);

  const [filteredDonations, setFilteredDonations] = useState([]); // Filtered results
  const [currentPage, setCurrentPage] = useState(1);
  const donationsPerPage = 5;

  const [filters, setFilters] = useState({
    date: '',
    campaign: '',
    amount: '',
    search: '',
  });

  // Simulated fetch (replace this with real API call)
  useEffect(() => {
    // Example: fetch('/api/donations').then(res => res.json()).then(data => {
    //   setDonations(data);
    //   setFilteredDonations(data);
    // });
  }, []);

  // Handle filtering
  useEffect(() => {
    let filtered = donations;

    if (filters.date.trim() !== '') {
      filtered = filtered.filter(d => d.date.includes(filters.date.trim()));
    }

    if (filters.campaign.trim() !== '') {
      filtered = filtered.filter(d =>
        d.campaign.toLowerCase().includes(filters.campaign.trim().toLowerCase())
      );
    }

    if (filters.amount.trim() !== '') {
      filtered = filtered.filter(d => d.amount.toString().includes(filters.amount.trim()));
    }

    if (filters.search.trim() !== '') {
      const s = filters.search.toLowerCase();
      filtered = filtered.filter(
        d =>
          d.campaign.toLowerCase().includes(s) ||
          d.mode.toLowerCase().includes(s) ||
          d.status.toLowerCase().includes(s)
      );
    }

    setFilteredDonations(filtered);
    setCurrentPage(1); // Reset page when filters change
  }, [filters, donations]);

  // Pagination on the table
  const indexOfLast = currentPage * donationsPerPage;
  const indexOfFirst = indexOfLast - donationsPerPage;
  const currentDonations = filteredDonations.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredDonations.length / donationsPerPage);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="donation-history-page container py-5">
      <h2 className="text-center mb-4 fw-bold">DONATION HISTORY</h2>

      {/* Filters */}
      <div className="filters d-flex flex-wrap gap-3 justify-content-center mb-4">
        <input
          type="text"
          name="date"
          className="form-control"
          placeholder="Date (e.g. 01/01/24)"
          value={filters.date}
          onChange={handleInputChange}
          style={{ maxWidth: '160px' }}
        />
        <input
          type="text"
          name="campaign"
          className="form-control"
          placeholder="Campaign"
          value={filters.campaign}
          onChange={handleInputChange}
          style={{ maxWidth: '160px' }}
        />
        <input
          type="text"
          name="amount"
          className="form-control"
          placeholder="Amount"
          value={filters.amount}
          onChange={handleInputChange}
          style={{ maxWidth: '160px' }}
        />
        <div className="input-group" style={{ maxWidth: '200px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search"
            value={filters.search}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Table */}
<div className="table-container">
  <div className="card-table">
    <div className="table-responsive">
      <table className="table table-bordered text-center mb-0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Campaign</th>
            <th>Amount Donated</th>
            <th>Payment Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentDonations.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-records">No donation records found.</td>
            </tr>
          ) : (
            currentDonations.map((d, idx) => (
              <tr key={idx}>
                <td>{d.date}</td>
                <td>{d.campaign}</td>
                <td>{d.amount}</td>
                <td>{d.mode}</td>
                <td>{d.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

{/* Load More */}
      {currentPage < totalPages && (
        <div className="load-more-container">
          <button className="btn btn-outline-dark" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}

 <Footer />  
</div>
  );

};

export default DonationHistory;
