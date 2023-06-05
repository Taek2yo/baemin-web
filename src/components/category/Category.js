"use client";

import * as S from "./categoryStyle";
import CategoryItem from "./categoryItem";
import React, { useRef, useState, useEffect } from "react";

export default function Category() {
  const ctg = [
    {
      id: 1,
      title: "재주문 많아요",
    },
    {
      id: 2,
      title: "배달팁 낮아요",
    },
    {
      id: 3,
      title: "쿠폰 받기💌",
    },
    {
      id: 4,
      title: "고객 추천 가게",
    },
    {
      id: 5,
      title: "비냉VS물냉",
    },
    {
      id: 6,
      title: "집밥🏠",
    },
    {
      id: 7,
      title: "찜 많은 가게",
    },
    {
      id: 8,
      title: "혼밥도 맛있게🙆‍♂",
    },
    {
      id: 9,
      title: "천생연분 단골가게",
    },
    {
      id: 10,
      title: "추천 더 보기👉",
    },
  ];
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
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

  return (
    <S.CategoryContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      {ctg.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </S.CategoryContainer>
  );
}
