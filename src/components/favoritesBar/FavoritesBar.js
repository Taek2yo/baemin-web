import * as S from "./favoritesStyle";
import Image from "next/image";
import favorite1 from '/public/assets/img/favorite1.png'
import favorite2 from '/public/assets/img/favorite2.png'
import favorite3 from '/public/assets/img/favorite3.png'
import favorite4 from '/public/assets/img/favorite4.png'

export default function FavoritesBar() {
  const line = "1px solid #f0ededd3";
  return (
    <S.Container>
      <S.Box>
        <S.Item>
            <Image src={favorite1} alt="favorite-item" width={27}/>
          <span>포인트</span>
        </S.Item>
        <S.Item line={line}>
        <Image src={favorite2} alt="favorite-item" width={27}/>
          <span>쿠폰함</span>
        </S.Item>
        <S.Item line={line}>
        <Image src={favorite3} alt="favorite-item" width={27}/>
          <span>선물함</span>
        </S.Item>
        <S.Item line={line}>
        <Image src={favorite4} alt="favorite-item" width={27}/>
          <span>찜</span>
        </S.Item>
      </S.Box>
    </S.Container>
  );
}
