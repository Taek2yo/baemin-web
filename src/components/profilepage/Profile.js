'use client'

import * as S from "./profileStyle";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import edit from "/public/assets/img/editprofile.png";
import LogoutOnclick from "./logoutOnclick";
import useImageUpload from "../../hooks/useImageUpload";

export default function Profile({session}) {
  const right = ">";
  let user = session
  const { src, handleImageUpload } = useImageUpload();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };
  console.log(user)
  return (
    <S.Container>
      <S.Header>
        <Link href="/mypage" as="/mypage">
          <Image src={back} width={27} alt="back-btn" />
        </Link>
        <span className="header-title">내 정보 수정</span>
      </S.Header>

      <Image src={edit} alt="edit" width={100} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {src && <img src={src} alt="Uploaded" />}
      
      <S.InfoBox>
        <S.Item>
          <span className="title">닉네임</span>
          <div>
            <span className="sub">{user?.name}</span>
            <S.RightBtn>{right}</S.RightBtn>
          </div>
        </S.Item>
        <S.Item>
          <span className="title">이메일</span>
          <span className="sub">{user?.email}</span>
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
        <LogoutOnclick/>
        <span className="bar">|</span>
        <span className="out">회원탈퇴</span>
      </S.AccountBox>
    </S.Container>
  );
}
