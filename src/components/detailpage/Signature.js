'use client'
import * as S from "./detailStyle"
import MenuDesc from "./MenuDesc"
export default function Signature (){
    return(
        <S.TabContainer>
            <S.DescBox>
                <MenuDesc/>
            </S.DescBox>

        </S.TabContainer>
    )
}