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
  const [selectedValues, setSelectedValues] = useState([]);
  const [quantity, setQuantity] = useState(1);
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
        if (!response.ok) {
          throw new Error('네트워크 요청에 실패했습니다.');
        }
        const data = await response.json();
        if (!data.selectedMenuItem) {
          throw new Error('메뉴 정보를 가져오는 데 실패했습니다.');
        }
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

  // option handler
  useEffect(() => {
    if (basicChoices?.length > 0) {
      setSelectedValues([basicChoices[0]]);
    }
  }, [basicChoices]);

  const handleOptionSelection = (value, isRadio) => {
    if (isRadio) {
      setSelectedValues([value]);
    } else {
      if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter((v) => v !== value));
      } else {
        setSelectedValues([...selectedValues, value]);
      }
    }
  };

  // calculate price
  const calculatePrice = () => {
    const basicPrice = basicChoices && basicChoices[0]?.price === 0 ? menuInfo.price[0] : 0;
    if (selectedValues.length === 0) {
      return basicPrice.toLocaleString();
    } else {
      const optionPrice = selectedValues
        .map((v) => v.price)
        .reduce((a, c) => a + c);
      const totalPrice = (basicPrice + optionPrice) * quantity;
      return totalPrice.toLocaleString();
    }
  };

  // handle Quantity
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
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
              <span>{menuInfo.price[0].toLocaleString()}원</span>
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
              const isSelected = selectedValues.includes(item);
              return (
                <S.OptionWrap key={i}>
                  <S.ChekWrap>
                    <S.BasicOptionLabel>
                      <S.BasicOptionInput
                        type="radio"
                        name="basic"
                        value={item.name}
                        checked={isSelected}
                        onChange={() => handleOptionSelection(item, true)}
                      />
                      <span>{item.name}</span>
                    </S.BasicOptionLabel>
                  </S.ChekWrap>
                  <S.OptionPrice>
                    +{item.price.toLocaleString()}원
                  </S.OptionPrice>
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
                    {item.required ? null : (
                      <S.Max>최대 {item.select_options.length}개 선택</S.Max>
                    )}
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
                  const isSelected = selectedValues.includes(v);
           
                  return (
                    <S.OptionWrap key={idx}>
                      <S.ChekWrap>
                        <S.AdditionalLable>
                          {item.required ? (
                            <S.AdditionalInput
                              type="radio"
                              name={`additional`}
                              checked={isSelected} 
                              onChange={() => handleOptionSelection(v, true)}
                            />
                          ) : (
                            <S.AdditionalInput
                              type="checkbox"
                              name={`additional`}
                              checked={isSelected}
                              onChange={() => handleOptionSelection(v, false)}
                            />
                          )}
                          <span>{v.name}</span>
                        </S.AdditionalLable>
                      </S.ChekWrap>
                      <S.OptionPrice>
                        +{v.price.toLocaleString()}원
                      </S.OptionPrice>
                    </S.OptionWrap>
                  );
                })}
              </S.AdditionalOptions>
            );
          })}
          <S.Total>
            <span className="total-products">수량</span>
            <S.Quantity>
              <S.DecreaseBtn onClick={()=>{handleDecreaseQuantity()}}  disabled={quantity === 1}>ㅡ</S.DecreaseBtn>
              <span>{quantity}개</span>
              <S.IncreaseBtn onClick={()=>{handleIncreaseQuantity()}}>+</S.IncreaseBtn>
            </S.Quantity>
          </S.Total>
          <S.Warnning>
            <span>
              ⚠ 메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.
            </span>
          </S.Warnning>
          <S.MenuDetailFooter>
            <S.MinPrice>
              <span className="text">배달최소주문금액</span>
              <span className="price">
                {minDeliveryPrice.toLocaleString()}원
              </span>
            </S.MinPrice>
            <S.AddCart>
              <span>{calculatePrice()}원 담기</span>
            </S.AddCart>
          </S.MenuDetailFooter>
        </>
      )}
    </S.Container>
  );
}
