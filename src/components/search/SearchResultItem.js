import * as S from "./searchStyle";
import Image from "next/image";
import url from "url";
import Link from "next/link";

export default function SearchResultItem({ item }) {
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  
  return (
    <>
      {item.store_info.map((store) => (
        <Link key={store._id} href={`/detail/${store._id}`}>
          <S.ItemContainer>
            <S.ContentSection>
              <S.ItemImage>
                <Image
                  src={getImageUrl(item.store_img)}
                  alt="food"
                  width={100}
                  height={100}
                />
              </S.ItemImage>
              <S.ItemContent>
                <S.ContentTitle>{item.store_name}</S.ContentTitle>
                <S.ItemWrap>
                  <S.ItemStar>
                    <span className="star">★</span>
                    <span className="score">{store.stars}</span>
                  </S.ItemStar>
                  <S.ItemDesc>
                    {item.menu_info.map((menu, index) => (
                      <span key={index}>{menu.name}</span>
                    ))}
                  </S.ItemDesc>
                </S.ItemWrap>
                <S.ItemWrap>
                  <S.ItemDeliveryTime>
                    배달 {store.delivery_time}
                  </S.ItemDeliveryTime>
                  <S.ItemTip>배달팁 {store.delivery_tip.toLocaleString()}원</S.ItemTip>
                </S.ItemWrap>
                <S.MinimumOrder>
                  <span className="minimum">최소주문 </span>
                  <span>{store.min_delivery_price.toLocaleString()}원</span>
                </S.MinimumOrder>
              </S.ItemContent>
            </S.ContentSection>
          </S.ItemContainer>
        </Link>
      ))}
    </>
  );
}
