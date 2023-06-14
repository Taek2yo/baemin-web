"use client";
import * as S from "./loginStyle";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Submit() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      // 로그인 실패 시 처리
      window.alert('아이디/비밀번호를 확인해주세요.')
      console.log(result.error);
    } else {
      // 로그인 성공 시 처리
      
      router.push("/");
    }
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
