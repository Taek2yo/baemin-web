"use client";
import * as S from "./setAddressStyle";
import Image from "next/image";
import pin from "/public/assets/img/pin.png";

export default function RegisteredAddress({ item }) {
  const selectAddress = async (addressId) => {
    try {
      const response = await fetch("/api/address/selectAddress", {
        method: "POST",
        body: JSON.stringify(addressId),
      });
      if (response.ok) {
        alert("주소가 변경되었습니다.");
        location.reload(); 
      } else {
        console.error("주소 선택 실패");
      }
    } catch (error) {
      console.error("주소 선택 실패:", error);
    }
  };
  return (
    <S.AddressList
      onClick={() => {
        selectAddress(item.addressId);
      }}
    >
      <S.Icon>
        <Image src={pin} alt="address-pin" />
      </S.Icon>
      <S.AddressWrap>
        <S.AddHome>{item.Addr}</S.AddHome>
        <span className="address-detail">
          {item.Addr} {item.addrDetail}
        </span>
      </S.AddressWrap>
      <S.CheckBox>{item.isSelected ? <span>✔</span> : null}</S.CheckBox>
    </S.AddressList>
  );
}
