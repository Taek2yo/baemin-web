'use client'
import * as S from "./detailStyle"
import Link from "next/link"
export default function MenuFooter({minDeliveryPrice, totalCartPrice, quantity}){
    const subtract = minDeliveryPrice - totalCartPrice;
    return (
      <S.FooterContainer>
        {subtract > 0 ? (
          <>
            <S.CanOrder>
              {subtract.toLocaleString()}원 더 담으면{" "}
              <S.Able>배달 가능!</S.Able>
            </S.CanOrder>
            <S.MinDelivery>
              배달 최소주문금액 {minDeliveryPrice.toLocaleString()}원
            </S.MinDelivery>
          </>
        ) : null}
        <Link href="/cart" style={{ width: "95%" }}>
          <S.GoCartBtn>
            <S.Quantity>{quantity}</S.Quantity>
            <S.Text>장바구니 보기</S.Text>
            <S.TotalPrice>{totalCartPrice.toLocaleString()}원</S.TotalPrice>
          </S.GoCartBtn>
        </Link>
      </S.FooterContainer>
    );
}