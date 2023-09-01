"use client";
import Image from "next/image";
import * as S from "./CartStyle";
import DeleteBtn from "./DeleteBtn";
import url from "url";
import { useState } from "react";
export default function CartItem({ item, userEmail, onQuantityChange, onItemRemoved }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [basePrice, setBasePrice] = useState(item.price);
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };

  // handle Quantity
  const handleQuantityChange = async (newQuantity) => {
    try {
      const response = await fetch(`/api/cart/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: newQuantity,
          userEmail,
          basePrice,
        }),
      });

      if (response.ok) {
        // 서버에서 업데이트된 가격을 가져와서 화면에 반영
        const updatedItem = await response.json();
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);

        // 업데이트된 가격을 상태에 반영
        setPrice(updatedItem.price);
      } else {
        console.error("수량 정보 변경 에러:", response.statusText);
      }
    } catch (error) {
      console.error("수량 정보 변경 에러:", error);
    }
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    handleQuantityChange(newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      handleQuantityChange(newQuantity);
    }
  };

  return (
    <>
      <S.ItemCotainer>
        <S.MenuTitle>
          <span>{item.menu_title}</span>
          <DeleteBtn item={item} userEmail={userEmail} onItemRemoved={onItemRemoved}/>
        </S.MenuTitle>
        <S.InfoWrap>
          <Image
            src={getImageUrl(item?.menu_image)}
            alt="menu-img"
            width={90}
            height={90}
            priority
          />
          <S.MenuInfo>
            {item.selected_options.basic.map((option, index) => (
              <S.OptionList key={index}>
                <span>•</span>
                {option.title} : {option.name} ({option.price.toLocaleString()}
                원)
              </S.OptionList>
            ))}

            {item.selected_options.additionalRadio.map((option, index) => (
              <S.OptionList key={index}>
                <span>•</span>
                {option.title} : {option.name} ({option.price.toLocaleString()}
                원)
              </S.OptionList>
            ))}

            {item.selected_options.additionalCheck.map((option, index) => (
              <S.OptionList key={index}>
                <span>•</span>
                {option.title} : {option.name} ({option.price.toLocaleString()}
                원)
              </S.OptionList>
            ))}
            <S.Price>{price.toLocaleString()}원</S.Price>
          </S.MenuInfo>
        </S.InfoWrap>
        <S.ItemBtnWrap>
          <S.OptionBtn>옵션변경</S.OptionBtn>
          <S.Quantity>
            <S.DecreaseBtn
              onClick={() => {
                handleDecreaseQuantity();
              }}
              disabled={quantity === 1}
            >
              ㅡ
            </S.DecreaseBtn>
            <span>{quantity}</span>
            <S.IncreaseBtn
              onClick={() => {
                handleIncreaseQuantity();
              }}
            >
              +
            </S.IncreaseBtn>
          </S.Quantity>
        </S.ItemBtnWrap>
      </S.ItemCotainer>
    </>
  );
}
