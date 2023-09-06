"use client";
import * as S from "./editAddressStyle";
import Image from "next/image";
import pin from "/public/assets/img/pin.png";
export default function EditAddressItem({ item }) {
    return (
      <S.Address>
        <Image src={pin} alt="pin-icon" width={30} />
        <S.AddressWrap>
          <S.TitleWrap>
            <span>{item.Addr}</span>
            {item.isSelected ? (
              <S.SelectedAddress>현 설정 주소</S.SelectedAddress>
            ) : null}
          </S.TitleWrap>
  
          <span className="detail">
            {item.Addr} {item.addrDetail}
          </span>
          <S.BtnWrap>
            {item.isSelected ? (
              <S.Btn>수정</S.Btn>
            ) : (
              <>
                <S.Btn>수정</S.Btn>
                <S.Btn>삭제</S.Btn>
              </>
            )}
          </S.BtnWrap>
        </S.AddressWrap>
      </S.Address>
    );
  }