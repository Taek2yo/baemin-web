import * as S from "./myPageStyle";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import thanks from "/public/assets/img/thanks.png";
import pofile from "/public/assets/img/profile.png";
import point from "/public/assets/img/point.webp";
import coupone from "/public/assets/img/coupone.webp";
import gift from "/public/assets/img/gift.webp";
import zzim from "/public/assets/img/zzim.webp";
import orderhistory from "/public/assets/img/orderhistory.webp";
import review from "/public/assets/img/review.webp";
import banner from "/public/assets/img/banner3.png";
import cartoon from "/public/assets/img/cartoon.png";
import baemingreen from "/public/assets/img/baemingreen.png";
import baeminpay from "/public/assets/img/baeminpay.png";
import LoginOnclick from "./loginOnclick";

export default function MyPage({ session }) {
  const right = ">";
  console.log(session);
  return (
    <S.Container>
      <S.Header>
        <Link href="/" as="/">
          <Image src={back} width={25} alt="back-btn" />
        </Link>
        <span className="header-title">My배민</span>
        <Link href="/" as="/">
          <Image src={home} width={25} alt="home-btn" />
        </Link>
      </S.Header>

      {/* profile */}

      {session ? (
        <S.Box height={"80"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={pofile}
              width={72}
              alt="profile"
              style={{ borderRadius: "100%" }}
            />
            <S.Accounts>
              <span className="grade">고마운분,</span>
              <span className="name"> 반칸</span>
            </S.Accounts>
          </div>
          <S.RightBtn>{right}</S.RightBtn>
        </S.Box>
      ) : (
        <Link href="/login" as="/login">
          <S.Box height={"80"}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={pofile}
                width={72}
                alt="profile"
                style={{ borderRadius: "100%" }}
              />
              <S.Accounts>
                <LoginOnclick />
              </S.Accounts>
            </div>
            <S.RightBtn>{right}</S.RightBtn>
          </S.Box>
        </Link>
      )}

      <S.Box>
        <Image src={thanks} width={240} alt="grade" />
        <S.Benefit>
          <span className="benefit">등급별 혜택</span>
        </S.Benefit>
      </S.Box>
      <S.InfoBox>
        <S.Item>
          <Image src={point} alt="info-img" width={32} />
          <span>포인트</span>
        </S.Item>
        <S.Item>
          <Image src={coupone} alt="info-img" width={40} />
          <span>쿠폰함</span>
        </S.Item>
        <S.Item>
          <Image src={gift} alt="info-img" width={32} />
          <span>선물함</span>
        </S.Item>
        <S.Item>
          <Image src={zzim} alt="info-img" width={32} />
          <span>찜</span>
        </S.Item>
        <S.Item>
          <Image src={orderhistory} alt="info-img" width={32} />
          <span>주문내역</span>
        </S.Item>
        <S.Item>
          <Image src={review} alt="info-img" width={40} />
          <span>리뷰관리</span>
        </S.Item>
      </S.InfoBox>
      <S.AddContainer>
        <Image src={banner} alt="add-banner" />
      </S.AddContainer>
      <S.CartoonBox>
        <S.TextWrap>
          <Image src={cartoon} width={100} alt="cartoon" />
          <span>앗, 숨겨진 만화책방을 발견하셨군요!</span>
        </S.TextWrap>
        <Link href="https://www.manhwakyung.com/" target="_blank">
          <S.CartoonBtnWrap>
            <span>만화 보러가기</span>
            <S.RightBtn style={{ color: "black" }}>{right}</S.RightBtn>
          </S.CartoonBtnWrap>
        </Link>
      </S.CartoonBox>
      <S.Box height={"60"}>
        <S.TextWrap>
          <Image src={baemingreen} width={100} alt="baemingreem" />
          <span>일회용 수저포크 덜 받기 함께해요</span>
        </S.TextWrap>

        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box height={"60"}>
        <S.TextWrap>
          <Image src={baeminpay} width={170} alt="baeminpay" />
          <div style={{ display: "flex" }}>
            <span className="text">배민페이로 &nbsp;</span>
            <span className="emphasize">빠르고 간편하게</span>
            <span className="text"> &nbsp;결제해보세요!</span>
          </div>
        </S.TextWrap>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box height={"50"}>
        <S.TextWrap>
          <span className="title">가족 계정관리</span>
          <span className="content">
            결제수단을 공유해 우리 가족의 끼니를 챙겨주세요
          </span>
        </S.TextWrap>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box height={"50"}>
        <S.TextWrap>
          <S.TitleWrap>
            <span className="title">배민커넥트 지원</span>
            <S.Tip>하루 1시간도 가능</S.Tip>
          </S.TitleWrap>
          <span className="content">
            오토바이부터 자전거까지, 배달하고 수입 만들어요
          </span>
        </S.TextWrap>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box height={"50"}>
        <S.TextWrap>
          <S.TitleWrap>
            <span className="title">리서치 참여</span>
            <S.Tip>배민상품권 증정</S.Tip>
          </S.TitleWrap>
          <span className="content">
            배민보이스 패널이 되어 고객님의 목소리를 들려주세요
          </span>
        </S.TextWrap>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">공지사항</span>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">이벤트</span>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">고객센터</span>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">환경설정</span>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">약관 및 정책</span>
        <S.RightBtn>{right}</S.RightBtn>
      </S.Box>
      <S.Box>
        <span className="title">현재 버전 12.1.0</span>
      </S.Box>
    </S.Container>
  );
}
