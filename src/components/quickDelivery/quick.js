"use client";

import * as S from "./quickStyle";
import Image from "next/image";
import quick from "/public/assets/img/quick.png";
import QuickItem from "./quickItem";
import food1 from "/public/assets/img/food1.png";
import food2 from "/public/assets/img/food2.png";
import food3 from "/public/assets/img/food3.png";
import food4 from "/public/assets/img/food4.png";
import food5 from "/public/assets/img/food5.png";
import food6 from "/public/assets/img/food6.png";
import question from "/public/assets/img/questionmark.png";
import useDraggable from "../../hooks/useDraggable";

export default function Quick() {
  const data = [
    {
      id: 1,
      img: food1,
      title: "베이크팡",
      stars: "5.0",
      time: "14~24분",
      tip: "2,400원~3,900원",
      onedelivery: true,
      new: true,
      coupone: false,
    },
    {
      id: 2,
      img: food2,
      title: "푸르니샌드 샐러드",
      stars: "5.0",
      time: "14~24분",
      tip: "5,500원",
      onedelivery: true,
      new: false,
      coupone: false,
    },
    {
      id: 3,
      img: food3,
      title: "숙성고기 육칠이 서울점",
      stars: "5.0",
      time: "13~23분",
      tip: "2,000원~3,000원",
      onedelivery: false,
      new: true,
      coupone: true,
    },
    {
      id: 4,
      img: food4,
      title: "참다랑어막주는집 참치정육점",
      stars: "5.0",
      time: "12~22분",
      tip: "3,000원~4,000원",
      onedelivery: true,
      new: true,
      coupone: true,
    },
    {
      id: 5,
      img: food5,
      title: "고향 생고기",
      stars: "5.0",
      time: "13~23분",
      tip: "500원~800원",
      onedelivery: true,
      new: false,
      coupone: false,
    },
    {
      id: 6,
      img: food6,
      title: "국가대표 태능갈비",
      stars: "5.0",
      time: "15~25분",
      tip: "5,000원",
      onedelivery: true,
      new: true,
      coupone: true,
    },
  ];
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } = useDraggable();
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
      {data && (
        <S.Wrap
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {data.map((item) => {
            return <QuickItem item={item} key={item.id} />;
          })}
        </S.Wrap>
      )}
    </S.Container>
  );
}
