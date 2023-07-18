import * as S from "./searchAddressStyle"
import guide from "/public/assets/img/guide.png"
import Image from 'next/image';
export default function Guide() {
  const braket = ')';  
  return (
    <S.Guide>
      <S.GuideWrap>
        <S.GuideTitle>이렇게 검색해 보세요</S.GuideTitle>
        <S.GuideLi>도로명 + 건물번호</S.GuideLi>
        <S.GuideEx>예{braket} 배민로 12길 3</S.GuideEx>

        <S.GuideLi>지역명 + 번지</S.GuideLi>
        <S.GuideEx>예{braket} 배민동 12-3</S.GuideEx>

        <S.GuideLi>건물명, 아파트명</S.GuideLi>
        <S.GuideEx>예{braket} 배민아파트 101동</S.GuideEx>
      </S.GuideWrap>
      <S.ImageWrap>
        <Image src={guide} alt="guide" />
      </S.ImageWrap>
    </S.Guide>
  );
}
