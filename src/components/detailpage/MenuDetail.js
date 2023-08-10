"use client";
import * as S from "./detailStyle";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import home from "/public/assets/img/home.png";
import cart from "/public/assets/img/cart.png";
import share from "/public/assets/img/share.png";
import url from "url";
export default function MenuDetail({ storeId }) {
  const [menuInfo, setMenuInfo] = useState(null);
  const [minDeliveryPrice, setPrice] = useState('');
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  const searchParam = useSearchParams();
  const menuId = searchParam.get("menuId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/detail/getMenuInfo?storeId=${storeId}&menuId=${menuId}`
        );
        const data = await response.json();
        setMenuInfo(data.selectedMenuItem);
        setPrice(data.minDeliveryPrice);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, [storeId, menuId]);
  const router = useRouter();
  const MenuImage = menuInfo?.image;
  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.Back
            onClick={() => {
              router.back();
            }}
          >
            <Image src={back} width={25} alt="back-btn" priority />
          </S.Back>
          <S.MenuTitle>{menuInfo?.name}</S.MenuTitle>
        </S.Wrap>
        <S.HeaderBtnWrap>
          <Link href="/" as="/">
            <Image src={home} width={25} alt="home-btn" priority />
          </Link>
          <Image src={share} width={22} alt="share-btn" priority />
          <Link href="/cart" as="/cart">
            <Image
              src={cart}
              width={40}
              alt="cart-btn"
              priority
              style={{ marginLeft: "-10px" }}
            />
          </Link>
        </S.HeaderBtnWrap>
      </S.Header>
      <S.MenuDetailImage>
        {menuInfo && (
          <Image
            src={getImageUrl(MenuImage)}
            alt="menu-image"
            width={500}
            height={300}
            priority
          />
        )}
      </S.MenuDetailImage>
      <S.MenuDetailFooter>
        <S.MinPrice>
            <span className="text">배달최소주문금액</span>
            <span className="price">{minDeliveryPrice}</span>
        </S.MinPrice>
        <S.AddCart>
            <span>~~~원 담기</span>
        </S.AddCart>
      </S.MenuDetailFooter>
    </>
  );
}
