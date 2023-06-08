import { useState, useEffect, useRef } from 'react';

export default function useDraggable(){
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("mouseup", handleMouseUp);

    return () => {
      containerElement.removeEventListener("mouseup", handleMouseUp);
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
  };

  return { containerRef, handleMouseDown, handleMouseMove };
};