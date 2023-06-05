import * as S from './categoryStyle'

export default function CategoryItem({item}){
    return(
    <S.Box>
        <S.HashIcon>#</S.HashIcon>
        <S.CategoryText>{item.title}</S.CategoryText>
    </S.Box>
    )
}