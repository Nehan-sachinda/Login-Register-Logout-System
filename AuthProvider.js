import React from "react";
import { AuthProvider } from "../Fashion-Haven/src/pages/AuthContext";
import App from "./App";

const Root = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
localStorage.setItem("user", JSON.stringify({ username: "JohnDoe" }));


export default Root;