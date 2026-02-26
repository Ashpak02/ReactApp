import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const styles = {
    app: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: theme === "light" ? "#f5f5f5" : "#121212",
      color: theme === "light" ? "#121212" : "#f5f5f5",
      transition: "all 0.5s ease",
      padding: "20px",
    },
    card: {
      background: theme === "light" ? "#ffffff" : "#1e1e1e",
      borderRadius: "15px",
      padding: "40px",
      boxShadow:
        theme === "light"
          ? "0 10px 30px rgba(0,0,0,0.1)"
          : "0 10px 30px rgba(0,0,0,0.5)",
      transition: "all 0.5s ease",
      maxWidth: "500px",
      width: "100%",
    },
    button: {
      background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
      border: "none",
      borderRadius: "50px",
      padding: "12px 30px",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      marginTop: "20px",
    },
    buttonHover: {
      transform: "scale(1.1)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginBottom: "20px",
      color: theme === "light" ? "#555" : "#ccc",
    },
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        <h1 style={styles.title}>✨ Welcome to React Magic ✨</h1>
        <p style={styles.subtitle}>
          A stunning inline-styled React app with dark/light theme toggle
        </p>
        <button
          style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;