'use client'

import * as S from "./searchAddressStyle";
import location from "/public/assets/img/location.png";
import Guide from "./Guide";
import Image from "next/image";
import { useState } from "react";
import AddressResults from "./AddressResults";

export function SearchAddress({ section, setSection }) {
  const arrow = ">";
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const getAddrLoc = async () => {
    if (!checkSearchedWord(keyword)) {
      return;
    }
    const encodedKeyword = encodeURIComponent(keyword);
    try {
      const response = await fetch(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=20&keyword=${encodedKeyword}&confmKey=devU01TX0FVVEgyMDIzMDcxNzIxMDYyNjExMzkzNzI=&resultType=json`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setSearchResults(data.results.juso);
    } catch (error) {
      console.error("Error is", error);
    }
  };

  const checkSearchedWord = (keyword) => {
    if (keyword.length > 0) {
      // 특수문자 제거
      const expText = /[%=><]/;
      if (expText.test(keyword)) {
        alert("특수문자를 입력할 수 없습니다.");
        setKeyword(keyword.replace(expText, ""));
        return false;
      }

      // 특정문자열(SQL 예약어의 앞뒤 공백 포함) 제거
      const sqlArray = [
        "OR",
        "SELECT",
        "INSERT",
        "DELETE",
        "UPDATE",
        "CREATE",
        "DROP",
        "EXEC",
        "UNION",
        "FETCH",
        "DECLARE",
        "TRUNCATE",
      ];

      sqlArray.forEach((sql) => {
        const regex = new RegExp(sql, "gi");
        if (regex.test(keyword)) {
          alert(`"${sql}"와(과) 같은 특정문자로 검색할 수 없습니다.`);
          setKeyword(keyword.replace(regex, ""));
          return false;
        }
      });
    }
    return true;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getAddrLoc();
    }
  };
  console.log(searchResults)
  return (
    <>
      <S.SearchSection>
        <S.SearchForm>
          <S.SearchIcon>🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder="지번, 도로명, 건물명으로 검색"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyPress}
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
      <S.ResultWrap>
      {searchResults.length > 0 ? (
        searchResults.map((item, index) => (
          <AddressResults item={item} key={index} setSection={setSection} section={section}/>
        ))
      ) : (
        <Guide />
      )}
      </S.ResultWrap>
    </>
  );
}
