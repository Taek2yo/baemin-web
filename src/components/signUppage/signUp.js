"use client";
import * as S from "./signUpStyle";
import back from "/public/assets/img/left.png";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
export default function SignUp() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const isEmpty = !nickname || !email || !password;
    setIsFormValid(!isEmpty );
  }, [nickname, email, password]);

  const handleNicknameBlur = async () => {
    const response = await fetch('/api/auth/checkNickname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nickname }),
    });
    const data = await response.json();
    console.log(data.exists)
    setIsNicknameValid(!data.exists);
  };
  
  return (
    <S.Container>
      <S.Header>
        <Link href="/" as="/">
          <Image src={back} width={27} alt="back-btn" />
        </Link>
        <span className="header-title">회원가입</span>
        <S.submitBtn type="submit" form="form-signup" disabled={!isFormValid}>
          완료
        </S.submitBtn>
      </S.Header>
      <S.InputBox id="form-signup" method="POST" action="/api/auth/signup">
        <label htmlFor="nick-name" className="label-text">
          닉네임
        </label>
        <S.Input
          name="name"
          type="text"
          placeholder="2-10자로 입력해주세요"
          minLength={2}
          maxLength={10}
          id="nick-name"
          value={nickname}
          onChange={handleNicknameChange}
          onBlur={handleNicknameBlur}
        />
        {!isNicknameValid ? <span className="error-message">중복된 닉네임 입니다.</span> : <span className="error-message">사용가능한 닉네임 입니다.</span>}

        <label htmlFor="email-id" className="label-text">
          이메일 아이디
        </label>
        <S.Input
          name="email"
          type="text"
          placeholder="example@baemin.com"
          id="email-id"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password" className="label-text">
          비밀번호
        </label>
        <S.Input
          name="password"
          placeholder="10-20자로 입력해주세요"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </S.InputBox>
    </S.Container>
  );
}
