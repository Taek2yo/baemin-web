import styled, { keyframes, css } from "styled-components";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const Container = styled.div`
  font-family: "NanumGothic";
  background-color: #ECECEC;
  position: fixed;
  bottom: 0;
  width: 500px;
  height: 0;
  z-index: 9999;
  overflow: hidden;
  transition: height 0.3s ease;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &.open {
    height: 96vh;
    animation: ${slideUpAnimation} 0.3s ease forwards ;
  }
  ${props =>
    !props.isOpen &&
    css`
      animation: ${slideDownAnimation} 0.3s ease forwards;
  `}
`;

export const BottomSheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 15px 15px;
  background-color: white;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  & > span{
    cursor: pointer;
  }
`;

export const DragBar = styled.div`
  padding: 0px 10px 10px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Touch = styled.div`
  border: 2.5px solid #d3d3d3;
  border-radius: 20px;
  width: 45px;
  cursor: pointer;
`
export const EmptyDiv = styled.div`
  width: 35px;
`
export const HeaderWrap = styled.div`
  width: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  .edit{
    width: 35px;
    cursor: pointer;
  }
`;

export const Back = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  width: 410px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchSection = styled.div`
  background-color: white;
  padding: 0px 15px 12px 15px;
`;

export const SearchInput = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 42px;
  background-color: #f0ededd3;
  cursor: pointer;
  display: flex;
  align-items: center;
  .placeholder{
    color: #a2a2a2;
  }
`

export const SearchIcon = styled.span`
  margin-left: 15px;
  margin-right: 10px;
  font-size: 18px;
  color: gray;
`;

export const CurrentLocation = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 15px 20px;
  box-shadow: 0 4px 4px -4px #a3a3a3;
  cursor: pointer;
  .set{
    margin-left: 5px;
  }
  .arrow{
    color: #a2a2a2;
    font-weight: bold;
  }
`

export const CurrentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MyHome = styled.div`
  width: 100%;
  margin-top: 10px;
  background-color: white;
`;

export const MyHomeAddress = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 5px;
  .address-detail{
    color: gray;
  }
`;

export const AddHome = styled.span`
  font-weight: bold;
  font-size: 17px;
`;

export const CheckBox = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const AddressList = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background-color: white;
  margin-top: 1px;
  box-shadow: 0 4px 4px -4px #a3a3a3;
  cursor: pointer;
`;