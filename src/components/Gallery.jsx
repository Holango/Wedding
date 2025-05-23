import React, { useState } from 'react';

const images = [
  'https://i.ibb.co/93HJ7sYS/2025-05-19-074003.png',
  'https://via.placeholder.com/400x600?text=사진2',
  'https://via.placeholder.com/400x600?text=사진3',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex}`}
          style={styles.image}
          onContextMenu={(e) => e.preventDefault()}  // 우클릭 및 롱탭 메뉴 차단
          draggable={false} // 드래그 방지
        />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={goPrev} style={styles.button}>←</button>
        <button onClick={goNext} style={styles.button}>→</button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    userSelect: 'none',        // 텍스트 선택 차단
    WebkitUserSelect: 'none',  // 사파리용
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitUserDrag: 'none',    // 이미지 드래그 차단 (크롬, 사파리)
  },
  buttonContainer: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
  },
  button: {
    fontSize: '1.5rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
};

export default Gallery;
