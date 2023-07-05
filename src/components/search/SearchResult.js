"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResult() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParam = useSearchParams();
  const searchData = JSON.parse(searchParam.get('result')) 
 /*  console.log(searchData) */
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearClick = () => {
    setValue("");
  };
  // goBackBtn
  const goBack = () => {
    router.back();
  };

  // search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      try {
        const encodedValue = encodeURIComponent(value).toString();
        const response = await fetch(`/api/search/search?searchTerm=${encodedValue}`);
        const result = await response.json();
        const res = JSON.stringify(result)
        router.push(`/search/${encodedValue}?result=${res}`)
      } catch (error) {
        console.error('API 요청 에러:', error);
      }
    }
  };

  const param = useParams();
  const placeHolderText = decodeURIComponent(param.terms) + ` ${searchData.length}개`;

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={() => {goBack();}}>
          <Image src={back} width={25} alt="back-btn" />
        </S.Back>
        <S.Searchsection onSubmit={handleSearch} name="search">
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder={placeHolderText}
            value={value}
            onChange={handleInputChange}
          />
          {placeHolderText && (
            <S.ClearButton
              onClick={() => {
                handleClearClick();
              }}
            >
              X
            </S.ClearButton>
          )}
        </S.Searchsection>
      </S.Header>
    </S.Container>
  );
}
