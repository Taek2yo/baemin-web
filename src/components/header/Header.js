import * as S from "./headerStyle"

export default function Header (){
    return (
        <S.Container>
            <S.Title> 배달의 민족 </S.Title>
            <S.AddressBtnWrap>
                <S.Address>주소시 주소로 ▼</S.Address>
                <S.BtnWrap>
                    <div>ctg</div>
                    <div>alm</div>
                    <div>my</div>
                </S.BtnWrap>
            </S.AddressBtnWrap>
            <S.Searchsection placeholder="막국수? 꼬막무침? 갈비탕?"/>
        </S.Container>
    )
}
