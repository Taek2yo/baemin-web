"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useDraggable from "../../hooks/useDraggable";
import AD from "/public/assets/img/searchBanner.png";
import character from "/public/assets/img/popular.png";
import Ranking from "./Ranking";
import banner from "/public/assets/img/banner5.png";
import Personalized from "./Personalized";

export default function Search() {
  const [value, setValue] = useState("");
  const [recentWords, setRecentWords] = useState([]);
  const router = useRouter();
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

  // search event
  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem("words") || "[]");
    setRecentWords(storedWords);
  }, []);

  const saveRecentWords = (words) => {
    localStorage.setItem("words", JSON.stringify(words));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const encodedValue = encodeURIComponent(value);
      router.push(`/search/${encodedValue}`);
    }
    const updatedWords = [value, ...recentWords.filter((w) => w !== value)];
    setRecentWords(updatedWords);
    saveRecentWords(updatedWords);
  };

  const handleDeleteOne = (word) => {
    const updatedWords = recentWords.filter((w) => w !== word);
    setRecentWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  const handleDeleteAll = () => {
    setRecentWords([]);
    localStorage.removeItem("words");
  };

  // drag
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
  useDraggable();  
  // date
  const today = new Date();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const hours = ('0' + today.getHours()).slice(-2);
 
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
        <S.Searchsection onSubmit={handleSearch} name="search" type="text">
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <input
            type="search"
            placeholder="검색어를 입력해주세요"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <S.ClearButton
              onClick={() => {
                handleClearClick();
              }}
            >
              ✕
            </S.ClearButton>
          )}
        </S.Searchsection>
      </S.Header>
      {recentWords.length > 0 && (
        <>
          <S.RecentSearches>
            <S.Recent>최근 검색어</S.Recent>
            <S.DeleteBtn
              onClick={() => {
                handleDeleteAll();
              }}
            >
              전체삭제
            </S.DeleteBtn>
          </S.RecentSearches>
          <S.RSItemWrap
            onMouseDown={onDragStart}
            onMouseMove={onThrottleDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            ref={scrollRef}
          >
            {recentWords.map((words, index) => {
              return (
                <S.RSItem key={index}>
                  <span
                    className="word"
                    onClick={() => {
                      router.push(`/search/${words}`);
                    }}
                  >
                    {words}
                  </span>
                  <span
                    className="x-btn"
                    onClick={() => {
                      handleDeleteOne(words);
                    }}
                  >
                    ✕
                  </span>
                </S.RSItem>
              );
            })}
          </S.RSItemWrap>
        </>
      )}

      <S.Banner>
        <S.AD>
          <Image src={AD} alt="search-adv" />
        </S.AD>
      </S.Banner>
      <Personalized/>
      <S.MostSearchBox>
        <S.SRTextWrap>
          <S.Most>
            <span>가장 많이</span>
            <span>검색하고 있어요</span>
          </S.Most>
          <S.Date>{month}.{day} {hours}:00 기준</S.Date>
        </S.SRTextWrap>
        <S.Character>
          <Image src={character} alt="search-ranking character" width={90} />
        </S.Character>
      </S.MostSearchBox>
      <Ranking />
      <S.BottomAD>
        <Image src={banner} alt="bottom-adv" />
      </S.BottomAD>
    </S.Container>
  );
}
