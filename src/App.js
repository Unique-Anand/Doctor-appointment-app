


import React, { useState } from "react";
import Home from "./Home";
import DiseaseDetection from "./DiseaseDetection";
import MedicineSuggestions from "./MedicineSuggestions";
import PreventionTips from "./PreventionTips";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home setActiveComponent={setActiveComponent} />;
      case "DiseaseDetection":
        return <DiseaseDetection setActiveComponent={setActiveComponent} />;
      case "MedicineSuggestions":
        return <MedicineSuggestions />;
      case "PreventionTips":
        return <PreventionTips />;
      default:
        return <Home setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>SMART DOCTOR APPOINTEMENT </h1>
        <nav style={styles.navBar}>
          <button
            style={styles.navButton}
            onClick={() => setActiveComponent("Home")}
          >
            Home
          </button>
          <button
            style={styles.navButton}
            onClick={() => setActiveComponent("DiseaseDetection")}
          >
            DOCTOR APPOINTEMENT
          </button>
          <button
            style={styles.navButton}
            onClick={() => setActiveComponent("MedicineSuggestions")}
          >
            Medicine Suggestions
          </button>
          <button
            style={styles.navButton}
            onClick={() => setActiveComponent("PreventionTips")}
          >
            Prevention Tips
          </button>
        </nav>
      </header>
      <main style={styles.mainContent}>{renderComponent()}</main>
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    background: "linear-gradient(to bottom, #141414, #0e0e0e)", // Netflix-like background
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    color: "#fff", // Text color adjusted for dark background
  },
  header: {
    backgroundColor: "transparent", // Transparent background for header
    padding: "20px",
    marginBottom: "20px",
    position: "absolute", // Fixed positioning for header
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#e50914", // Netflix red color
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  navBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
  },
  navButton: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid#ffd9db", // Netflix red border
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s ease",
  },
  navButtonHover: {
    backgroundColor: "#e50914", // Red color on hover
    color: "white",
  },
  mainContent: {
    padding: "20px",
    marginTop: "80px", // To make space for the header
  },
};

export default App;
