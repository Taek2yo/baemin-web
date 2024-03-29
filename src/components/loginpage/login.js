"use client"
import * as S from "./loginStyle";
import Link from "next/link";
import Image from "next/image";
import close from "/public/assets/img/close.png";
import Submit from "./submit";
import SocialLogin from "./SocialLogin";
import { useRouter } from 'next/navigation'
export default function Login(  ) {
  const router = useRouter();

  return (
    <S.Container>
        <S.Cancle onClick={()=>router.back()}>
          <Image src={close} alt="close" width={18} priority={true} />
        </S.Cancle>

      <Submit />
      <S.FindIdBox>
        <span className="find">아이디 찾기</span>
        <span className="bar">|</span>
        <span className="find">비밀번호 찾기</span>
      </S.FindIdBox>
      <SocialLogin/>
      <S.SignUp>
        <span>혹시, 배달의민족이 처음이신가요?</span>
        <Link href="/signUp" as="/signUp">
          <span className="btn">회원가입</span>
        </Link>
      </S.SignUp>
    </S.Container>
  );
}
