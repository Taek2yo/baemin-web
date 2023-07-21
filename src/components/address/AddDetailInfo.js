"use client";
import * as S from "./addDetailInfoStyle";
import Image from "next/image";
import home from "/public/assets/img/home.png";
import company from "/public/assets/img/company.png";
import pin from "/public/assets/img/pin.png";
import { useState } from "react";
import { useSession } from "next-auth/react";
export default function AddDetailInfo({ addrDetailInfo }) {
  const { data: session } = useSession();
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
  const { roadAddr, roadAddrPart1 } = addrDetailInfo;
  const [detailAddress, setDetailAddress] = useState("");
  const handleAddAddress = async () => {
    const roadAddToAdd = roadAddr;
    try {
      await fetch("/api/address/addAddress", {
        method: "POST",
        body: JSON.stringify({
          Addr: roadAddToAdd,
          addrDetail: detailAddress,
          user: session.user.email,
        }),
      });
      alert("주소가 설정되었습니다.");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("전송 실패", error);
    }
  };
  return (
    <S.Container>
      <S.AddrSection>
        <S.AddressWrap>
          <S.Address>{roadAddrPart1}</S.Address>
          <S.Wrap>
            <S.RoadName>도로명</S.RoadName>
            <S.RoadAddr>{roadAddr}</S.RoadAddr>
          </S.Wrap>
        </S.AddressWrap>
        <S.InputWrap>
          <S.DetailInput
            placeholder="상세 주소 입력"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
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
        <S.Confirm
          onClick={() => {
            handleAddAddress();
          }}
        >
          완료
        </S.Confirm>
      </S.BtnWrap>
    </S.Container>
  );
}
