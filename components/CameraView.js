import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CameraComponent = ({ result }) => {
  const videoRef = useRef(null);
  const location = useLocation();
  const numPlayers = location.state?.numPlayers || 3;
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturing, setCapturing] = useState(true);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      const tracks = videoRef.current?.srcObject?.getTracks();
      if (tracks) {
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const cameraStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    height: '100vh',
    margin: '0 auto',
    textAlign: 'center',
  };
  

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(dataUrl);
    setCapturing(false);
  };

  const handleRetake = () => {
    startCamera();
    setCapturing(true);
    setCapturedImage(null);
  };

  const handleSave = () => {
    result(capturedImage);
    // Puoi anche navigare a una nuova pagina o fare altre operazioni necessarie dopo il salvataggio
  };

  return (
    <div style={cameraStyle}>
      <h2>Camera View</h2>
      {capturing ? (
        <>
          <video ref={videoRef} width="400" height="300" autoPlay playsInline />
          <button onClick={handleCapture}>Scatta!!</button>
        </>
      ) : (
        <>
          <img src={capturedImage} alt="Captured" />
          <button onClick={handleRetake}>Ritenta</button>
          <button onClick={handleSave}>Salva</button>
        </>
      )}
    </div>
  );
};

export default CameraComponent;
