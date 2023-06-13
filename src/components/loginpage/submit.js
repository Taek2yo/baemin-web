"use client";
import * as S from "./loginStyle";
import { signIn } from "next-auth/react";

export default function Submit() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn("credentials", { email, password });
  };

  return (
    <>
      <S.InputBox onSubmit={handleSubmit}>
        <S.Input
          type="text"
          name="email"
          placeholder="아이디 또는 이메일"
        ></S.Input>
        <S.Input
          type="password"
          name="password"
          placeholder="비밀번호"
        ></S.Input>
        <S.LoginBtn type="submit">로그인</S.LoginBtn>
      </S.InputBox>
    </>
  );
}
