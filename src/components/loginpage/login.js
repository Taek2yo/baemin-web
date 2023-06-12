import * as S from "./loginStyle";
import Link from "next/link";
import Image from "next/image";
import close from "/public/assets/img/close.png";
import naver from '/public/assets/img/naver.png'
export default function Login() {
  return (
    <S.Container>
      <Link href="/mypage" as="/mypage">
        <S.Cancle>
          <Image src={close} alt="close" width={18} priority={true} />
        </S.Cancle>
      </Link>
      <S.InputBox>
        <S.Input placeholder="아이디 또는 이메일"></S.Input>
        <S.Input placeholder="비밀번호" type="password"></S.Input>
        <S.LoginBtn>로그인</S.LoginBtn>
      </S.InputBox>
      <S.FindIdBox>
        <span className="find">아이디 찾기</span>
        <span className="bar">|</span>
        <span className="find">비밀번호 찾기</span>
      </S.FindIdBox>
      <S.SocialBox>
        <Image src={naver} alt="naver" width={13}/>
        <span>네이버로 로그인</span>
    </S.SocialBox>
      <S.SignUp>
        <span>혹시, 배달의민족이 처음이신가요?</span>
        <span className="btn">회원가입</span>
      </S.SignUp>
    </S.Container>
  );
}
