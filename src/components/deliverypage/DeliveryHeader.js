"use client";
import * as S from "./deliveryStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import title from "/public/assets/img/deliveryTitle.png";
import { useRouter, useSearchParams } from "next/navigation";
export default function DeliveryHeader() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const searchParams = useSearchParams();
  const hasParams = searchParams.has('category');
  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              { hasParams ? goBack() : router.push('/')}
            }}
          >
            <Image src={back} width={25} height="auto" alt="back-btn" />
          </S.Back>
          <Image src={title} width={70} height="auto" alt="delivery-title" />
        </S.Wrap>
        <S.Wrap>
          <Image
            src={home}
            width={25}
            height="auto"
            alt="home-btn"
            onClick={() => router.push("/")}
          />

          <Image
            src={cart}
            width={40}
            height="auto"
            alt="cart-btn"
            onClick={() => router.push("/cart")}
          />
        </S.Wrap>
      </S.Header>
    </>
  );
}
