"use client";
import * as S from "./CartStyle";
import Image from "next/image";
import cancle from "/public/assets/img/close.png"
export default function CartItem({item}){
    console.log(item)
    return(
        <S.ItemCotainer>
            <S.MenuTitle>
                <span>{item.menu_title}</span>
                <S.DeleteBtn><Image src={cancle} alt="cancle"/></S.DeleteBtn>
            </S.MenuTitle>
            {item.selected_options.map((options, i)=>{
                return(
                    <></>
                )
            })}
        </S.ItemCotainer>
    )
}