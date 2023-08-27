import styled, { css } from "styled-components";
import Link from "next/link";
export const Header = styled.div`
  font-family: "NanumGothic";
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    cursor: pointer;
  }
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const CartLink = styled(Link)`
  position: relative; 
`;

export const CartQuantity = styled.div`
  background-color: #FF00FF;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: white;
  font-size: 7px;
  font-weight: bold;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:-2px;
  right: 0;
  z-index: 99;
`

export const Address = styled.span`
  font-family: "NanumGothic";
  font-size: 16px;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 5px;
  padding-left: 7px;
  margin-top: -8px;
  background-color: white;
  font-weight: bold;
  p {
    font-size: 13px;
  }
  cursor: pointer;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  background-color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    min-width: 500px;
    height: auto;
    background-color: white;
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
  z-index: 1;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 100px;
`;

export const CategoryWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  span {
    font-size: 15px;
    font-weight: bold;
  }
`;
export const DeliveryCategoryContainer = styled.div`
  width: 500px;
  font-family: "NanumGothic";
`;
export const SelectTitle = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1.7px solid #d3d3d3;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  cursor: pointer;
  font-size: 15px;
  padding: 7px;
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

export const ItemContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  border-bottom: 1px solid #d3d3d3;
  font-family: "NanumGothic";
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ItemImage = styled.div`
  width: 85px;
  height: 90px;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContentTitle = styled.div`
  font-weight: bold;
`;

export const ItemStar = styled.div`
  .score {
    font-weight: bold;
  }
  .star {
    color: #f5c220;
  }
`;

export const ItemDesc = styled.div`
  color: #a2a2a2;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemDeliveryTime = styled.div``;

export const ItemTip = styled.div``;

export const MinimumOrder = styled.div`
  .minimum {
    color: #a2a2a2;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecommendContainer = styled.div`
  display: flex;
  padding: 5px;
  gap: 7px;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RecommendItem = styled.div`
  border-radius: 12px;
  cursor: pointer;
  img{
    object-fit: cover;
    border-radius: 12px;
  }
`;
