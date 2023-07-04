"use client";
import * as S from "./searchStyle"
import Image from "next/image";
import back from "/public/assets/img/left.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchResult(){
    const [value, setValue] = useState("");
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    const handleClearClick = () => {
        setValue("");
    };
    // goBackBtn
    const router = useRouter();
    const goBack = () => {
        router.back();
    };
    return(
        <S.Container>
        <S.Header>
          <S.Back onClick={() => {goBack()}}>
            <Image src={back} width={25} alt="back-btn" />
          </S.Back>
          <S.Searchsection>
            <S.SearchIcon> 🔍︎</S.SearchIcon>
            <input
              type="search"
              placeholder="검색어"
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
        </S.Container>
    )
}