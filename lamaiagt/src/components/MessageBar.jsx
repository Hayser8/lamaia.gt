import { useState, useEffect } from 'react';

const MessageBar = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true); 
  const messages = ["Envíos a toda la capital!", "Prueba las nuevas galletas!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);  

      setTimeout(() => {
        setMessageIndex((current) => (current + 1) % messages.length);
        setTextVisible(true);  
      }, 500); 

    }, 5500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-16 inset-x-0 bg-blue-200 text-white px-4 py-2 text-center">
      <span className={`transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
        {messages[messageIndex]}
      </span>
    </div>
  );
};

export default MessageBar;