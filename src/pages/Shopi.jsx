import React from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/Shopi.css';

// Sample products data
const products = [
    { id: 1, name: "DEEDAT Men's Polo Neck Regular Fit T-Shirt Black", price: 25.99, image:   "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sPoloNeckRegularFitT-ShirtBlack-3-1740627949602-0Y7A4535.jpg"},
    { id: 2, name: "DEEDAT Men's Standard Hem Slim Fit Jeans Dark Blue", price: 45.49, image:   "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sStandardHemSlimFitJeansGrey-0-1739513058822-jeans(23).jpg" },
    { id: 3, name: "HUF & DEE GRAFFITI STREET Women's Shirt Collar Screen Print Jacket Blue", price: 59.99, image:"https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEGRAFFITISTREETWomen'sShirtCollarScreenPrintJacketBlue-2-1740729988876-denimjacket(2).jpg" },
    { id: 4, name: "HUF & DEE Women's Casual Shoes", price: 89.99, image:     "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualShoesBlack%E2%80%A236-0-1719908656178-0Y7A3067.jpg" },
    { id: 5, name: "MBRK Men's Regular Fit Printed Casual Shirt White", price: 79.99, image:  "https://cdn.greencloudpos.com/nolimit.lk/product/MBRKMen'sRegularFitPrintedCasualShirtWhite-3-1740560212138-0Y7A4583.jpg"},
    { id: 6, name: "Men's Regular Fit Hoodie Green", price: 59.99, image:  "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sRegularFitHoodieGreen-3-1740561503337-0Y7A4632.jpg" },
    { id: 7, name: "DEEDAT Men's Regular Fit Cutaway Collar Casual Shirt Forest Green", price: 25.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sRegularFitCutawayCollarCasualShirtForestGreen-0-1740552111341-0Y7A4543.jpg" },
    { id: 8, name: "HUF&DEE Women's Casual Dress", price: 17.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualDressBlushPink%E2%80%A2Small-1-1711827549338-Pink(2).jpg" },
    { id: 9, name: "DEEDAT Men's Jogger Short", price: 35.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sJoggerShortBeige%E2%80%A2Small-1-1723032013132-DSC02732.jpg" },
    { id: 10, name: "Men's Printed T-Shirt", price: 19.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sT-ShirtTealGreen%E2%80%A2Small-0-1717824185876-DSC06811.jpg" },
    { id: 11, name: "Women's Casual Dress", price: 15.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITWomen'sCasualDress-0-1716185549943-0Y7A8123.jpg" },
    { id: 12, name: "DEEDAT Men's Regular Fit Casual Trouser", price: 19.99, image: "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sCasualTrouserBeige%E2%80%A230-0-1723032495469-DSC02748.jpg" }
];

const Shopi = () => {
    return (
        <div className="shop-container">
            <h1>Shop Our Latest Collection</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shopi;