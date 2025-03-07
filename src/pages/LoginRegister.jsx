import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/CSS/login.css";

const LoginRegister = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/login", formData);
            alert(res.data.message || "Login successful");
            localStorage.setItem("userToken", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/shopi");  // Navigate to shopi page
        } catch (error) {
            alert(error.response?.data?.error || "Login failed. Please try again.");
        }
    };

    const handleLogout = () => {
        const storedToken = localStorage.getItem("userToken");
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedToken || !storedUser) {
            alert("You are not logged in.");
            return;
        }

        if (formData.email !== storedUser.email || formData.password !== formData.password) {
            alert("Incorrect email or password. Please verify your credentials.");
            return;
        }

        localStorage.removeItem("userToken");
        localStorage.removeItem("user");
        alert("You have been logged out successfully.");
        navigate("/login");
    };

    const isLoggedIn = () => localStorage.getItem("userToken") !== null;

    return (
        <div className="auth-container-unique">
            <div className="auth-box-unique">
                {isLoggedIn() ? (
                    <>
                        <h2>Welcome back!</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group-unique">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email to logout"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group-unique">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password to logout"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button onClick={handleLogout} className="btn-unique">
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="input-group-unique">
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
                            <div className="input-group-unique">
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
                            <button type="submit" className="btn-unique">
                                Login
                            </button>
                            <p className="toggle-text-unique">
                                Don't have an account?{" "}
                                <span onClick={() => navigate("/register")}>
                                    Register
                                </span>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginRegister;
