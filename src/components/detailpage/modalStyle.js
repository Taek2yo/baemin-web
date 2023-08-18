import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  /* padding: 30px; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  span{
    font-weight: bold;
  }
  p{
    color: #a2a2a2;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-top : 1px solid #a2a2a2;
`
export const Btn = styled.div`
  cursor: pointer;
  width: 100%; 
  padding: 10px;
  border-left : 1px solid #a2a2a2;
  text-align: center;
  &.cancle-btn {
    border: none;
  }
`;

