import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';  // Assuming you have a ProductCard component for product display

const Search = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  // Extract the query from the URL
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  // Fetch products (this can be from an API or props)
  useEffect(() => {
    // Replace this with a fetch call to get products from your backend or external API
    const fetchProducts = async () => {
      try {
        // Example API call (replace with your actual endpoint)
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        
        if (query) {
          const filtered = data.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(data);  // Show all products if no query
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Search;

