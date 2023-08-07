import styled from "styled-components";

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
`;

export const Back = styled.div`
  cursor: pointer;
`;

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
`

export const CategoryWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 9px;
  span{
    font-size: 15px;
    font-weight: bold;
  }
`;

