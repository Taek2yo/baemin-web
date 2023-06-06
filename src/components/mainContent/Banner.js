'use client'

import * as S from "./contentStyle";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export default function Banner({ banner }) {
  // 드래그 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // 현재 배너와 컨테이너 관리
  const [currentBanner, setCurrentBanner] = useState(1);
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
    autoScrollInterval.current = setInterval(scrollToNextBanner, 5000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const scrollToNextBanner = () => {
    const container = containerRef.current;
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

  const handleBannerChange = () => {
    const containerElement = containerRef.current;
    const scrollLeft = containerElement.scrollLeft;
    const bannerWidth = containerElement.children[0].offsetWidth;

    setCurrentBanner(Math.floor(scrollLeft / bannerWidth) + 1);
  };

  return (
    <>
      <S.BannerContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onScroll={handleBannerChange}
      >
        {banner.map((item) => (
          <S.Banner key={item.id}>
            <Image src={item.img} alt="banner-item" />
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
