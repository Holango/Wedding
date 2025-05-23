import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';

const Main = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    background: '#fffbe6',
  }}>
    💌 메인페이지
  </div>
);

const sections = [<Main />, <Intro />]; // 1페이지: 메인, 2페이지: Intro

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {sections.map((Component, index) => (
        <div
          key={index}
          style={{
            height: '100vh',
            transform: `translateY(-${currentSection * 100}vh)`,
            transition: 'transform 0.8s ease',
            position: 'absolute',
            top: `${index * 100}vh`,
            width: '100%',
          }}
        >
          {Component}
        </div>
      ))}
    </div>
  );
}

export default App;
