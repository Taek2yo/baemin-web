import * as S from "./contentStyle";
import one from "/public/assets/img/baeminone.jpg";
import Image from "next/image";
import baeminy from "/public/assets/img/baeminy.png";
import takeout from "/public/assets/img/takeout.png";
import sub1 from "/public/assets/img/1.webp";
import sub2 from "/public/assets/img/2.webp";
import sub3 from "/public/assets/img/3.webp";
import sub4 from "/public/assets/img/4.webp";

export default function MainContent() {
  const subcontents = [
    {
      img: sub1,
      title: "쇼핑라이브",
    },
    {
      img: sub2,
      title: "전국별미",
    },
    {
      img: sub3,
      title: "선물하기",
    },
    {
      img: sub4,
      title: "만화경",
    },
  ];
  return (
    <>
      <S.Container>
        <S.BaeminOne>
          <S.OneTitle>
            <Image src={one} alt="baeminOne" width={75} placeholder="blur" />
            <S.OneTitleSide>쨘!</S.OneTitleSide>
          </S.OneTitle>
          <S.Content>
            한 번에 한 집만 <br />
            빠르게 배달해요!
          </S.Content>
          <S.Character>
            <Image src={baeminy} alt="baeminy" width={100} height={100} />
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
        <Image src={takeout} alt="takeout icon" width={100} height={100} />
      </S.TakeOut>
      <S.SubContents>
        {subcontents.map((item, index) => {
          return (
            <S.SubItem key={index}>
              <Image src={item.img} width={50} alt="subitem" />
              <div>{item.title}</div>
            </S.SubItem>
          );
        })}
      </S.SubContents>
      <S.Banner>

      </S.Banner>
    </>
  );
}
