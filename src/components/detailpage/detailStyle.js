"use client";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  font-family: "NanumGothic";
  display: flex;
  padding: 18px 20px 5px 3px;
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
  .point{
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
`;


export const Carousel = styled.div`
  width: 100%;
  height: 300px;
  background-color: skyblue;
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
  margin-top : 10px;
  .text{
    font-size: 18px;
    color: #A2A2A2;
  }
  .bar{
    color: #d3d3d3;
  }
`

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
`

export const InfoBox = styled.div`
  width: 100%;
  border-top : 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
`;

export const KeyValueWrap = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const InfoKeyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InfoValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  .question-mark {
    height: 15px;
    margin-left: 5px;
    cursor: pointer;
  }
`