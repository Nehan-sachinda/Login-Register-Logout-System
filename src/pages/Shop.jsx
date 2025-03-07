import React from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/Shop.css';

function Shop() {
    return (
        <div className="shop-container">
            {/* Top Column Banner */}
            <div className="top-column-banner">
                <Link to="/exclusive-offers">
                    <img src="https://www.nolimit.lk/_next/image?url=https%3A%2F%2Fcdn.greencloudpos.com%2Fnolimit.lk%2Fv2-Main%20Banners%2Fdesktop1-1740715123938.jpeg%3Fwidth%3D1600&w=2048&q=75" alt="Exclusive Deals" />
                    <div className="top-column-banner-text">
                        <h2>Exclusive Deals</h2>
                        <p>Limited Time Offers - Up to 70% Off</p>
                        <button>Shop Now</button>
                    </div>
                </Link>
            </div>

            {/* Women's Banner */}
            <div className="banner women-banner">
                <Link to="/women">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69VjSBJSsnXpDE2gn8hbzo7zIPlLSzvv-0FkBiKIuHpfe06ld3q0KBcIoP4LXfsx2Omg&usqp=CAU" alt="Women's Collection" />
                    <div className="banner-text">
                        <h2>Exclusive Women's Collection</h2>
                        <p>Up to 50% Off</p>
                        <button>Shop Now</button>
                    </div>
                </Link>
            </div>

            {/* Men's Banner */}
            <div className="banner men-banner">
                <Link to="/men">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69VjSBJSsnXpDE2gn8hbzo7zIPlLSzvv-0FkBiKIuHpfe06ld3q0KBcIoP4LXfsx2Omg&usqp=CAU" alt="Men's Collection" />
                    <div className="banner-text">
                        <h2>Stylish Men's Fashion</h2>
                        <p>Up to 40% Off</p>
                        <button>Shop Now</button>
                    </div>
                </Link>
            </div>

            {/* Column Banners */}
            <div className="column-banners">
                {/* New Arrivals */}
                <div className="column-banner">
                    <Link to="/new-arrivals">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy7HXTonrCqfTjj1Y3elEKAn2tCGrUGqDBA&s" alt="New Arrivals" />
                        <div className="column-banner-text">
                            <h3>New Arrivals</h3>
                            <p>Discover the latest trends</p>
                        </div>
                    </Link>
                </div>

                {/* Best Sellers */}
                <div className="column-banner">
                    <Link to="/best-sellers">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy7HXTonrCqfTjj1Y3elEKAn2tCGrUGqDBA&s" alt="Best Sellers" />
                        <div className="column-banner-text">
                            <h3>Best Sellers</h3>
                            <p>Shop our top-rated products</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Shop; 