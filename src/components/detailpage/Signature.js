"use client";
import * as S from "./detailStyle";
import Image from "next/image";
import MenuDesc from "./MenuDesc";
import signature from "/public/assets/img/signature.png";

export default function Signature() {
  const content = `안녕하세요 메뉴설명이에요 안녕하세요 메뉴설명이에요 안녕하세요 메뉴설명이에요 메뉴설명이에요 메뉴설명이에요 `;

  return (
    <S.TabContainer>
      <S.DescBox>
        <MenuDesc />
      </S.DescBox>
      <S.MenuContainer>
        <S.SignatureTitle>
          <Image src={signature} alt="대표메뉴" priority />
        </S.SignatureTitle>
        <S.ItemContainer>
          <S.ItemWrap>
            <S.ItemTitle>벌거벗은초코1호</S.ItemTitle>
            <S.ItemDesc>{content}</S.ItemDesc>
            <span>12,000원</span>
          </S.ItemWrap>
          <S.ItemImage></S.ItemImage>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.ItemWrap>
            <S.ItemTitle>벌거벗은초코1호</S.ItemTitle>
            <S.ItemDesc>{content}</S.ItemDesc>
            <span>12,000원</span>
          </S.ItemWrap>
          <S.ItemImage></S.ItemImage>
        </S.ItemContainer>
      </S.MenuContainer>
    </S.TabContainer>
  );
}
