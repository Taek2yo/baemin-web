"use client";
import * as S from "./editAddressStyle";
import Image from "next/image";
import pin from "/public/assets/img/pin.png";
import { Btn, ModalBtnWrapper, Message } from "./confirmModalStyle";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
export default function EditAddressItem({ item, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleDeleteClick = () => {
    onDelete();
  };
  return (
    <>
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
                <S.Btn
                  onClick={() => {
                    openModal();
                  }}
                >
                  삭제
                </S.Btn>
              </>
            )}
          </S.BtnWrap>
        </S.AddressWrap>
      </S.Address>
      {showModal && (
        <ConfirmModal closeModal={closeModal}>
          <Message>
            <div>이 주소를 삭제하시겠습니까?</div>
          </Message>
          <ModalBtnWrapper>
            <Btn onClick={closeModal} className="cancle-btn">
              취소
            </Btn>
            <Btn
              onClick={() => {
                handleDeleteClick();
                closeModal();
              }}
            >
              <span>삭제</span>
            </Btn>
          </ModalBtnWrapper>
        </ConfirmModal>
      )}
    </>
  );
}
