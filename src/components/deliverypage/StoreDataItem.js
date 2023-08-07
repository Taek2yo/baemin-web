import * as S from './deliveryStyle'
import Image from "next/image";
import url from "url";
import Link from "next/link";

export default function StoreDataItem({item}){
    const getImageUrl = (path) => {
        const publicUrl = "/public";
        const imageUrl = url.resolve(publicUrl, path);
        return imageUrl;
      };
    return(
        <Link key={item._id} href={`/detail/${item._id}`}>
        <S.ItemContainer>
          <S.ContentSection>
            <S.ItemImage>
              <Image
                src={getImageUrl(item.img)}
                alt="food"
                width={100}
                height={100}
              />
            </S.ItemImage>
            <S.ItemContent>
              <S.ContentTitle>{item.title}</S.ContentTitle>
              <S.ItemWrap>
                <S.ItemStar>
                  <span className="star">★</span>
                  <span className="score">{item.stars}</span>
                </S.ItemStar>
                <S.ItemDesc>
                  {/* {item.menu_info.map((menu, index) => (
                    <span key={index}>{menu.name}</span>
                  ))} */}
                </S.ItemDesc>
              </S.ItemWrap>
              <S.ItemWrap>
                <S.ItemDeliveryTime>
                  배달 {item.delivery_time}
                </S.ItemDeliveryTime>
                <S.ItemTip>배달팁 {item.delivery_tip}</S.ItemTip>
              </S.ItemWrap>
              <S.MinimumOrder>
                <span className="minimum">최소주문 </span>
                <span>{item.min_delivery_price}</span>
              </S.MinimumOrder>
            </S.ItemContent>
          </S.ContentSection>
        </S.ItemContainer>
      </Link>
    )
}