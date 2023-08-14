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
    const deliveryTip = item.delivery_tip.toLocaleString(); 
    const minDeliveryPrice =  item.min_delivery_price.toLocaleString(); 
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
                priority
              />
            </S.ItemImage>
            <S.ItemContent>
              <S.ContentTitle>{item.title}</S.ContentTitle>
              <S.ItemWrap>
                <S.ItemStar>
                  <span className="star">★</span>
                  <span className="score">{item.stars}</span>
                </S.ItemStar>
                
              </S.ItemWrap>
              <S.ItemWrap>
                <S.ItemDeliveryTime>
                  배달 {item.delivery_time}
                </S.ItemDeliveryTime>
                <S.ItemTip>배달팁 {deliveryTip}원</S.ItemTip>
              </S.ItemWrap>
              <S.MinimumOrder>
                <span className="minimum">최소주문 </span>
                <span>{minDeliveryPrice}원</span>
              </S.MinimumOrder>
            </S.ItemContent>
          </S.ContentSection>
        </S.ItemContainer>
      </Link>
    )
}