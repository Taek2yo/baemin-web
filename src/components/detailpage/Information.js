import * as S from "./detailStyle"

export default function Information(){
    const Excontent = `저희 가게는 고객들에게 최상의 서비스와 품질을 제공하는 곳입니다.
    \n우리의 목표는 맛있는 음식과 함께 고객들에게 즐거운 식사 경험을 선사하는 것입니다.
    \n신선한 재료와 정성 가득한 조리법으로 만들어지는 요리들은 언제나 최고의 맛을 보장합니다.
    \n저희 가게를 방문해 주시면 맛있는 음식과 함께 특별한 시간을 보낼 수 있습니다.`;

    return(
        <S.TabContainer>
            <S.Introduction>
                <S.InfoTitle>가게 소개</S.InfoTitle>
                <S.IntroContent>{Excontent}</S.IntroContent>
            </S.Introduction>
            <S.SalesInfo>
                <S.InfoTitle padding={"15px 0 0 0"}>영업 정보</S.InfoTitle>
                <S.KeyValueWrap padding={"10px 0 10px 0"}>
                <S.InfoKeyWrap>
                  <span>상호명</span>
                  <span>운영시간</span>
                  <span>휴무일</span>
                  <span>전화번호</span>
                  <span>배달지역</span>
                  <span>편의시설</span>
                </S.InfoKeyWrap>
                <S.InfoValueWrap>
                  <span>베이크팡</span>
                  <span>매일 - 오전 9:00 ~ 오후 9:40</span>
                  <S.Time>
                    <span>소요 예상</span>
                  </S.Time>
                  <span>050-1234-5678</span>
                  <span>전지역</span>
                  <span>주차</span>
                </S.InfoValueWrap>
                </S.KeyValueWrap>
            </S.SalesInfo>
        </S.TabContainer>
    )
}