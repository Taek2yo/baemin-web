"use client";
import * as S from "./detailStyle";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
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
import PackingOrder from "./PackingOrder";
import Signature from "./Signature";
import Information from "./Information";
import Review from "./Review";
import Infoicon from "/public/assets/img/infoicon.png";
import Thumbnail from "./Thumbnail";
import Loading from "@/app/loading";
import MenuFooter from "./MenuFooter";

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
  // cart state
  const [cartData, setCartData] = useState([]);

  // 가게 정보
  const [stores, setStores] = useState(null);

  // 가게 정보 가져오기
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

  const store = stores?.store;
  const menu = stores?.menu;
  const menuInfo = menu?.menu_info;
  const thumbnail = menu?.thumbnail;
  // goBackBtn
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  // format number
  const minDeliveryPrice = store?.min_delivery_price;
  const deliveryTip = store?.delivery_tip.toLocaleString();

  // cart data
  const session = useSession();
  const userEmail = session?.data?.user?.email;

  useEffect(() => {
    if (userEmail) {
      const fetchCart = async () => {
        try {
          const response = await fetch(`/api/cart/getCart?user=${userEmail}`);
          if (!response.ok) {
            throw new Error("네트워크 에러");
          }
          const data = await response.json();
          setCartData(data);
        } catch (error) {
          console.error("데이터 패칭 에러", error);
          setCartData([]);
        }
      };
      fetchCart();
    }
  }, [userEmail]);

  const totalCartPrice = cartData?.map((item) => item.price).reduce((a, c) => a + c, 0);
  const quantity = cartData?.map((item) => item.quantity).reduce((a, c) => a + c, 0);

  if (stores === null) {
    return <Loading />;
  }

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
            <Image src={back} width={25} alt="back-btn" />
          </S.Back>
          <S.StoreName>{store?.title}</S.StoreName>
        </S.Wrap>
        <S.Wrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" />
          </Link>
          <S.CartLink href="/cart">
            <Image src={cart} width={40} alt="cart-btn" />
            {quantity === 0 ? null : <S.CartQuantity>{quantity}</S.CartQuantity>}
          </S.CartLink>
        </S.Wrap>
      </S.Header>

      <S.Container>
        <Thumbnail thumbnail={thumbnail} />
        <S.Title>{store?.title}</S.Title>
        <S.Wrap>
          <span className="star">★★★★★</span>
          <span className="point">{store?.stars}</span>
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
          <S.KeyValueWrap padding={"20px"}>
            {orderType === "delivery" ? (
              <>
                <S.InfoKeyWrap>
                  <span>최소주문금액</span>
                  <span>결제방법</span>
                  <span>배달시간</span>
                  <span>배달팁</span>
                </S.InfoKeyWrap>

                <S.InfoValueWrap>
                  <span>{minDeliveryPrice.toLocaleString()}원</span>
                  <span>바로결제, 만나서결제</span>
                  <S.Time>
                    <span>{store.delivery_time} 소요 예상</span>
                    <span className="question-mark">
                      <Image src={question} alt="?" />
                    </span>
                  </S.Time>
                  <span>{deliveryTip}원</span>
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
            <Image src={Infoicon} width={22} height={22} alt="info-ico" />
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
            <Signature menuInfo={menuInfo} storeId={storeId} />
          ) : tabType === "Info" ? (
            <Information />
          ) : tabType === "Review" ? (
            <Review />
          ) : null}
        </S.TabWrap>
        {cartData && store?.title === cartData[0]?.store_Title ? (
          <MenuFooter
            minDeliveryPrice={minDeliveryPrice}
            totalCartPrice={totalCartPrice}
            quantity={quantity}
          />
        ) : null}
      </S.Container>
    </>
  );
}
