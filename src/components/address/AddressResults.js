'use client'
import * as S from "./resultsStyle";
export default function AddressResults({ item, section, setSection }) {
  const handleContainerClick = () => {
    setSection({
      sectionName: 'add-detail',
      itemData: {
        roadAddr: item.roadAddr,
        roadAddrPart1: item.roadAddrPart1,
      },
    });
  };
  return (
    <S.Container onClick={()=>{handleContainerClick()}}>
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
