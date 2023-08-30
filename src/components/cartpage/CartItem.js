"use client";
import Image from "next/image";
import * as S from "./CartStyle";
import DeleteBtn from "./DeleteBtn";
import url from "url";
import { useState } from "react";
export default function CartItem({ item, userEmail }) {
  console.log(item);
  const [quantity, setQuantity] = useState(item.quantity);
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };


  // handle Quantity
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <S.ItemCotainer>
        <S.MenuTitle>
          <span>{item.menu_title}</span>
          <DeleteBtn item={item} userEmail={userEmail} />
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
                {option.title} : {option.name} ({option.price.toLocaleString()}원)
              </S.OptionList>
            ))}

            {item.selected_options.additionalRadio.map((option, index) => (
              <S.OptionList key={index}>
                <span>•</span>
                {option.title} : {option.name} ({option.price.toLocaleString()}원)
              </S.OptionList>
            ))}

            {item.selected_options.additionalCheck.map((option, index) => (
              <S.OptionList key={index}>
                <span>•</span>
                {option.title} : {option.name} ({option.price.toLocaleString()}원)
              </S.OptionList>
            ))}
            <S.Price>{(item.price * quantity).toLocaleString()}원</S.Price>
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
