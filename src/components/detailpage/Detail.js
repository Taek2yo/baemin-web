"use client";
import * as S from "./detailStyle";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import call from "/public/assets/img/call.png";
import heart from "/public/assets/img/favorite4.png";
import share from "/public/assets/img/share.png";
import together from "/public/assets/img/together.png";
import question from "/public/assets/img/questionmark.png";
import { useRouter } from "next/navigation";
import PackingOrder from "./packingOrder";
import Signature from "./Signature";
import Information from "./Information";
import Review from "./Review";
import Infoicon from "/public/assets/img/infoicon.png"


export default function Detail({ storeId }) {
  // orderType state
  const [orderType, setOrderType] = useState("delivery");
  const handleSelectOrderType = (type) => {
    setOrderType(type);
  };
  // menu tab state
  const [tabType, setTaptype] = useState("Menu");
  const handleTabType = (type) => {
    setTaptype(type);
  };

  // 가게 정보
  /* const [stores, setStores] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/detail/${storeId}`);
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, []);
  const store = stores?.store; */

  // handleButton
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      {/* Header( Button Menu ) */}
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              goBack();
            }}
          >
            <Image src={back} width={25} alt="back-btn" priority />
          </S.Back>
          <S.StoreName>{/* {store?.title} */}</S.StoreName>
        </S.Wrap>
        <S.Wrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" />
          </Link>
          <Link href="/cart" as="/cart">
            <Image src={cart} width={40} alt="cart-btn" />
          </Link>
        </S.Wrap>
      </S.Header>

      <S.Container>
        <S.Carousel></S.Carousel>
        <S.Title>{/* {store?.title} */}</S.Title>
        <S.Wrap>
          <span className="star">★★★★★</span>
          <span className="point">{/* {store?.stars} */}</span>
        </S.Wrap>
        <S.TextWrap>
          <span className="text">최근리뷰 0</span>
          <span className="bar">|</span>
          <span className="text">최근사장님댓글 0</span>
        </S.TextWrap>
        <S.OptionWrap>
          <S.Wrap>
            <Image src={call} width={20} height={20} alt="call" />
            <span>전화</span>
          </S.Wrap>
          <S.Wrap>
            <Image src={heart} width={20} height={20} alt="zzim" />
            <span>100</span>
          </S.Wrap>
          <S.Wrap>
            <Image src={share} width={20} height={20} alt="share" />
            <span> 공유</span>
          </S.Wrap>
          <S.Wrap>
            <Image src={together} width={20} height={20} alt="order-together" />
            <span>함께주문</span>
          </S.Wrap>
        </S.OptionWrap>

        {/* Order Info Tab start */}
        <S.OrderMethod>
          <S.Method
            onClick={() => handleSelectOrderType("delivery")}
            active={orderType === "delivery"}
          >
            배달주문
          </S.Method>
          <S.Method
            onClick={() => handleSelectOrderType("takeout")}
            active={orderType === "takeout"}
          >
            포장/방문주문
          </S.Method>
        </S.OrderMethod>
        <S.InfoBox>
          <S.KeyValueWrap>
            {orderType === "delivery" ? (
              <>
                <S.InfoKeyWrap>
                  <span>최소주문금액</span>
                  <span>결제방법</span>
                  <span>배달시간</span>
                  <span>배달팁</span>
                </S.InfoKeyWrap>

                <S.InfoValueWrap>
                  <span>1</span>
                  <span>바로결제, 만나서결제</span>
                  <S.Time>
                    <span>소요 예상</span>
                    <span className="question-mark">
                      <Image src={question} alt="?" />
                    </span>
                  </S.Time>
                  <span>1</span>
                </S.InfoValueWrap>
              </>
            ) : (
              <PackingOrder />
            )}
          </S.KeyValueWrap>
        </S.InfoBox>
        {/* Order Info Tab End */}

        {/* Menu Tab start */}
        <S.MenuTabWrap>
          <S.MenuTab
            onClick={() => handleTabType("Menu")}
            active={tabType === "Menu"}
            tabType={tabType}
          >
            메뉴
          </S.MenuTab>
          <S.MenuTab
            onClick={() => handleTabType("Info")}
            active={tabType === "Info"}
            tabType={tabType}
          >
            정보
            <Image src={Infoicon} width={22} height={22} alt="info-ico"/>
          </S.MenuTab>
          <S.MenuTab
            onClick={() => handleTabType("Review")}
            active={tabType === "Review"}
            tabType={tabType}
          >
            리뷰
          </S.MenuTab>
        </S.MenuTabWrap>
       <S.TabWrap>
        {tabType === "Menu" ? (
          <Signature />
        ) : tabType === "Info" ? (
          <Information />
        ) : tabType === "Review" ? (
          <Review />
        ) : null}
        </S.TabWrap>
      </S.Container>
    </>
  );
}
