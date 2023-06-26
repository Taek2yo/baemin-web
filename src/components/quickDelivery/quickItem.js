import * as S from "./quickStyle";
import Image from "next/image";
import one from "/public/assets/img/oneDelivery.webp";
import url from "url";
import Link from "next/link";
export default function QuickItem({ item }) {
  const getImageUrl = (relativePath) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, relativePath);
    return imageUrl;
  };
  return (
    <Link href={`/detail/${item._id}`}>
    <S.Box>
      <S.thumbnail>
        <Image src={getImageUrl(item.img)} alt="food" width={100} height={100}/>
      </S.thumbnail> 
      <S.ItemTitle>
        <span className="item-title">{item.title}</span>
        <span className="star">★</span>
        <span>{item.stars}</span>
      </S.ItemTitle>
      <S.TimeTip>
        <div>
          <span>배달</span>
          {item.onetime}
        </div>
        <div>
          <span>배달팁</span>
          {item.onetip}
        </div>
      </S.TimeTip>
      {item.onedelivery ? (
        <div style={{ marginTop: "10px" }}>
          <Image src={one} width={70} alt="oneDelivery" />
        </div>
      ) : null}
      <S.NewCouponeWrap>
        {item.new ? <S.New><span>신규</span></S.New> : null}
        {item.coupone ? <S.Coupone>쿠폰</S.Coupone> : null}
      </S.NewCouponeWrap>
    </S.Box>
    </Link>
  );
}
