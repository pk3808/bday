import React, { useState } from "react";
import box from "./assets/box.gif";
import bear from "./assets/bear.gif";
function Modal({ isOpen, onClose }) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFC0CB",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: "1000",
  };

  const overlayStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1000",
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Close
          </button>
        </div>
        <div>
          <div style={{ textAlign: "center", width: "200px", margin: "auto", }}> <img  style={{ width: "150px", height: "200px" }} src={bear}/></div>
          <h2 style={{ textAlign: "center" }}>🎉 Happy Birthday, Mistu! 🎉</h2>
          <p style={{ textAlign: "center" }}>
            Today is a celebration of you, of all the love and light you bring
            into the world.
          </p>
       
          <p style={{ textAlign: "center" }}>
            May your birthday be as beautiful and radiant as you are,
          </p>
          <p style={{ textAlign: "center" }}> filled
            with moments that warm your heart and memories you'll cherish
            forever.</p>
          <p style={{ textAlign: "center" }}>
            Here's to many more years of laughter, love, and dreams fulfilled.
           
          </p>
          <p style={{ textAlign: "center" }}> again  Happy birthday, dear Mistu!</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          fontSize: "1rem",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#1f263b",
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "100px", height: "100px background-color:black" }}
          src={box}
        />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
