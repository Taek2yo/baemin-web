"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import question from "/public/assets/img/questionmark.png";
import PersonalItem from "./PersonalItem";
import useDraggable from "../../hooks/useDraggable";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export default function Personalized() {
  const [stores, setStores] = useState([]);
  const { data: session } = useSession();
  let user = session?.user;
  // 맞춤 맛집 데이터 가져오기
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

  // drag
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();
  return (
    <S.Personalized>
      <S.PTextWrap>
        <S.Ptitle>{user?.name}님을 위한 맞춤 맛집</S.Ptitle>
        <span className="title-ad">광고</span>
        <span className="question-mark">
          <Image src={question} alt="?" />
        </span>
      </S.PTextWrap>
      {stores && (
        <S.Wrap
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {stores.map((item) => {
            return <PersonalItem item={item} key={item._id} />;
          })}
        </S.Wrap>
      )}
    </S.Personalized>
  );
}
