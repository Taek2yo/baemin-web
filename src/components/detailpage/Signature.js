"use client";
import * as S from "./detailStyle";
import Image from "next/image";
import MenuDesc from "./MenuDesc";
import signature from "/public/assets/img/signature.png";

export default function Signature({ menuInfo }) {
  console.log(menuInfo);
  return (
    <S.TabContainer>
      <S.DescBox>
        <MenuDesc />
      </S.DescBox>
      <S.MenuContainer>
        <S.SignatureTitle>
          <Image src={signature} alt="대표메뉴"/>
        </S.SignatureTitle>
        {menuInfo?.map((item, index) => {
          return (
            <S.ItemContainer key={index}>
              <S.ItemWrap>
                <S.ItemTitle>{item.name}</S.ItemTitle>
                <S.ItemDesc>{item.desc}</S.ItemDesc>
                <span>{item.price}</span>
              </S.ItemWrap>
              <S.ItemImage></S.ItemImage>
            </S.ItemContainer>
          );
        })}
      </S.MenuContainer>
    </S.TabContainer>
  );
}
