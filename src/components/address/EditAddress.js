"use client";
import * as S from "./editAddressStyle";
import Image from "next/image";
import home from "/public/assets/img/addresshome.png";
import company from "/public/assets/img/company.png";
import EditAddressItem from "./EditAddressItem";

export default function EditAddress({ address }) {
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

      {address.map((item, i) => (
        <EditAddressItem key={i} item={item} />
      ))}
    </>
  );
}
