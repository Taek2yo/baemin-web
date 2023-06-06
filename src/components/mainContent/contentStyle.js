"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  gap: 12px;
  height: 210px;
`;

export const BaeminOne = styled.div`
  width: 234px;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 2px 2px -1px gray;
`;

export const OneTitle = styled.div`
  padding: 7px 5px 5px 15px;
  display: flex;
  text-align: center;
  color: white;
  gap: 5px;
`;

export const OneTitleSide = styled.div`
  width: 18px;
  height: 14px;
  background-color: #e00095;
  border-radius: 5px;
  box-shadow: 0 5px 5px -3px #59003b;
  padding: 3px;
  margin-top: 7px;
`;

export const Content = styled.div`
  font-family: "NanumGothic";
  color: #575759;
  padding: 0px 5px 5px 15px;
  position: absolute;
  left: 0;
  z-index: 2;
`;

export const Character = styled.div`
  height: 136px;
  border-radius: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
  }
`;

export const Delivery = styled.div`
  width: 234px;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 2px 2px -1px gray;
  background-image: url("/assets/img/delivery.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const DeliveryTitle = styled.div`
  padding: 15px;
  display: flex;
  text-align: center;
  font-size: 29px;
  font-weight: 600;
  color: #2f2f2f;
  width: 75px;
`;

export const TakeOut = styled.div`
  height: 85px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 2px -1px gray;
  margin: 0 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  img {
    bottom: 0;
    height: 100%;
    padding-right: 10px;
  }
`;

export const TextWrap = styled.div`
  height: 100%;
`;

export const TakeOutTitle = styled.div`
  padding: 15px 0px 5px 15px;
  display: flex;
  text-align: center;
  font-size: 29px;
  font-weight: 600;
  color: #2f2f2f;
  width: 75px;
`;

export const TakeOutContent = styled.div`
  font-family: "NanumGothic";
  color: #575759;
  padding-left: 15px;
`;


export const SubContents = styled.div`
    display: flex;
    margin: 10px;
    gap: 10px;
`;

export const SubItem = styled.div`
    width: 120px;
    height: 75px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 2px 2px -1px gray;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    img{
        width: 58px;
        height: 42px;
    }
`;


export const Banner = styled.div`

`;