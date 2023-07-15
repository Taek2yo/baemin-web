'use client'
import * as S from "./headerStyle";
import Image from "next/image";
import alm from "/public/assets/img/alm.png";
import allservice from "/public/assets/img/allservice.png";
import my from "/public/assets/img/my.png";
import Link from "next/link";
import React, { useState } from "react";
import SetAddress from "../address/SetAddress";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <S.Container>
      <S.Title>
        배달<span>의</span>민족
      </S.Title>
      <S.AddressBtnWrap>
        <S.Address onClick={() => {handleModal();}}>
        주소시 주소로 <p>▼</p>
        </S.Address>
        <S.BtnWrap>
          <Link href="/viewAll" as='/viewAll'>
            <Image src={allservice} alt="all service view icon" width={35} />
          </Link>

          <Link href="/alarm" as='/alarm'>
            <Image src={alm} alt="alarm icon" width={32} />
          </Link>

          <Link href="/mypage" as='/mypage'>
            <Image src={my} alt="mypage icon" width={38} />
          </Link>
        </S.BtnWrap>
      </S.AddressBtnWrap>
    </S.Container>
    <S.SearchBox>
    <Link href="/search" as='/search'>
        <S.Searchsection>
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <S.Placeholder> 찾는 맛집 이름이 뭐예요?</S.Placeholder>
        </S.Searchsection>
      </Link>
    </S.SearchBox>
    <SetAddress handleModal={handleModal} isOpen={isOpen}/>
    </>
    
  );
}
