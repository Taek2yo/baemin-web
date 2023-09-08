import React from 'react';
import * as S from './confirmModalStyle'

export default function ConfirmModal({ children }){
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};