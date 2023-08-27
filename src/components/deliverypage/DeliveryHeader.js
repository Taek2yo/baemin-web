"use client";
import * as S from "./deliveryStyle";
import Image from "next/image";
import Link from "next/link";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import title from "/public/assets/img/deliveryTitle.png";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default function DeliveryHeader() {
  const [cartData, setCartData] = useState([]);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const searchParams = useSearchParams();
  const hasParams = searchParams.has("category");
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
  const quantity = cartData
    ?.map((item) => item.quantity)
    .reduce((a, c) => a + c, 0);

  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              {
                hasParams ? goBack() : router.push("/");
              }
            }}
          >
            <Image src={back} width={25} height="auto" alt="back-btn" />
          </S.Back>
          <Image src={title} width={70} height="auto" alt="delivery-title" />
        </S.Wrap>
        <S.Wrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" />
          </Link>

          <S.CartLink href="/cart">
            <Image src={cart} width={40} alt="cart-btn" />
            <S.CartQuantity>{quantity}</S.CartQuantity>
          </S.CartLink>
        </S.Wrap>
      </S.Header>
    </>
  );
}
