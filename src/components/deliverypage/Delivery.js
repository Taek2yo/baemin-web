"use client";
import * as S from "./deliveryStyle";
import SetAddress from "../address/SetAddress";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useAddressFetch from "@/hooks/useAddressFetch";
import DeliveryPageBanner from "./DeliveryPageBanner";
import CategorySection from "./CategorySection";
import DeliveryHeader from "./DeliveryHeader";

export default function Delivery() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const encodedEmail = encodeURIComponent(email || "");
  const address = useAddressFetch(status, encodedEmail);
  const str = address[0]?.Addr;
  const processedAddress = str
    ?.split(" ")
    .filter((v) => !v.includes("도") && !v.includes("특별"))
    .join(" ");
  return (
    <>
      <DeliveryHeader/>
      <S.Address
        onClick={() => {
          status === "unauthenticated"
            ? (window.location.href = "/login")
            : handleModal();
        }}
      >
        {status === "authenticated" ? processedAddress : "로그인을 해주세요"}
        <p>▼</p>
      </S.Address>
      <SetAddress handleModal={handleModal} isOpen={isOpen} />
      <DeliveryPageBanner />
      <CategorySection />
    </>
  );
}
