import * as S from "./profileStyle";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import edit from "/public/assets/img/editprofile.png";
export default function Profile() {
  const right = ">";
  return (
    <S.Container>
      <S.Header>
        <Link href="/mypage" as="/mypage">
          <Image src={back} width={27} alt="back-btn" />
        </Link>
        <span className="header-title">내 정보 수정</span>
      </S.Header>

      <Image src={edit} alt="edit" width={100} />

      <S.InfoBox>
        <S.Item>
          <span className="title">닉네임</span>
          <div>
            <span className="sub">반칸</span>
            <S.RightBtn>{right}</S.RightBtn>
          </div>
        </S.Item>
        <S.Item>
          <span className="title">이메일</span>
          <span className="sub">789rkd@naver.com</span>
        </S.Item>
        <S.Item style={{ borderBottom: "none" }}>
          <span className="title">휴대폰 번호 변경</span>
          <S.RightBtn>{right}</S.RightBtn>
        </S.Item>
      </S.InfoBox>
      <S.Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="title">로그인 기기 관리</span>
          <span className="disc">
            내 아이디로 로그인 된 기기를 관리할 수 있어요
          </span>
        </div>
        <S.RightBtn style={{ marginRight: "15px" }}>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="title">연결된 서비스 관리</span>
          <span className="disc">
            배민 아이디와 연결된 서비를 관리할 수 있어요
          </span>
        </div>
        <S.RightBtn style={{ marginRight: "15px" }}>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">연동된 소셜 계정</span>
      </S.Box>
      <S.AccountBox>
        <span className="out">로그아웃</span>
        <span className="bar">|</span>
        <span className="out">회원탈퇴</span>
      </S.AccountBox>
    </S.Container>
  );
}
