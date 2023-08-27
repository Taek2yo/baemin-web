"use client";
import * as S from "./CartStyle";
import DeleteBtn from "./DeleteBtn";
export default function CartItem({ item, userEmail}) {
  return (
    <S.ItemCotainer>
      <S.MenuTitle>
        <span>{item.menu_title}</span>
        <DeleteBtn item={item} userEmail={userEmail}/>
      </S.MenuTitle>
    </S.ItemCotainer>
  );
}
