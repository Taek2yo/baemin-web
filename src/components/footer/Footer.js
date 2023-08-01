import * as S from "./footerStyle";
import Link from "next/link";
import Image from "next/image";
import search from "/public/assets/img/search.png";
import zzim from "/public/assets/img/zzim2.png";
import orderhistory from "/public/assets/img/orderhistory.png";
import mybaemin from "/public/assets/img/mybaemin.png";
export default function Footer() {
  return (
    <S.Container>
      <Link href="/search">
        <S.MenuWrap>
          <Image src={search} alt="search-icon" />
          <span>검색</span>
        </S.MenuWrap>
      </Link>
      
      <S.MenuWrap>
        <Image src={zzim} alt="zzim-icon" />
        <span>찜</span>
      </S.MenuWrap>

      <Link href="/">
        <S.HomeBtn>
          <span>배민</span>
        </S.HomeBtn>
      </Link>

      <S.MenuWrap>
        <Image src={orderhistory} alt="orderhistory-icon" />
        <span>주문내역</span>
      </S.MenuWrap>

      <Link href="mypage">
        <S.MenuWrap>
          <Image src={mybaemin} alt="mybaemin-icon" />
          <span>my배민</span>
        </S.MenuWrap>
      </Link>
    </S.Container>
  );
}
