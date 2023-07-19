"use client";
import * as S from "./addDetailInfoStyle";
import Image from "next/image";
import home from "/public/assets/img/home.png";
import company from "/public/assets/img/company.png";
import pin from "/public/assets/img/pin.png";
export default function AddDetailInfo() {
  const category = [
    {
      title: "우리집",
      image: home,
    },
    {
      title: "회사",
      image: company,
    },
    {
      title: "기타",
      image: pin,
    },
  ];
  return (
    <S.Container>
      <S.AddrSection>
        <S.AddressWrap>
          <S.Address>강원 원주시 남원로 443</S.Address>
          <S.Wrap>
            <S.RoadName>도로명</S.RoadName>
            <S.RoadAddr>강원 원주시 남원로 443</S.RoadAddr>
          </S.Wrap>
        </S.AddressWrap>
        <S.InputWrap>
          <S.DetailInput placeholder="상세 주소 입력" />
        </S.InputWrap>
        <S.CategoryWrap>
          {category.map((item, index) => {
            return (
              <S.Category key={index}>
                <Image src={item.image} alt="category-icon" width={30} />
                <span>{item.title}</span>
              </S.Category>
            );
          })}
        </S.CategoryWrap>
      </S.AddrSection>
      <S.BtnWrap>
        <S.Confirm>완료</S.Confirm>
      </S.BtnWrap>
    </S.Container>
  );
}
