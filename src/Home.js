



import React, { useEffect, useState } from "react";
import medicalImage1 from './assets/amm1.png'; // Medical Image 1
import medicalImage2 from './assets/amm2.png'; // Medical Image 2
import medicalImage3 from './assets/amm3.png'; // Medical Image 3
import medicalImage4 from './assets/amm4.png'; // Medical Image 4
import medicineImage1 from './assets/amm9.png'; // Medicine Image 1
import medicineImage2 from './assets/amm.png'; // Medicine Image 2
import medicineImage3 from './assets/amm8.png'; // Medicine Image 3
import medicineImage4 from './assets/amm10.png'; // Medicine Image 4

const Home = ({ setActiveComponent }) => {
  const [currentImage, setCurrentImage] = useState(medicalImage1);

  // Array of background images
  const images = [
    medicalImage1,
    medicalImage2,
    medicalImage3,
    medicalImage4,
    medicineImage1,
    medicineImage2,
    medicineImage3,
    medicineImage4,
  ];

  // Function to change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${currentImage})` }}>
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoStyle}>"Healthcare at your fingertips—book with ease"</h1>
        </div>
        <p style={subtitleStyle}>Your trusted platform for all about your health insights.</p>
      </header>
      <main style={mainContentStyle}>
        <h2 style={mainTitleStyle}>Choose Your Action</h2>
        <div style={buttonContainerStyle}> 
          <button
            style={buttonStyle}
            onClick={() => setActiveComponent("DiseaseDetection")}
          >
            DOCTOR APPOINTEMENT
          </button>
          <button
            style={buttonStyle}
            onClick={() => setActiveComponent("MedicineSuggestions")}
          >
            Medicine Suggestions
          </button>
          <button
            style={buttonStyle}
            onClick={() => setActiveComponent("PreventionTips")}
          >
            Prevention Tips
          </button>
        </div>
      </main>
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Skin Health Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styling
const containerStyle = {
  background: "linear-gradient(to bottom, #111, #444)",
  color: "#fff",
  fontFamily: "'Roboto', sans-serif",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "40px",
  paddingTop: "40px",
};

const logoContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
};

const logoStyle = {
  fontSize: "3rem",
  color: "#f7b731",
  fontWeight: "bold",
};

const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#ddd",
};

const mainContentStyle = {
  textAlign: "center",
  marginTop: "40px",
};

const mainTitleStyle = {
  fontSize: "2rem",
  marginBottom: "30px",
  fontWeight: "600",
  color: "#f7b731",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
};

const buttonStyle = {
  padding: "16px 40px",
  fontSize: "18px",
  fontWeight: "600",
  backgroundColor: "#f7b731",
  color: "#111",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s all ease-in-out",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  textTransform: "uppercase",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "40px",
  fontSize: "14px",
  color: "#ddd",
};

export default Home;
