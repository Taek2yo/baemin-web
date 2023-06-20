"use client";

import * as S from "./profileStyle";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import edit from "/public/assets/img/editprofile.png";
import LogoutOnclick from "./logoutOnclick";
import useImageUpload from "../../hooks/useImageUpload";
import useImageDelete from "../../hooks/useImageDelete";
import { useSession } from "next-auth/react";

export default function Profile() {
  const right = ">";
  const { data: session, update: sessionUpdate } = useSession();
  let user = session?.user;
  const { src, handleImageUpload } = useImageUpload();
  const { deleteProfileImage } = useImageDelete();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
    sessionUpdate({
      info: file.name,
    });
  };

  const handleDeleteImage = () => {
    deleteProfileImage();
    sessionUpdate({
      info: "",
    });
  };
  const userProfileImage = user?.profileImage;
  const profileImageUrl = `https://baemin-taek.s3.amazonaws.com/${userProfileImage}`;

  return (
    <S.Container>
      <S.Header>
        <Link href="/mypage" as="/mypage">
          <Image src={back} width={27} alt="back-btn" />
        </Link>
        <span className="header-title">내 정보 수정</span>
      </S.Header>

      <S.HiddenLabel>
        {userProfileImage ? (
          <Image
            src={profileImageUrl}
            alt="profile-image"
            fill={true}
            sizes="130px"
            priority
          />
        ) : (
          <Image src={edit} alt="edit" fill={true} sizes="130px" priority />
        )}
        <input
          id="input-file"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </S.HiddenLabel>
      {userProfileImage && (
        <S.DeleteImage onClick={handleDeleteImage}>
          프로필 사진 삭제
        </S.DeleteImage>
      )}

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
        <LogoutOnclick />
        <span className="bar">|</span>
        <span className="out">회원탈퇴</span>
      </S.AccountBox>
    </S.Container>
  );
}
