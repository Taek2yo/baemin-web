"use client";
import * as S from "./signUpStyle";
import back from "/public/assets/img/left.png";
import Link from "next/link";
import Image from "next/image";
export default function SignUp() {
  return (
    <S.Container>
      <S.Header>
        <Link href="/" as="/">
          <Image src={back} width={27} alt="back-btn" />
        </Link>
        <span className="header-title">회원가입</span>
        <S.submitBtn type="submit" form="form-signup">
          완료
        </S.submitBtn>
      </S.Header>
      <S.InputBox
        id="form-signup"
        method="POST"
        action="/api/auth/signup"
      >
        <label htmlFor="nick-name" className="label-text">닉네임</label>
        <S.Input
          name="name"
          type="text"
          placeholder="2-10자로 입력해주세요"
          maxLength={10}
          id="nick-name"
        />
        <label htmlFor="email-id" className="label-text">이메일 아이디</label>
        <S.Input
          name="email"
          type="text"
          placeholder="example@baemin.com"
          id="email-id"
        />
        <label htmlFor="password" className="label-text">비밀번호</label>
        <S.Input name="password" placeholder="10-20자로 입력해주세요" type="password" id="password"/>
      </S.InputBox>
    </S.Container>
  );
}
