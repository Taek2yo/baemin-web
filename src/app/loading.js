import * as S from "./loadingStyle"
import Image from "next/image"
import loading from '/public/assets/img/loading.png'
export default function Loading(){
    return(
        <S.BackGround>
             <Image src={loading} alt="loading" priority/>
        </S.BackGround>
    )
}