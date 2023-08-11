"use client";
import * as S from "./menuDetailStyle";
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
  const [minDeliveryPrice, setPrice] = useState("");
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
  console.log(menuInfo?.options);
  const options = menuInfo?.options;
  return (
    <S.Container>
      {menuInfo && (
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
              <S.MenuTitle>{menuInfo.name}</S.MenuTitle>
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
            <Image
              src={getImageUrl(MenuImage)}
              alt="menu-image"
              width={500}
              height={300}
              priority
            />
          </S.MenuDetailImage>
          <S.Description>
            <S.Title>
              <span>{menuInfo.name}</span>
            </S.Title>
            <S.Desc>{menuInfo.desc}</S.Desc>
            <S.Price>
              <span>가격</span>
              <span>{menuInfo.price}</span>
            </S.Price>
          </S.Description>
          
          <S.BasicOptions>
            <S.OptionWrap>
              <S.OptionsTitle>기본옵션</S.OptionsTitle>
              <S.Required>
                <span>필수</span>
              </S.Required>
            </S.OptionWrap>
            <S.OptionWrap>
              <S.ChekWrap>
                <S.BasicOptionLabel>
                  <S.BasicOptionInput type="checkbox" /> 우유식빵
                </S.BasicOptionLabel>
              </S.ChekWrap>
              <span>+0원</span>
            </S.OptionWrap>
          </S.BasicOptions>

          <S.AdditionalOptions>
            <S.OptionWrap>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "7px" }}
              >
                <S.OptionsTitle>추가옵션</S.OptionsTitle>
                <S.Max>최대 x개 선택</S.Max>
              </div>
              <S.Selection>
                <span>선택</span>
              </S.Selection>
            </S.OptionWrap>
            <S.OptionWrap>
              <S.ChekWrap>
                <S.AdditionalInput type="checkbox" id="additional-option1" />
                <label htmlFor="additional-option1">생와사비 2p</label>
              </S.ChekWrap>
              <span>+500원</span>
            </S.OptionWrap>
          </S.AdditionalOptions>

          <S.MenuDetailFooter>
            <S.MinPrice>
              <span className="text">배달최소주문금액</span>
              <span className="price">{minDeliveryPrice}</span>
            </S.MinPrice>
            <S.AddCart>
              <span>{menuInfo.price} 담기</span>
            </S.AddCart>
          </S.MenuDetailFooter>
        </>
      )}
    </S.Container>
  );
}
