import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/CSS/ProductDetail.css";

// Sample products data
const products = [
    

    {
        id: 1,
        name:  "DEEDAT Men's Polo Neck Regular Fit T-Shirt Black",
        price: 25,
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sPoloNeckRegularFitT-ShirtBlack-3-1740627949602-0Y7A4535.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sPoloNeckRegularFitT-ShirtPink-0-1740627537228-0Y7A4506.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sPoloNeckRegularFitT-ShirtNavy-0-1740626475955-0Y7A4502.jpg",
        ],
        description: "Comfortable cotton T-shirt.",
        colors: ["Red", "Blue", "Green", "Black"]
    },
    { 
        id: 2, 
        name: "DEEDAT Men's Standard Hem Slim Fit Jeans Dark Blue",
        price: 45, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sStandardHemSlimFitJeansGrey-0-1739513058822-jeans(23).jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sStandardHemSlimFitJeansGrey-2-1739513043464-jeans(24)-Copy.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sStandardHemSlimFitJeansGrey-3-1739513043615-jeans(25).jpg"
        ], 
        description: "Stylish and durable denim jeans.",
        colors: ["Blue", "Black", "Grey"]
    },
    { 
        id: 3, 
        name: "HUF & DEE GRAFFITI STREET Women's Shirt Collar Screen Print Jacket Blue",
        price: 80, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEGRAFFITISTREETWomen'sShirtCollarScreenPrintJacketBlue-2-1740729988876-denimjacket(2).jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEGRAFFITISTREETWomen'sShirtCollarScreenPrintJacketBlue-1-1740729988886-denimjacket(1).jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEGRAFFITISTREETWomen'sShirtCollarScreenPrintJacketBlue-3-1740729988983-denimjacket(3).jpg"
        ], 
        description: "Classic leather jacket for a bold look.",
        colors: ["Black", "Brown"]
    },
    { 
        id: 4, 
        name: "HUF & DEE Women's Casual Shoes",
        price: 50, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualShoesBlack%E2%80%A236-2-1719908644107-0Y7A3069.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualShoesBlack%E2%80%A236-1-1719908644214-0Y7A3068.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualShoesBlack%E2%80%A236-0-1719908656178-0Y7A3067.jpg"
        ], 
        description: "Lightweight and stylish sneakers.",
        colors: ["White", "Black", "Grey"]
    },
    { 
        id: 5, 
        name: "MBRK Men's Regular Fit Printed Casual Shirt White",
        price: 60, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sRegularFitCutawayCollarCasualShirtForestGreen-0-1740552111341-0Y7A4543.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/MBRKMen'sRegularFitPrintedCasualShirtWhite-1-1740560212290-0Y7A4581.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/MBRKMen'sRegularFitPrintedCasualShirtWhite-0-1740560212191-0Y7A4580.jpg"
        ], 
        description: "Flowy and breathable summer dress.",
        colors: ["Red", "Blue", "Yellow"]
    },
    { 
        id: 6, 
        name: " Men's Regular Fit Hoodie Green",
        price: 40, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sRegularFitHoodieGreen-3-1740561503337-0Y7A4632.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sRegularFitHoodieGreen-1-1740561503338-0Y7A4630.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sRegularFitHoodieGreen-2-1740561503338-0Y7A4631.jpg"
        ], 
        description: "Cozy and warm hoodie for everyday wear.",
        colors: ["Grey", "Black", "Navy"]
    },
    { 
        id: 7, 
        name: "DEEDAT Men's Regular Fit Cutaway Collar Casual Shirt Forest Green",
        price: 15, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sRegularFitCutawayCollarCasualShirtForestGreen-0-1740552111341-0Y7A4543.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sRegularFitCutawayCollarCasualShirtForestGreen-2-1740552111418-0Y7A4541.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sRegularFitCutawayCollarCasualShirtForestGreen-3-1740552111510-0Y7A4542.jpg"
        ], 
        description: "Stylish cap to complete your look.",
        colors: ["Red", "Blue", "Black"]
    },
    { 
        id: 8, 
        name: "HUF&DEE Women's Casual Dress",
        price: 55, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualDressBlushPink%E2%80%A2Small-1-1711827549338-Pink(2).jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/HUF&DEEWomen'sCasualDressBlushPink%E2%80%A2Small-0-1711827549305-Pink(1).jpg"
        ], 
        description: "Warm and comfortable wool sweater.",
        colors: ["Brown", "Grey", "Navy"]
    },
    { 
        id: 9, 
        name: "DEEDAT Men's Jogger Short",
        price: 90, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sJoggerShortBeige%E2%80%A2Small-1-1723032013132-DSC02732.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sJoggerShortBeige%E2%80%A2Small-2-1723032013144-DSC02733.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sJoggerShortBeige%E2%80%A2Small-0-1723032012992-DSC02731.jpg"
        ], 
        description: "Elegant blazer for formal occasions.",
        colors: ["Black", "Navy", "Grey"]
    },
    { 
        id: 10, 
        name: "Men's Printed T-Shirt",
        price: 50, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sT-ShirtTealGreen%E2%80%A2Small-0-1717824185876-DSC06811.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sT-ShirtTealGreen%E2%80%A2Small-1-1717824186630-DSC06813.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITMen'sT-ShirtTealGreen%E2%80%A2Small-2-1717824187266-DSC06814.jpg"
        ], 
        description: "Stylish and comfortable chinos.",
        colors: ["Khaki", "Black", "Navy"]
    },
    { 
        id: 11, 
        name: "Women's Casual Dress",
        price: 35, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITWomen'sCasualDress-0-1716185549943-0Y7A8123.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMIT%20Women's%20Casual%20Dress%20Assorted%20%E2%80%A2%20Medium-1717762510043.jpeg"
        ], 
        description: "Flexible and breathable sports tights.",
        colors: ["Black", "Grey", "Blue"]
    },
    { 
        id: 12, 
        name: "DEEDAT Men's Regular Fit Casual Trouser",
        price: 20, 
        images: [
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sCasualTrouserBeige%E2%80%A230-0-1723032495469-DSC02748.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sCasualTrouserBeige%E2%80%A230-2-1723032496576-DSC02751.jpg",
            "https://cdn.greencloudpos.com/nolimit.lk/product/DEEDATMen'sCasualTrouserBeige%E2%80%A230-1-1723032496610-DSC02749.jpg"
        ], 
        description: "DEEDAT Men's Regular Fit Casual Trouser",
        colors: ["Black", "Grey", "Blue"]
    },
    // Add more products here...
];

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) {
        return <h2 className="not-found">Product not found</h2>;
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select both size and color before adding to the cart.");
            return;
        }
        if (selectedQuantity < 1) {
            alert("Quantity must be at least 1.");
            return;
        }
        addToCart(product, selectedSize, selectedColor, selectedQuantity);
        alert(`Added ${selectedQuantity} ${product.name}(s) (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div className="product-detail-container">
            <div className="product-images">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="product-image"
                />
                <div className="carousel-controls">
                    <button onClick={handlePrevImage} className="carousel-button">
                        &lt;
                    </button>
                    <button onClick={handleNextImage} className="carousel-button">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>${product.price}</h3>

                <label htmlFor="size">Select Size:</label>
                <select
                    id="size"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <option value="">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>

                <label htmlFor="color">Select Color:</label>
                <select
                    id="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    <option value="">Select Color</option>
                    {product.colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max="10"
                />

                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;