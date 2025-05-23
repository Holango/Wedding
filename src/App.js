import React, { useState, useEffect, useRef } from 'react';
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

const sections = [<Main />, <Intro />];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const touchStartY = useRef(null);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
    }
  };

  // 데스크톱 휠
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // 모바일 터치
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (diff > 50 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1); // swipe up
      } else if (diff < -50 && currentSection > 0) {
        scrollToSection(currentSection - 1); // swipe down
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
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
