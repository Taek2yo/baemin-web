import * as S from "./favoritesStyle";
import Image from "next/image";
export default function FavoritesBar() {
  const line = "1px solid #f0ededd3";
  return (
    <S.Container>
      <S.Box>
        <S.Item>
            <div>안녕</div>
          <span>포인트</span>
        </S.Item>
        <S.Item line={line}>
          <span>쿠폰함</span>
        </S.Item>
        <S.Item line={line}>
          <span>선물함</span>
        </S.Item>
        <S.Item line={line}>
          <span>찜</span>
        </S.Item>
      </S.Box>
    </S.Container>
  );
}
