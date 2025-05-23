import React, { useState } from 'react';

const images = [
  'https://i.ibb.co/93HJ7sYS/2025-05-19-074003.png',
  'https://via.placeholder.com/400x600?text=사진2',
  'https://via.placeholder.com/400x600?text=사진3',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 터치 시작 시점의 X 좌표를 저장할 상태
  const [touchStartX, setTouchStartX] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // 터치 시작 시점 처리
  const handleTouchStart = (e) => {
    // e.touches는 현재 터치 중인 모든 손가락의 정보를 담고 있습니다.
    // 첫 번째 손가락(touches[0])의 clientX를 사용합니다.
    setTouchStartX(e.touches[0].clientX);
  };

  // 터치 종료 시점 처리 (스와이프 판단)
  const handleTouchEnd = (e) => {
    // e.changedTouches는 터치가 끝난 손가락의 정보를 담고 있습니다.
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX; // 양수면 왼쪽 스와이프, 음수면 오른쪽 스와이프

    const minSwipeDistance = 50; // 스와이프로 인식할 최소 거리 (픽셀)

    if (swipeDistance > minSwipeDistance) {
      // 왼쪽으로 스와이프 (다음 이미지)
      goNext();
    } else if (swipeDistance < -minSwipeDistance) {
      // 오른쪽으로 스와이프 (이전 이미지)
      goPrev();
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={styles.imageContainer}
        // 이미지 컨테이너에 터치 이벤트 리스너 추가
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex}`}
          style={styles.image}
          onContextMenu={(e) => e.preventDefault()} // 우클릭 및 롱탭 메뉴 차단
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
    overflow: 'hidden', // 스와이프 시 스크롤 방지
  },
  imageContainer: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
    cursor: 'grab', // 터치 가능한 영역임을 시각적으로 표시
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
    touchAction: 'none',       // 터치 스크롤 동작 방지 (매우 중요!)
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