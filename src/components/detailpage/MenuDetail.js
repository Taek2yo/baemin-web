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
  const options = menuInfo?.options;

  // Basic Options data
  const basicOptions = options?.basic_options;
  const basicChoices = basicOptions?.select_options;

  // Additional Options data
  const additionalOptions = options?.additional_options;

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
              height={280}
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
              <S.OptionsTitle>{basicOptions.title}</S.OptionsTitle>
              <S.Required>
                <span>필수</span>
              </S.Required>
            </S.OptionWrap>
            {basicChoices?.map((item, i) => {
              return (
                <S.OptionWrap key={i}>
                  <S.ChekWrap>
                    <S.BasicOptionLabel>
                      <S.BasicOptionInput type="checkbox" />
                      <span>{item.name}</span>
                    </S.BasicOptionLabel>
                  </S.ChekWrap>
                  <S.OptionPrice>+{item.price}원</S.OptionPrice>
                </S.OptionWrap>
              );
            })}
          </S.BasicOptions>
          {additionalOptions.map((item, i) => {
            return (
              <S.AdditionalOptions key={i}>
                <S.OptionWrap>
                  <S.MaxSelections>
                    <S.OptionsTitle>{item.title}</S.OptionsTitle>
                   {item.required ? null : <S.Max>최대 {item.select_options.length}개 선택</S.Max>} 
                  </S.MaxSelections>
                  {item.required ? (
                    <S.Required>
                      <span>필수</span>
                    </S.Required>
                  ) : (
                    <S.Selection>
                      <span>선택</span>
                    </S.Selection>
                  )}
                </S.OptionWrap>
                {item.select_options.map((v, idx) => {
                  return (
                    <S.OptionWrap key={idx}>
                      <S.ChekWrap>
                        <S.AdditionalLable>
                          <S.AdditionalInput type="checkbox" />
                          <span>{v.name}</span>
                        </S.AdditionalLable>
                      </S.ChekWrap>
                      <S.OptionPrice>+{v.price}원</S.OptionPrice>
                    </S.OptionWrap>
                  );
                })}
              </S.AdditionalOptions>
            );
          })}
          <S.Total>
            <span className="total-products">수량</span>
            <S.Quantity>
              <S.DecreaseBtn>ㅡ</S.DecreaseBtn>
              <span>1개</span>
              <S.IncreaseBtn>+</S.IncreaseBtn>
            </S.Quantity>
          </S.Total>
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
