"use client";
import * as S from "./deliveryStyle";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import useDraggable from "@/hooks/useDraggable";
import banner1 from "/public/assets/img/banner1.png";
import banner2 from "/public/assets/img/banner2.png";
import banner3 from "/public/assets/img/banner3.png";
import banner4 from "/public/assets/img/banner4.png";
import banner5 from "/public/assets/img/banner5.png";

export default function DeliveryPageBanner() {
  const bannerImage = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
  ];
  const [currentBanner, setCurrentBanner] = useState(1);
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();

  const autoScrollInterval = useRef(null);
  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(scrollToNextBanner, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const scrollToNextBanner = () => {
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const bannerWidth = container.children[0].offsetWidth;

    let nextScrollLeft = scrollLeft + clientWidth;
    if (nextScrollLeft + clientWidth > scrollWidth) {
      nextScrollLeft = 0;
    }

    container.scroll({
      left: nextScrollLeft,
      behavior: "smooth",
    });

    setCurrentBanner(Math.floor(nextScrollLeft / bannerWidth) + 1);
  };
  return (
    <>
      <S.Banner
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {bannerImage.map((item) => (
          <Image 
            src={item.image} 
            alt="thumbnail" 
            width={500}
            height={100}
            key={item.id}
            />
        ))}
      </S.Banner>
      <S.ThumbnailCounter>
        <span>
          {currentBanner} / {bannerImage.length}
        </span>
      </S.ThumbnailCounter>
    </>
  );
}
