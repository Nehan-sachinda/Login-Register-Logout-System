import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate
import './Navbar.css';

function Navbar({ setSearchQuery }) {  // Pass setSearchQuery as prop
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value); // Update the search query in the parent component
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search page with the query
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
    }
  };









  










  return (
    <div className='navbar'>
       {/* Fashion Haven as a clickable link */}
       <Link to='/fpage' className='logo-link'>
        <p className='logo'>Fashion Haven</p>
      </Link>
      <ul className='nav-links'>
      <li>
          <Link to='/shopi'>Shop</Link>
        </li>
       
        <li>
          <Link to='/men'>Men</Link>
        </li>
        <li>
          <Link to='/women'>Women</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/login'>Login/Register</Link>
        </li>
      </ul>

      {/* Search bar */}
      <form onSubmit={handleSearchSubmit} className='search-bar'>
        <input
          type='text'
          value={query}
          onChange={handleSearchChange}
          placeholder='Search for products...'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Navbar;