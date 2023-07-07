"use client";
import * as S from "./searchStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useDraggable from "../../hooks/useDraggable";
import AD from "/public/assets/img/searchBanner.png";
import question from "/public/assets/img/questionmark.png";
import PersonalItem from "./PersonalItem";
import character from "/public/assets/img/popular.png"
import Ranking from "./Ranking";
import banner from "/public/assets/img/banner5.png"
export default function Search() {
  const [value, setValue] = useState("");
  const [stores, setStores] = useState([]);

  const router = useRouter();
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
  const goBack = () => {
    router.back();
  };

  // search event
  const handleSearch = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const encodedValue = encodeURIComponent(value);
      router.push(`/search/${encodedValue}`);
    }
  };

  // 맞춤 맛집 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/store/data");
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, []);

  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();

  // recent search event
  const clickRecentWord = () =>{
    
  }
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
      <S.RecentSearches>
        <S.Recent>최근 검색어</S.Recent>
        <S.DeleteBtn>전체삭제</S.DeleteBtn>
      </S.RecentSearches>
      <S.RSItemWrap>
        <S.RSItem>
          <span className="word">검색어</span>
          <span className="x-btn">✕</span>
        </S.RSItem>
      </S.RSItemWrap>
      <S.Banner>
        <S.AD>
          <Image src={AD} alt="search-adv" />
        </S.AD>
      </S.Banner>
      <S.Personalized>
        <S.PTextWrap>
          <S.Ptitle>{user?.name}님을 위한 맞춤 맛집</S.Ptitle>
          <span className="title-ad">광고</span>
          <span className="question-mark">
            <Image src={question} alt="?" />
          </span>
        </S.PTextWrap>
        {stores && (
          <S.Wrap
            onMouseDown={onDragStart}
            onMouseMove={onThrottleDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            ref={scrollRef}
          >
            {stores.map((item) => {
              return <PersonalItem item={item} key={item._id} />;
            })}
          </S.Wrap>
        )}
      </S.Personalized>
      <S.MostSearchBox>
        <S.SRTextWrap>
        <S.Most>
          <span>가장 많이</span>
          <span>검색하고 있어요</span>
        </S.Most>
        <S.Date>07.07 15:00 기준</S.Date>
        </S.SRTextWrap>
        <S.Character>
          <Image src={character} alt="search-ranking character" width={90}/>
        </S.Character>
      </S.MostSearchBox>
      <Ranking/>
      <S.BottomAD>
        <Image src={banner} alt="bottom-adv"/>
      </S.BottomAD>
    </S.Container>
  );
}
