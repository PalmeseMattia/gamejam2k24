// StartScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/StartScreenBackground.jpeg';

const StartScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    //ci permette di andare alla pagina di selezione personaggio
    navigate('/PlayerSelection');
  };

  const boxStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px', // Padding interno del box
    borderRadius: '10px', // Bordo arrotondato
    width: '100%', // Larghezza del box
    maxWidth: '400px', // Larghezza massima del box
    height: '100vh', // Altezza del box, imposta l'altezza a 100% della visualizzazione
    display: 'flex', // Abilita il layout flessibile
    flexDirection: 'column', // Imposta il layout in colonna
    justifyContent: 'center', // Allinea il contenuto al centro verticalmente
    alignItems: 'center', // Allinea il contenuto al centro orizzontalmente
    margin: '0 auto', // Centra il box orizzontalmente
    textAlign: 'center', // Allinea il testo al centro
  };

  return (
      <div style={boxStyle}>
        <h1 style={{ marginBottom: '20px' }}>Benvenuto</h1>
        <button onClick={handleButtonClick}>Inizia Partita</button>
      </div>
  );
};

export default StartScreen;