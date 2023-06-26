"use client";

import * as S from "./quickStyle";
import Image from "next/image";
import quick from "/public/assets/img/quick.png";
import QuickItem from "./quickItem";
import question from "/public/assets/img/questionmark.png";
import useDraggable from "../../hooks/useDraggable";
import { useEffect, useState } from "react";


export default function Quick() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/store/data");
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, []);

  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();
  return (
    <S.Container>
      <S.Title>
        <div className="title">우리 동네 빠른 배달</div>
        <Image src={quick} alt="quick" width={30} />
        <span className="title-ad">광고</span>
        <span className="question-mark">
          <Image src={question} alt="?" />
        </span>
      </S.Title>
      {stores && (
        <S.Wrap
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {stores.map((item) => {
            return <QuickItem item={item} key={item._id} />;
          })}
        </S.Wrap>
      )}
    </S.Container>
  );
}
