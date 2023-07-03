"use client";

import * as S from "./detailStyle";
import Image from "next/image";
import url from "url";
import useDraggable from "@/hooks/useDraggable";
import React, { useRef ,useState, useEffect } from "react";

export default function Thumbnail({ thumbnail }) {
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  // 썸네일 관리
  const [currentThumbnail, setCurrentThumbnail] = useState(1);
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } = useDraggable();
  
  const autoScrollInterval = useRef(null);
  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(scrollToNextThumbnail, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const scrollToNextThumbnail = () => {
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const thumbnailWidth = container.children[0].offsetWidth;

    let nextScrollLeft = scrollLeft + clientWidth;
    if (nextScrollLeft + clientWidth > scrollWidth) {
      nextScrollLeft = 0;
    }

    container.scroll({
      left: nextScrollLeft,
      behavior: "smooth",
    });

    setCurrentThumbnail(Math.floor(nextScrollLeft / thumbnailWidth) + 1);
  };


  return (
    <>
      <S.Carousel
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {thumbnail?.map((item, index) => (
          <Image
            src={getImageUrl(item)}
            alt="thumbnail"
            width={400}
            height={100}
            key={index}
            priority
          />
        ))}
      </S.Carousel>

      <S.ThumbnailCounter>
        <span>
          {currentThumbnail} / {thumbnail.length}
        </span>
      </S.ThumbnailCounter>
    </>
  );
}
