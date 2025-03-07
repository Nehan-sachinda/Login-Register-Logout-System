import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/CSS/Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        cityCode: "",
        password: "",
        confirmPassword: "",
        cityCode: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3001/register", {
                name: formData.name,
                email: formData.email,
                address: formData.address,
                password: formData.password,
                cityCode: formData.cityCode
            });

            alert(res.data.message); // Show success message
            navigate("/login"); // Redirect to login page after successful registration
        } catch (error) {
            console.error("Registration Error:", error);
            alert(error.response?.data?.error || "Registration failed. Please try again."); // Show error message
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>City Code</label>
                        <input
                            type="text"
                            name="cityCode"
                            placeholder="Enter your city code"
                            value={formData.cityCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                
                    <div className="input-group">
                        <label>Re-enter Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit" className="btn">
                        Register
                    </button>
                    <p className="toggle-text">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            style={{ color: "black", cursor: "pointer" }}
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;