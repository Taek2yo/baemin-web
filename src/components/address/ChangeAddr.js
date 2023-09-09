"use client";
import * as S from "./chageAddrStyle";
import Image from "next/image";
import home from "/public/assets/img/addresshome.png";
import company from "/public/assets/img/company.png";
import pin from "/public/assets/img/pin.png";
import { useState } from "react";

export default function ChangeAddr({ selectedItem, setSection }) {
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

  const [updatedAddress, setUpdatedAddress] = useState({
    Addr: selectedItem.Addr,
    addrDetail: selectedItem.addrDetail,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAddress({
      ...updatedAddress,
      [name]: value,
    });
  };

  const editAddress = async () => {
    try {
      const response = await fetch("/api/address/changeAddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressId: selectedItem.addressId,
          updatedAddress: updatedAddress,
        }),
      });

      if (response.ok) {
        alert("주소가 수정되었습니다.");
        setTimeout(() => {
          window.location.reload();
        }, 500)
      } else {
        console.error("주소 수정 실패");
      }
    } catch (error) {
      console.error("주소 수정 중 오류 발생:", error);
    }
  };
  return (
    <S.Container>
      <S.AddrSection>
        <S.AddressWrap>
          <S.Address>{selectedItem.Addr}</S.Address>
          <S.Wrap>
            <S.RoadName>도로명</S.RoadName>
            <S.RoadAddr>
              {selectedItem.Addr + " " + selectedItem.addrDetail}
            </S.RoadAddr>
          </S.Wrap>
        </S.AddressWrap>
        <S.InputWrap>
          <S.DetailInput
            placeholder="예) 배민아파트 101동 101호"
            name="addrDetail"
            value={updatedAddress.addrDetail}
            onChange={handleInputChange}
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
            editAddress();
          }}
        >
          완료
        </S.Confirm>
      </S.BtnWrap>
    </S.Container>
  );
}
