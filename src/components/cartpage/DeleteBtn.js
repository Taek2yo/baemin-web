"use client";
import * as S from "./CartStyle";
import Image from "next/image";
import cancle from "/public/assets/img/close.png";

export default function DeleteBtn({ item, userEmail }) {
  const removeItem = async () => {
    try {
      const response = await fetch("/api/cart/deleteCartItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          itemId: item._id,
        }),
      });
      await response.json();
    } catch (error) {
      console.error("장바구니 삭제 실패:", error);
    }
  };

  return (
    <S.DeleteBtn onClick={removeItem}>
      <Image src={cancle} alt="cancle" />
    </S.DeleteBtn>
  );
}
