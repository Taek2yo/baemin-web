"use client";
import * as S from "./setAddressStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import location from "/public/assets/img/location.png";
import home from "/public/assets/img/addresshome.png";
import pin from "/public/assets/img/pin.png";
import { useState } from "react";
import { SearchAddress } from "./SearchAddress";

export default function SetAddress({ isOpen, handleModal }) {
  const arrow = ">";
  const [section, setSection] = useState("set");
  const handlSection = (sect) => {
    setSection(sect);
  };
  return (
    <S.Container className={isOpen ? "open" : ""}>
      <S.BottomSheetHeader>
        <S.DragBar>
          <S.Touch
            onClick={() => {
              handleModal();
            }}
          ></S.Touch>
        </S.DragBar>
        <S.HeaderWrap>
          {section === "set" ? (
            <S.EmptyDiv />
          ) : (
            <S.Back
              onClick={() => {
                handlSection("set");
              }}
            >
              <Image src={back} width={23} alt="back-btn" />
            </S.Back>
          )}

          <S.HeaderTitle>
            {section === "set" ? (
              <span>주소 설정</span>
            ) : section === "search" ? (
              <span>주소 검색</span>
            ) : (
              "안녕"
            )}
          </S.HeaderTitle>
          {section === "set" ? (
            <div className="edit">편집</div>
          ) : (
            <S.EmptyDiv />
          )}
        </S.HeaderWrap>
      </S.BottomSheetHeader>
      {section === "set" ? (
        <>
          <S.SearchSection>
            <S.SearchInput
              onClick={() => {
                handlSection("search");
              }}
            >
              <S.SearchIcon> 🔍︎</S.SearchIcon>
              <span className="placeholder">지번, 도로명, 건물명으로 검색</span>
            </S.SearchInput>
          </S.SearchSection>
          <S.CurrentLocation>
            <S.CurrentWrap>
              <Image src={location} width={28} alt="location" />
              <span className="set">현재 위치로 설정</span>
            </S.CurrentWrap>
            <span className="arrow">{arrow}</span>
          </S.CurrentLocation>
          <S.MyHome>
            <S.MyHomeAddress>
              <S.Icon>
                <Image src={home} alt="my-home" />
              </S.Icon>
              <S.AddressWrap>
                <S.AddHome>우리집 추가</S.AddHome>
                <span className="address-detail">우리집 주소</span>
              </S.AddressWrap>
              <S.CheckBox>
                <span>✔</span>
              </S.CheckBox>
            </S.MyHomeAddress>
          </S.MyHome>
          <S.AddressList>
            <S.Icon>
              <Image src={pin} alt="address-pin" />
            </S.Icon>
            <S.AddressWrap>
              <S.AddHome>address</S.AddHome>
              <span className="address-detail">address detail</span>
            </S.AddressWrap>
            <S.CheckBox>
              <span>✔</span>
            </S.CheckBox>
          </S.AddressList>
        </>
      ) : section === "search" ? (
        <SearchAddress section={section} handlSection={handlSection} />
      ) : null}
    </S.Container>
  );
}
