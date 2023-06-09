"use client";
import * as S from "./detailStyle";
import { useState } from "react";
import Image from "next/image";
import arrow from "/public/assets/img/down-arrow.png";
export default function MenuDesc() {
  const Excontent = `저희 가게는 대표 메뉴와 함께 고객에게 특별한 경험을 제공하는 곳입니다.
  \n우리의 대표 메뉴는 풍부한 맛과 향을 자랑하는 요리들로 구성되어 있습니다.
  \n신선한 재료와 정교한 조리법을 통해 완벽한 조화를 이룬 요리들은 맛있는 한 끼를 보장합니다.
  \n또한, 우리의 가게는 아늑하고 분위기 있는 인테리어로 편안한 식사 분위기를 조성하고 있습니다.
  \n고객들은 우리의 가게에서 훌륭한 대표 메뉴를 즐기며, 특별한 시간을 보낼 수 있습니다.
  \n우리의 가게에서는 항상 최상의 서비스와 맛있는 음식을 제공하기 위해 최선을 다하고 있습니다.`;

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const maxLength = 80;
  const subsText = Excontent.substring(0, maxLength);
  const remainingText = Excontent.substring(maxLength, Excontent.length);

  return (
    <div>
      <div style={{ whiteSpace: "pre-line" }}>
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
    </div>
  );
}
