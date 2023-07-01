"use client";

import * as S from "./detailStyle";
import Image from "next/image";
import url from "url";
import useDraggable from "@/hooks/useDraggable";
import React, { useState, useEffect } from "react";

export default function Thumbnail({ thumbnail }) {
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  // 썸네일 관리
  const [currentThumbnail, setCurrentThumbnail] = useState(1);
  const [thumbnailWidth, setThumbnailWidth] = useState(400);
  const [totalThumbnails, setTotalThumbnails] = useState(0);
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } = useDraggable();
  
  useEffect(() => {
    if (scrollRef.current) {
      setThumbnailWidth(scrollRef.current.clientWidth);
      setTotalThumbnails(scrollRef.current.scrollWidth / thumbnailWidth);
    }
  }, [thumbnailWidth]);
  
  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const newThumbnailIndex = Math.floor(scrollLeft / thumbnailWidth) + 1;
    setCurrentThumbnail(newThumbnailIndex);
  };

  return (
    <>
      <S.Carousel
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onScroll={handleScroll}
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
