import * as S from "./quickStyle";
import Image from "next/image";
import one from "/public/assets/img/oneDelivery.webp";
export default function QuickItem({ item }) {
  return (
    <S.Box>
      <S.thumbnail>
        <Image src={item.img} alt="food"/>
      </S.thumbnail> 
      <S.ItemTitle>
        <span className="item-title">{item.title}</span>
        <span className="star">★</span>
        <span>{item.stars}</span>
      </S.ItemTitle>
      <S.TimeTip>
        <div>
          <span>배달</span>
          {item.time}
        </div>
        <div>
          <span>배달팁</span>
          {item.tip}
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
  );
}
