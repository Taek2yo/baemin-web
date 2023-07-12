"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";

export default function SearchResult() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [tab, setTab] = useState("all");

  // place holder text
  const param = useParams();
  const placeHolderText = decodeURIComponent(param.terms);
  const [phText, setPhText] = useState(placeHolderText);
  const datalength = searchData?.length;
  const arrow = ">";
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

  const handleTab = (type) => {
    setTab(type);
  };

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
            ✕
          </S.ClearButton>
        </S.Searchsection>
      </S.Header>
      <S.TabWrap>
        <S.Tab
          onClick={() => handleTab("all")}
          active={tab === "all"}
          tab={tab}
        >
          전체
        </S.Tab>
        <S.Tab
          onClick={() => handleTab("delivery")}
          active={tab === "delivery"}
          tab={tab}
        >
          배달 {datalength}
        </S.Tab>
        <S.Tab
          onClick={() => handleTab("packaging")}
          active={tab === "packaging"}
          tab={tab}
        >
          포장 0
        </S.Tab>
        <S.Tab
          onClick={() => handleTab("B-mart")}
          active={tab === "B-mart"}
          tab={tab}
        >
          B마트 0
        </S.Tab>
        <S.Tab
          onClick={() => handleTab("live")}
          active={tab === "live"}
          tab={tab}
        >
          쇼핑라이브
        </S.Tab>
      </S.TabWrap>
      <S.Delivery>
        <S.DeliveryTitle>배달</S.DeliveryTitle>
        {searchData.map((item, index)=>{
          return(     
            <SearchResultItem key={item._id} item={item} phText={phText}/>
          )
        })}
         <S.MoreBtnSection>
          <S.MoreBtn>
            <span className="search-terms">{phText} </span>
            <span>검색결과 더보기</span>
            <span className="arrow">{arrow}</span>
          </S.MoreBtn>
        </S.MoreBtnSection>
      </S.Delivery>
    </S.Container>
  );
}
