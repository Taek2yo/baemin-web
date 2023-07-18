import * as S from "./resultsStyle";
export default function AddressResults({ item }) {
  return (
    <S.Container>
        <S.ContentWrap>
      <S.RoadAddrTitle>{item.roadAddr}</S.RoadAddrTitle>
      <S.Wrap>
        <S.RoadName><span>도로명</span></S.RoadName>
        <S.RoadAddr>{item.roadAddrPart1}</S.RoadAddr>
      </S.Wrap>
      </S.ContentWrap>
    </S.Container>
  );
}
