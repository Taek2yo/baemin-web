"use client";

import * as S from "./contentStyle";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function Banner({ banner }) {
  // 현재 배너와 컨테이너 관리
  const [currentBanner, setCurrentBanner] = useState(1);
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();

  // 자동 스크롤
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
    // 마지막 배너라면 처음으로 이동
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
      <S.BannerContainer
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {banner.map((item, idx) => (
          <S.Banner key={item.id}>
            <Image
              src={item.img}
              alt="banner-item"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </S.Banner>
        ))}
      </S.BannerContainer>
      <S.BannerCounter>
        <span>
          {currentBanner} / {banner.length} 모두보기
        </span>
      </S.BannerCounter>
    </>
  );
}
