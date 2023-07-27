"use client";
import * as S from "./headerStyle";
import Image from "next/image";
import alm from "/public/assets/img/alm.png";
import allservice from "/public/assets/img/allservice.png";
import my from "/public/assets/img/my.png";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import SetAddress from "../address/SetAddress";
import { useSession } from "next-auth/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const encodedEmail = encodeURIComponent(email || "");
  const [address, setAddress] = useState([]);
  useEffect(() => {
    if (status === "authenticated" && encodedEmail) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/address/getAddress?email=${encodedEmail}`);
          const result = await response.json();
          // isSelected가 true인 주소만 필터링합니다.
          const selectedAddresses = result[0].address.filter((item) => item.isSelected === true);
         
          setAddress(selectedAddresses);
        } catch (error) {
          console.error("데이터 가져오기 에러:", error);
        }
      };
      fetchData();
    }
  }, [status, encodedEmail]);

  const str = address[0]?.Addr
  const processedAddress = str?.split(" ").filter((v) => !v.includes("도") && !v.includes("특별")).join(" ")
  return (
    <>
      <S.Container>
        <S.Title>
          배달<span>의</span>민족
        </S.Title>
        <S.AddressBtnWrap>
          <S.Address
            onClick={() => {
              handleModal();
            }}
          >
          {processedAddress}<p>▼</p>
          </S.Address>
          <S.BtnWrap>
            <Image src={allservice} alt="all service view icon" width={35} />

            <Image src={alm} alt="alarm icon" width={32} />

            <Link href="/mypage" as="/mypage">
              <Image src={my} alt="mypage icon" width={38} />
            </Link>
          </S.BtnWrap>
        </S.AddressBtnWrap>
      </S.Container>
      <S.SearchBox>
        <Link href="/search" as="/search">
          <S.Searchsection>
            <S.SearchIcon> 🔍︎</S.SearchIcon>
            <S.Placeholder> 찾는 맛집 이름이 뭐예요?</S.Placeholder>
          </S.Searchsection>
        </Link>
      </S.SearchBox>
      <SetAddress handleModal={handleModal} isOpen={isOpen} />
    </>
  );
}
