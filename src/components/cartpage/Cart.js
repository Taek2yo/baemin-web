"use client";
import * as S from "./CartStyle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import together from "/public/assets/img/together2.png";
export default function Cart() {
  const router = useRouter();
  return (
    <S.Container>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              router.back();
            }}
          >
            <Image src={back} width={25} alt="back-btn" priority />
          </S.Back>
        </S.Wrap>
        <S.PageTitle>장바구니</S.PageTitle>
        <S.HeaderBtnWrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" priority />
          </Link>
            <Image
              src={together}
              width={34}
              alt="together-btn"
              priority
              style={{ marginLeft: "-10px" }}
            />     
        </S.HeaderBtnWrap>
      </S.Header>
      
    </S.Container>
  );
}
