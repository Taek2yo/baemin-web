"use client";
import * as S from "./CartStyle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import together from "/public/assets/img/together2.png";
import { useQuery } from "react-query";
import { useState } from "react";
import { useSession } from "next-auth/react";
import plus from "/public/assets/img/plus.png";
import time from "/public/assets/img/time.png";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import SelectCategories from "./SelectCategories";

export default function Cart() {
  const router = useRouter();
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [cartData, setCartData] = useState([]);
  let queryResult = {};
  const { data: fetchedData, error, isLoading } = queryResult;
  if (userEmail) {
    queryResult = useQuery(['cartData', userEmail], 
      async () => {
        const response = await fetch(`/api/cart/getCart?user=${userEmail}`);
        if (!response.ok) {
          throw new Error("네트워크 에러");
        }
        return response.json();
      },
      {
        onSuccess: (data) => {
          setCartData(data);
        }
      }
    );
  }
  
  

  const handleCartItemQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartData.map((item) => {
      if (item._id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartData(updatedCartItems);
  };

  // 총 수량과 총 가격 계산
  const totalQuantity = cartData?.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartData?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // Delete Item
  const handleItemRemoved = (itemId) => {
    // 아이템 삭제 후 상태를 업데이트하고 재랜더링
    const updatedCartData = cartData?.filter(item => item._id !== itemId);
    setCartData(updatedCartData);
  };

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
      {cartData?.length ? (
        <>
          <S.NameAndTime>
            <S.StoreName>{cartData[0]?.store_Title}</S.StoreName>
            <S.DeliveryTime>
              <Image src={time} alt="time-ico" />
              {cartData[0]?.delivery_time} 후 도착
            </S.DeliveryTime>
          </S.NameAndTime>
          {cartData?.map((item, i) => {
            return (
              <CartItem
                item={item}
                key={i}
                userEmail={userEmail}
                onQuantityChange={(newQuantity) =>
                  handleCartItemQuantityChange(item._id, newQuantity)
                }
                onItemRemoved={handleItemRemoved}
              />
            );
          })}
          <S.MoreBtn
            onClick={() => {
              router.push(`/detail/${cartData[0]?.store_id}`);
            }}
          >
            <Image src={plus} alt="plus-icon" width={15} />
            <span>더 담으러 가기</span>
          </S.MoreBtn>
          <S.Footer>
            <S.OrderBtn>
              <S.OrderQuantity>{totalQuantity}</S.OrderQuantity>
              <S.Text>배달 주문하기</S.Text>
              <S.TotalPrice>{totalPrice.toLocaleString()}원</S.TotalPrice>
            </S.OrderBtn>
          </S.Footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </S.Container>
  );
}
