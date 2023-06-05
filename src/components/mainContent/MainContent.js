import * as S from "./contentStyle";
import one from "/public/assets/img/baeminone.jpg";
import Image from "next/image";
import baeminy from "/public/assets/img/baeminy.png";
import takeout from '/public/assets/img/takeout.png'
export default function MainContent() {
  return (
    <>
      <S.Container>
        <S.BaeminOne>
          <S.OneTitle>
          <Image 
            src={one} 
            alt="baeminOne" 
            width={75} 
            placeholder="blur" />
            <S.OneTitleSide>쨘!</S.OneTitleSide>
          </S.OneTitle>
          <S.Content>
            한 번에 한 집만 <br />
            빠르게 배달해요!
          </S.Content>
          <S.Character>
          <Image
            src={baeminy}
            alt="baeminy"
            width={100}
            height={100}
          />
          </S.Character>
        </S.BaeminOne>
        <S.Delivery>
            <S.DeliveryTitle>배달</S.DeliveryTitle>
            <S.Content>
            세상은 넓고 <br />
            맛집은 많다
            </S.Content>
        </S.Delivery>
      </S.Container>
      <S.TakeOut>
            <S.TextWrap>
                <S.TakeOutTitle>포장</S.TakeOutTitle>
                <S.TakeOutContent>가까운 가게는 직접 가지러 가지요</S.TakeOutContent>
            </S.TextWrap>
            <Image
            src={takeout}
            alt="takeout icon"
            width={100}
            height={100}
          />
      </S.TakeOut>
    </>
  );
}
