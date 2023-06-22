'use client'
import { useEffect } from "react";
import * as S from "./loginStyle";
import naver from "/public/assets/img/naver.png";
import { signIn, getProviders } from "next-auth/react";
import Image from "next/image";

export default async function SocialLogin() {
  return (
    <>
      <S.SocialBox  onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}>
        <Image src={naver} alt="naver" width={13} />
        <span>네이버로 로그인</span>
      </S.SocialBox>
    </>
  );
}
