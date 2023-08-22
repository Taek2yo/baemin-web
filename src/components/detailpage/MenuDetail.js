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
import { useSession } from "next-auth/react";
import Modal from "./Modal";
import { Btn, ModalBtnWrapper } from "./modalStyle";
export default function MenuDetail({ storeId }) {
  const [menuInfo, setMenuInfo] = useState(null);
  const [storeData, setStoreData] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  // image 불러오기
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };

  const searchParam = useSearchParams();
  const menuId = searchParam.get("menuId");

  // api call(storeResult, menuInfo)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/detail/getMenuInfo?storeId=${storeId}&menuId=${menuId}`
        );
        if (!response.ok) {
          throw new Error("네트워크 요청에 실패했습니다.");
        }
        const data = await response.json();
        if (!data.selectedMenuItem) {
          throw new Error("메뉴 정보를 가져오는 데 실패했습니다.");
        }

        const { selectedMenuItem, ...storeResult } = data;
        setMenuInfo(selectedMenuItem);
        setStoreData({ ...storeResult });
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
  
  // 페이지 렌더링시 기본선택
  useEffect(() => {
    if (basicChoices?.length > 0) {
      const combined = { ...basicChoices[0], title : basicOptions.title}
      setSelectedValues([combined]);
    }
  }, [basicChoices]);

  // option handler
  const handleOptionSelection = (value, isRadio, title) => {
    const combinedValue = { ...value, title: title };
    if (isRadio) {
      setSelectedValues([combinedValue]);
    } else {
      const valueExists = selectedValues.some(
        (v) => v.name === combinedValue.name && v.price === combinedValue.price && v.title === combinedValue.title
      );
  
      if (valueExists) {
        setSelectedValues(selectedValues.filter((v) => v !== combinedValue));
      } else {
        setSelectedValues([...selectedValues, combinedValue]);
      }
    }
  };
  console.log(selectedValues)
  // calculate total price
  const calculatePrice = () => {
    const basicPrice =
      basicChoices && basicChoices[0]?.price === 0 ? menuInfo.price[0] : 0;
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
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Add to Cart
  const session = useSession();
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addToCart = async () => {
    const newCartItem = {
      store_id: storeData._id,
      store_Title: storeData.title,
      delivery_time: storeData.delivery_time,
      min_delivery_tip: storeData.minDeliveryPrice,
      price: calculatePrice(),
      selected_options: selectedValues,
      menu_title: menuInfo.name,
      menu_image: MenuImage,
    };

    const userEmail = session.data.user.email;
    const user = session.data.user;

    try {
      const response = await fetch("/api/cart/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          cartItem: newCartItem,
        }),
      });
      const data = await response.json();
      if( data.message === '성공'){
        router.push(`/detail/${storeId}`)
      }
    } catch (error) {
      console.error("장바구니 저장 실패:", error);
    }
  };

  const checkCartAndAddtoCart = async () => {
    const userEmail = session.data.user.email;
    const cartItem = {
      store_id: storeData._id,
    };
    try {
      const response = await fetch("/api/cart/isValid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, cartItem }),
      });

      if (!response.ok) {
        throw new Error("네트워크 에러");
      }

      const data = await response.json();
      const isStoreIdMatching = data.isStoreIdMatching;
      if (isStoreIdMatching) {
        addToCart();
      } else {
        openModal();
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
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
                        onChange={() => handleOptionSelection(item, true, basicOptions.title)}
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
                              onChange={() => handleOptionSelection(v, true, item.title)}
                            />
                          ) : (
                            <S.AdditionalInput
                              type="checkbox"
                              name={`additional`}
                              checked={isSelected}
                              onChange={() => handleOptionSelection(v, false, item.title)}
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
              <S.DecreaseBtn
                onClick={() => {
                  handleDecreaseQuantity();
                }}
                disabled={quantity === 1}
              >
                ㅡ
              </S.DecreaseBtn>
              <span>{quantity}개</span>
              <S.IncreaseBtn
                onClick={() => {
                  handleIncreaseQuantity();
                }}
              >
                +
              </S.IncreaseBtn>
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
                {storeData.minDeliveryPrice.toLocaleString()}원
              </span>
            </S.MinPrice>
            <S.AddCart
              onClick={() => {
                checkCartAndAddtoCart();
              }}
            >
              <span>{calculatePrice()}원 담기</span>
            </S.AddCart>
          </S.MenuDetailFooter>
        </>
      )}
      {showModal && (
        <Modal closeModal={closeModal}>
          <div style={{ padding: "20px 10px 10px 10px" }}>
            <span>장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.</span>
            <p>
              선택하신 메뉴를 장바구니에 담을 경우 이전에 담은 메뉴가
              삭제됩니다.
            </p>
          </div>
          <ModalBtnWrapper>
            <Btn onClick={closeModal} className="cancle-btn">
              취소
            </Btn>
            <Btn
              onClick={() => {
                addToCart();
                closeModal();
              }}
            >
              <span>담기</span>
            </Btn>
          </ModalBtnWrapper>
        </Modal>
      )}
    </S.Container>
  );
}
