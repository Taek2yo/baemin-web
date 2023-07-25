"use client";
import * as S from "./headerStyle";
import Image from "next/image";
import alm from "/public/assets/img/alm.png";
import allservice from "/public/assets/img/allservice.png";
import my from "/public/assets/img/my.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    if (status === "authenticated" && encodedEmail) {
      // 세션 데이터가 로딩된 이후에, 그리고 이메일이 존재하는 경우에만 fetchData 함수를 실행합니다.
      const fetchData = async () => {
        try {
          const response = await fetch(
            `/api/address/getAddress?email=${encodedEmail}`
          );
          const result = await response.json();
          setAddressData(result);
        } catch (error) {
          console.error("데이터 가져오기 에러:", error);
        }
      };
      fetchData();
    }
  }, [status, encodedEmail]);
  
  const selectedAddress = addressData[0]?.address[0]?.Addr
  const processedAddr = selectedAddress?.split(" ")?.splice(2)?.join(" ");
  console.log(processedAddr)
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
          {processedAddr}<p>▼</p>
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
