"use client";
import * as S from "./deliveryStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import title from "/public/assets/img/deliveryTitle.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SetAddress from "../address/SetAddress";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useAddressFetch from "@/hooks/useAddressFetch";
import DeliveryPageBanner from "./DeliveryPageBanner";
import CategorySection from "./CategorySection";

export default function Delivery() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const encodedEmail = encodeURIComponent(email || "");
  const address = useAddressFetch(status, encodedEmail);
  const str = address[0]?.Addr;
  const processedAddress = str?.split(" ").filter((v) => !v.includes("도") && !v.includes("특별")).join(" ");
  
  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              goBack();
            }}
          >
            <Image src={back} width={25} alt="back-btn" />
          </S.Back>
          <Image src={title} width={70} alt="delivery-title" />
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
      <S.Address
        onClick={() => {
          handleModal();
        }}
      >
        {processedAddress}<p>▼</p>
      </S.Address>
      <SetAddress handleModal={handleModal} isOpen={isOpen} />
      <DeliveryPageBanner/>
      <CategorySection/>
    </>
  );
}
