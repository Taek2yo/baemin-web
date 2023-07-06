"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
export default function SearchResult() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  // place holder text state
  const param = useParams();
  const placeHolderText = decodeURIComponent(param.terms);
  const [phText, setPhText] = useState(placeHolderText);
  const datalength = searchData.length;
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearClick = () => {
    setValue("");
    setPhText("");
  };
  // goBackBtn
  const goBack = () => {
    router.back();
  };

  // search
  const encodedValue = encodeURIComponent(value);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      router.push(`/search/${encodedValue}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/search/search?searchTerm=${placeHolderText}`
        );
        const result = await response.json();
        setSearchData(result);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Back
          onClick={() => {
            goBack();
          }}
        >
          <Image src={back} width={25} alt="back-btn" />
        </S.Back>
        <S.Searchsection onSubmit={handleSearch} name="search">
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder={`${phText}` + ` ${datalength}개`}
            value={value}
            onChange={handleInputChange}
          />

          <S.ClearButton
            onClick={() => {
              handleClearClick();
            }}
          >
            X
          </S.ClearButton>
        </S.Searchsection>
      </S.Header>
    </S.Container>
  );
}
