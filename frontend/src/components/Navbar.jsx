import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  // 🔍 Check if user is logged in when Navbar loads
  useEffect(() => {
    axios.get("http://localhost:4000/auth/status", { withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.error("Auth check failed:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔐 Handle User Registration
  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:4000/register", formData);
      alert("Registered Successfully!");
      setShowRegister(false);
    } catch (error) {
      alert("Registration failed");
    }
  };

  // 🔑 Handle User Login
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", { email: formData.email, password: formData.password }, { withCredentials: true });
      setUser(res.data.user); // ✅ Store user data
      alert("Login Successful!");
      setShowLogin(false);
    } catch (error) {
      alert("Login failed");
    }
  };

  // 🚪 Handle User Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
      setUser(null); // ✅ Clear user data
      alert("Logged Out Successfully!");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div style={styles.navbar}>
      <p style={styles.logo}>HOME FIT HEAVEN</p>
      <div>
        {user ? (
          <div style={styles.userSection}>
            <span style={styles.userText}>{user.email}</span>
            <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <button style={styles.button} onClick={() => setShowRegister(true)}>Get Started</button>
            <button style={styles.button} onClick={() => setShowLogin(true)}>Log In</button>
          </>
        )}
      </div>

      {/* Register Popup */}
      {showRegister && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Register</h2>
            <input type="text" name="fullName" placeholder="Full Name" style={styles.input} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" style={styles.input} onChange={handleChange} />
            <button style={styles.submitButton} onClick={handleRegister}>Register</button>
            <button style={styles.closeButton} onClick={() => setShowRegister(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLogin && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" style={styles.input} onChange={handleChange} />
            <button style={styles.submitButton} onClick={handleLogin}>Login</button>
            <button style={styles.closeButton} onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "black" },
  logo: { margin: 0, fontWeight: "bold", fontSize: "18px",color: "white" },
  button: { marginLeft: "10px", padding: "8px 16px", cursor: "pointer", border: "none", backgroundColor: "#007BFF", color: "#fff", borderRadius: "5px" },
  overlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
  popup: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", textAlign: "center", width: "300px", zIndex: 1001 },
  input: { width: "90%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ddd" },
  submitButton: { backgroundColor: "#28a745", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%" },
  closeButton: { marginTop: "10px", backgroundColor: "#dc3545", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%" },
  userSection: { display: "flex", alignItems: "center", gap: "10px" },
  userText: { fontWeight: "bold", color: "white" },
  logoutButton: { backgroundColor: "#ff4d4d", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default Navbar;
