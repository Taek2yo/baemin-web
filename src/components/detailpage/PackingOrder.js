import * as S from "./detailStyle";
import Image from "next/image";
import question from "/public/assets/img/questionmark.png"

export default function PackingOrder(){
    return(
        <>
            <S.InfoKeyWrap>
              <span>최소주문금액</span>
              <span>이용방법</span>
              <span>픽업시간</span>
              <span>위치안내</span>
              <span>결제방법</span>
            </S.InfoKeyWrap>
            <S.InfoValueWrap>
              <span>없음</span>
              <span>포장</span>
              <S.Time>
                <span>소요 예상</span>
                <span className="question-mark">
                  <Image src={question} alt="question-mark"/>
                </span>
              </S.Time>
              <span>1</span>
              <span>바로결제</span>
            </S.InfoValueWrap>
        </>
    )
}