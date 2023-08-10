'use client'
import * as S from "./detailStyle";
import Image from "next/image";
import MenuDesc from "./MenuDesc";
import signature from "/public/assets/img/signature.png";
import url from 'url';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Signature({ menuInfo, storeId }) {
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  const router = useRouter();
  return (
    <S.TabContainer>
      <S.DescBox>
        <MenuDesc />
      </S.DescBox>
      <S.MenuContainer>
        <S.SignatureTitle>
          <Image src={signature} alt="대표메뉴" priority/>
        </S.SignatureTitle>
        {menuInfo?.map((item, index) => {
          return (
            <S.ItemContainer key={index} onClick={()=>router.push(`/detail/${storeId}/menuId?menuId=${item.id}`)} >
              <S.ItemWrap>
                <S.ItemTitle>{item.name}</S.ItemTitle>
                <S.ItemDesc>{item.desc}</S.ItemDesc>
                <span>{item.price}</span>
              </S.ItemWrap>
              <S.ItemImage>
                <Image src={getImageUrl(item.image)} width={200} height={200} alt="menu-image" priority/>
              </S.ItemImage>
            </S.ItemContainer>
          );
        })}
      </S.MenuContainer>
    </S.TabContainer>
  );
}
