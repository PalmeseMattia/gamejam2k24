// PlayerSelectionScreen.js
import React, { useState } from 'react';
import backgroundImage from './assets/StartScreenBackground.jpeg';
import { useNavigate } from 'react-router-dom';

const PlayerSelectionScreen = () => {
  const [numPlayers, setNumPlayers] = useState(3);
  const navigate = useNavigate();

  const handlePlayerSelection = (selectedPlayers) => {
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
      <h2>Seleziona il Numero di Giocatori</h2>
      <button onClick={() => handlePlayerSelection(3)}>3 Giocatori</button>
      <button onClick={() => handlePlayerSelection(4)}>4 Giocatori</button>
      <button onClick={() => handlePlayerSelection(5)}>5 Giocatori</button>
      <button onClick={() => handlePlayerSelection(6)}>6 Giocatori</button>
    </div>
  );
};

export default PlayerSelectionScreen;