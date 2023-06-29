"use client";
import * as S from "./detailStyle";
import { useState } from "react";
import Image from "next/image";
import arrow from "/public/assets/img/down-arrow.png";

export default function Review() {
  const Excontent = `사장님 공지 예시 입니다.
  \n리뷰 이벤트 진행중 입니다.
  \n배달대행업체를 이용하기 때문에 비나 눈이 오늘 날에는 늦을 수 있는점 양해 바랍니다.
  \n단체 주문시 매장으로 연락주시면 감사하겠습니다.
  \n저희 가게를 사랑해주셔서 항상 감사합니다. 믿음에 보답하겠습니다.
  `;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const maxLength = 80;
  const subsText = Excontent.substring(0, maxLength);
  const remainingText = Excontent.substring(maxLength, Excontent.length);
  return (
    <S.TabContainer>
      <S.Introduction>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <S.InfoTitle>사장님 공지</S.InfoTitle>
          <S.Date>2023년 06월 20일</S.Date>
        </div>
        <div style={{ whiteSpace: "pre-line", marginTop:"20px" }}>
          {Excontent.length <= maxLength
            ? Excontent
            : expanded
            ? subsText + remainingText
            : subsText + "..."}
        </div>
        <div style={{ textAlign: "center", marginTop: "10px", whiteSpace: "pre-line", marginBottom:"10px" }}>
        {Excontent.length > maxLength && (
          <span
            onClick={() => {
              toggleExpanded();
            }}
            style={{ cursor: "pointer" }}
          >
            {expanded ? (
              <Image
                src={arrow}
                alt="down-arrow"
                width={20}
                height={20}
                className="up"
              />
            ) : (
              <Image src={arrow} alt="down-arrow" width={20} height={20} />
            )}
          </span>
        )}
        </div>
      </S.Introduction>
      <S.GraphContainer>
      별점 그래프 컨테이너
      </S.GraphContainer>          
    </S.TabContainer>
  );
}
