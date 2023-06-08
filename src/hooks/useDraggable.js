import { useRef, useState } from 'react';

const useDraggable = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  const throttle = (func, delay) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, delay);
      }
    };
  };

  const onThrottleDragMove = throttle(onDragMove, 10);

  return { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove };
};

export default useDraggable;
