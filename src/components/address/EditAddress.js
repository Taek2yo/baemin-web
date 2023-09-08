"use client";
import * as S from "./editAddressStyle";
import Image from "next/image";
import home from "/public/assets/img/addresshome.png";
import company from "/public/assets/img/company.png";
import EditAddressItem from "./EditAddressItem";
import { useState } from "react";
export default function EditAddress({ address }) {
  const [addressList, setAddressList] = useState(address);

  const deleteAddress = async (addressId) => {
    try {
      await fetch("/api/address/deleteAddress", {
        method: "POST",
        body: JSON.stringify({
          addressId: addressId
        }),
      });
      const updatedAddress = addressList.filter((item) => item.addressId !== addressId);
      setAddressList(updatedAddress);
    } catch (error) {
      console.error("삭제 실패", error);
    }
  };

  return (
    <>
      <S.Home>
        <Image src={home} alt="home-icon" width={30} />
        <span>우리집 추가</span>
      </S.Home>
      <S.Company>
        <Image src={company} alt="company-icon" width={30} />
        <span>회사 추가</span>
      </S.Company>

      {addressList.map((item, i) => (
        <EditAddressItem key={item.addressId} item={item} onDelete={() => deleteAddress(item.addressId)}/>
      ))}
    </>
  );
}
