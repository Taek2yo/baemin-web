import { useState, useEffect, useRef } from 'react';

export default function useDraggable() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);
  const isOutsideContainerRef = useRef(false); // 새로운 useRef 추가

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
      isOutsideContainerRef.current = false; // 드래그 종료 시 컨테이너 영역 밖 상태 초기화
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        isOutsideContainerRef.current = true; // 컨테이너 영역을 벗어났을 때 상태 변경
      }
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("mouseup", handleMouseUp);
    containerElement.addEventListener("mouseleave", handleMouseLeave); // mouseleave 이벤트 추가

    return () => {
      containerElement.removeEventListener("mouseup", handleMouseUp);
      containerElement.removeEventListener("mouseleave", handleMouseLeave); // mouseleave 이벤트 제거
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const deltaX = startX - x;
    containerRef.current.scrollLeft += deltaX;
    setStartX(x);

    if (isOutsideContainerRef.current) {
      setIsDragging(false); // 컨테이너 밖으로 나갔을 때 드래그 중지
    }
  };

  return { containerRef, handleMouseDown, handleMouseMove };
}
