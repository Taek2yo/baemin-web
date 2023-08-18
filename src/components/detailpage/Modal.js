import React from 'react';
import * as S from './modalStyle'

export default function Modal({ closeModal, children }){
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};