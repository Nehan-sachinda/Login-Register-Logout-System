import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
    const [paymentMethod, setPaymentMethod] = useState(""); // State for payment method
    const [codFee, setCodFee] = useState(0); // Additional fee for COD

    // Calculate total cost with optional COD fee
    const calculateTotal = () => {
        const total = cartItems.reduce((total, item) => total + item.product.price, 0);
        return (total + codFee).toFixed(2);
    };

    // Handle change in payment method and COD fee
    const handlePaymentMethodChange = (e) => {
        const method = e.target.value;
        setPaymentMethod(method);
        setCodFee(method === "COD" ? 10 : 0);
    };

    // Remove item from cart
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems]; // Create a copy of the cartItems array
        updatedCart.splice(index, 1); // Remove the item at the specified index
        setCartItems(updatedCart); // Update the state with the new array
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.product.images[0]} alt={item.product.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.product.name}</h3>
                                <p>Size: {item.size}</p>
                                <p>${item.product.price}</p>
                                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="payment-method">
                <label htmlFor="payment-method">Select Payment Method:</label>
                <select
                    id="payment-method"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                >
                    <option value="">Select Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="COD">Cash on Delivery</option>
                </select>
            </div>

            {paymentMethod === "COD" && (
                <div className="cod-fee">
                    <p>Cash on Delivery Fee: $10.00</p>
                </div>
            )}

            <div className="cart-total">
                <h3>Total: ${calculateTotal()}</h3>
            </div>

            <div className="cart-actions">
                <Link to="/shopi" className="continue-shopping">Continue Shopping</Link>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;