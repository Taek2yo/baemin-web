import * as S from "./headerStyle";
import Image from "next/image";
import alm from "/public/assets/img/alm.png";
import allservice from "/public/assets/img/allservice.png";
import my from "/public/assets/img/my.png";
import Link from "next/link";

export default function Header() {
  return (
    <S.Container>
      <S.Title> 배달의 민족 </S.Title>
      <S.AddressBtnWrap>
        <S.Address>주소시 주소로 ▼</S.Address>

        <S.BtnWrap>
          <Link href="/all">
            <Image
              src={allservice}
              alt="all service view icon"
              width={40}
              placeholder="blur"
            />
          </Link>

          <Link href="/">
            <Image 
              src={alm} 
              alt="alarm icon" 
              width={37} 
              placeholder="blur" />
          </Link>

          <Link href="/">
            <Image 
              src={my} 
              alt="mypage icon" 
              width={42} 
              placeholder="blur" />
          </Link>
        </S.BtnWrap>
      </S.AddressBtnWrap>

      <Link href="/search">
        <S.Searchsection>
          <S.SearchIcon> 🔍︎</S.SearchIcon>
          <S.Placeholder> 찾는 맛집 이름이 뭐예요?</S.Placeholder>
        </S.Searchsection>
      </Link>
    </S.Container>
  );
}
