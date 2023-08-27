"use client";
import * as S from "./CartStyle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import together from "/public/assets/img/together2.png";
import SelectCategories from "./SelectCategories";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import CartItem from "./CartItem";
import time from '/public/assets/img/time.png'
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const router = useRouter();
  const [cartData, setCartData] = useState([]);
  const { data: session } = useSession();
  const userEmail = session?.user?.email
 
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
  }, [cartData]);
  
  return (
    <S.Container>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              router.back();
            }}
          >
            <Image src={back} width={25} alt="back-btn" priority />
          </S.Back>
        </S.Wrap>
        <S.PageTitle>장바구니</S.PageTitle>
        <S.HeaderBtnWrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" priority />
          </Link>
          <Image
            src={together}
            width={34}
            alt="together-btn"
            priority
            style={{ marginLeft: "-10px" }}
          />
        </S.HeaderBtnWrap>
      </S.Header>
      <SelectCategories />
      {cartData.length > 0 ? (
        <>
          <S.NameAndTime>
            <S.StoreName>{cartData[0]?.store_Title}</S.StoreName>
            <S.DeliveryTime>
              <Image src={time} alt="time-ico"/>
              {cartData[0]?.delivery_time} 후 도착
            </S.DeliveryTime>
          </S.NameAndTime>
          {cartData.map((item, i) => {
            return <CartItem item={item} key={i} userEmail={userEmail}/>;
          })}
        </>
      ) : (
        <EmptyCart />
      )}
    </S.Container>
  );
}
