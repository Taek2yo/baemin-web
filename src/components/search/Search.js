"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Search() {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearClick = () => {
    setValue("");
  };
  // session
  const { data: session } = useSession();
  let user = session?.user;
  // goBackBtn
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      try {
        const encodedValue = encodeURIComponent(value);
        const response = await fetch(`/api/search/search?searchTerm=${encodedValue}`);
        const result = await response.json();
        router.push(`/search/${encodedValue}`)
        setSearchData(result);
      } catch (error) {
        console.error('API 요청 에러:', error);
      }
    }
  };

  
  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={() => {goBack()}}>
          <Image src={back} width={25} alt="back-btn" />
        </S.Back>
        <S.Searchsection onSubmit={handleSearch} name="search">
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder="검색어를 입력해주세요"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <S.ClearButton
              onClick={() => {handleClearClick()}}
            >
              X
            </S.ClearButton>
          )}
        </S.Searchsection>
      </S.Header>
      <S.RecentSearches>
        <S.Title>최근 검색어</S.Title>
        <S.DeleteBtn>전체삭제</S.DeleteBtn>
      </S.RecentSearches>
    </S.Container>
  );
}
