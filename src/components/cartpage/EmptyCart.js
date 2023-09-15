import * as S from "./CartStyle";
import empty from "/public/assets/img/empty.png";
import plus from "/public/assets/img/plus.png";
import Image from "next/image";
import Link from "next/link";
export default function EmptyCart() {
  return (
    <S.EmptyContainer>
      <Image
        src={empty}
        alt="empty-icon"
        style={{ marginBottom: "35px" }}
        quality={75}
      />
      <S.EmptyText>장바구니가 텅 비었어요</S.EmptyText>
      <Link href="/delivery">
        <S.EmptyBtn>
          <Image src={plus} alt="plus-icon" width={18} />
          <span>더 담으러 가기</span>
        </S.EmptyBtn>
      </Link>
    </S.EmptyContainer>
  );
}
