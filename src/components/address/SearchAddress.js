"use client";
import * as S from './searchAddressStyle'
import Image from 'next/image';
import location from "/public/assets/img/location.png"

export function SearchAddress({section}) {
  const arrow = '>';
  return (
    <>
      <S.SearchSection>
        <S.SearchForm>
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder="지번, 도로명, 건물명으로 검색"
          />
        </S.SearchForm>
      </S.SearchSection>
      <S.CurrentLocation>
        <S.CurrentWrap>
          <Image src={location} width={28} alt="location" />
          <span className="set">현재 위치로 설정</span>
        </S.CurrentWrap>
        <span className="arrow">{arrow}</span>
      </S.CurrentLocation>
      <S.Guide>
        
      </S.Guide>  
    </>
  );
}
