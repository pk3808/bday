import React, { useState } from 'react';
import Modal from './Modal'; // assuming you have a Modal component defined in Modal.js
import fireworkGif from './assets/fireworks.gif'; // import the GIF file
import sparkles from './assets/sparkles.gif';
import move from './assets/move.gif';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Set initial state to open the modal

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container">
        {isModalOpen && (
          <img
            src={fireworkGif}
            alt="Firework"
            style={{
              position: 'fixed',
              top: '0',
              left: '20%',
              width: '10%',
              height: '20%',
              zIndex: '9999',
            }}
          />
          
        
        )}
            {isModalOpen && (
          <img
            src={fireworkGif}
            alt="Firework"
            style={{
              position: 'fixed',
              top: '0',
              left: '80%',
              width: '10%',
              height: '20%',
              zIndex: '9999',
            }}
          />
          
        
        )}
            {isModalOpen && (
          <img
            src={sparkles}
            alt="Firework"
            style={{
              position: 'fixed',
              bott: '10%',
              left: '80%',
              width: '10%',
              height: '20%',
              zIndex: '9999',
            }}
          />
          
        
        )}
          {isModalOpen && (
          <img
            src={sparkles}
            alt="Firework"
            style={{
              position: 'fixed',
              bottom: '10%',
              right: '80%',
              width: '10%',
              height: '20%',
              zIndex: '9999',
            }}
          />
          
        
        )}
          {isModalOpen && (
          <img
            src={move}
            alt="Firework"
            style={{
              position: 'fixed',
              bottom: '50%',
              right: '25%',
              width: '50%',
              height: '50%',
              zIndex: '1',
            }}
          />
          
        
        )}
        
      
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
