"use client";
import * as S from "./setAddressStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import location from "/public/assets/img/location.png"

export default function SetAddress({ isOpen, handleModal }) {
  const arrow = ">"
 
  
  return (
    <S.Container className={isOpen ? 'open' : ''}>
      <S.BottomSheetHeader>
        <S.DragBar>
          <S.Touch onClick={()=>{handleModal();}} ></S.Touch>
        </S.DragBar>
        <S.HeaderWrap>
          <S.Back>
            <Image src={back} width={23} alt="back-btn" />
          </S.Back>
          <S.HeaderTitle>주소 설정</S.HeaderTitle>
          <span>편집</span>
        </S.HeaderWrap>
      </S.BottomSheetHeader>
      <S.SearchSection>
        <S.SearchInput>
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <span className="placeholder">지번, 도로명, 건물명으로 검색 ✔</span>
        </S.SearchInput>
      </S.SearchSection>
      <S.CurrentLocation>
        <S.CurrentWrap>
        <Image src={location} width={28} alt="location" />
        <span className="set">현재 위치로 설정</span>
        </S.CurrentWrap>
        <span className="arrow">{arrow}</span>
      </S.CurrentLocation>
      <S.BottomSheetContent>

      </S.BottomSheetContent>
    </S.Container>
  );
}
