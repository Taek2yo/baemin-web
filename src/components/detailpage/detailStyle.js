"use client";
import styled, { css } from "styled-components";

export const Header = styled.div`
  font-family: "NanumGothic";
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .star {
    color: #f5c220;
    font-size: 32px;
  }
  .point {
    font-size: 24px;
    font-weight: bold;
    margin-top: 3px;
  }
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const StoreName = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export const Container = styled.div`
  font-family: "NanumGothic";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

export const Carousel = styled.div`
  width: 100%;
  display: flex;
  overflow-x:auto; 
  white-space:nowrap;
  &::-webkit-scrollbar {
    display: none;
    }
  img{
    width: 100%;
    height: 100%;
  }
`;

export const ThumbnailCounter = styled.div`
  font-size: 10px;
  width: 50px;
  height: 10px;
  background-color: black;
  text-align: center;
  padding: 4px;
  border-radius: 12px;
  opacity: 0.5;
  color: white;
  position: relative;
  align-self: flex-start;
  left: calc(100% - 70px);
  bottom: 35px;
  z-index  : 1;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 25px 0 15px 0;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  .text {
    font-size: 18px;
    color: #a2a2a2;
  }
  .bar {
    color: #d3d3d3;
  }
`;

export const OptionWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const OrderMethod = styled.div`
  display: flex;
  margin-top: 28px;
  width: 100%;
  justify-content: space-around;
`;

export const Method = styled.div`
  padding: 12px;
  cursor: pointer;

    ${(props) =>
      props.active
        ? css`
            font-weight: bold;
            border-bottom: 3px solid black;
            color: black;
          `
        : css`
            color: #a2a2a2;
          `}
`;

export const InfoBox = styled.div`
  width: 100%;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
`;

export const KeyValueWrap = styled.div`
  padding: ${props => props.padding};
  display: flex;
  gap: 20px;
`;

export const InfoKeyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  .question-mark {
    height: 15px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const MenuTabWrap = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const MenuTab = styled.div`
  width: 100%;
  height: 25px;
  padding: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ active }) => (active ? "black" : "#a2a2a2")};
  box-shadow: ${({ active }) =>
    active ? "0px 2px 0px 0px black inset" : "none"};
  border-right: ${({ tabType, active }) =>
    (tabType === "Menu" || tabType === "Info") && active
      ? "1px solid #d3d3d3"
      : "none"};
  border-left: ${({ tabType, active }) =>
    (tabType === "Info" || tabType === "Review") && active
      ? "1px solid #d3d3d3"
      : "none"};
  border-bottom: ${({ active }) => (active ? "none" : "1px solid #d3d3d3")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
`;

export const TabWrap = styled.div`
  display: flex;
`;

export const TabContainer = styled.div`
  padding: 10px;
`;

export const DescBox = styled.div`
  width: 100%;
  .up {
    transform: rotate(180deg);
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  border: 3px solid #b5966f;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b5966f;
  padding: 18px;
  cursor: pointer;
`;

export const SignatureTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 10px;
`

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100px;
`

export const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 18px;

`;

export const ItemDesc = styled.div`
  font-size: 15px;
  color: #a2a2a2;
  width: 280px;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemImage = styled.div`
  width: 110px;
  height: 105px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 17px;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`

export const IntroContent = styled.div`
  white-space: pre-line;
  margin-top: 20px;
`

export const SalesInfo = styled.div`

`

export const Date = styled.div`
  color: #a2a2a2;
  font-size: 12px;
`

export const GraphContainer = styled.div`

`