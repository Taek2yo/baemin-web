"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f0ededd3;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #fff;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-top: 10px;
  .header-title {
    font-size: 18px;
    font-family: "none";
    font-weight: bold;
    margin-bottom: 7px;
  }
`;

export const Benefit = styled.div`
  border-radius : 12px;
  background-color: #f0ededd3;
  padding: 7px;
  font-size: 12px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 4px;
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  .benefit {
    font-family: "NanumGothic";
  }
  .title {
    font-family: "NanumGothic";
    color: black;
    font-size: 17px;
  }
  cursor: pointer;
`;

export const RightBtn = styled.span`
  font-family: "NanumGothic";
  color: #d3d3d3;
  font-weight: bold;
`;

export const Accounts = styled.div`
  font-family: "NanumGothic";
  margin-left: 10px;
  font-size: 19px;
  .grade {
    color: #d3d3d3;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: calc(33.33% - 3px);
  height: 105px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5px;
  span {
    font-family: "NanumGothic";
  }
  cursor: pointer;
`;

export const AddContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background-color: #fff;
  img {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 8px 0px 10px 0px;
  }
  cursor: pointer;
`;

export const CartoonBox = styled.div`
  margin: 25px 0px 7px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
`;

export const CartoonBtnWrap = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  padding: 5px;
  span {
    font-family: "NanumGothic";
    font-size: 15px;
    margin-left: 4px;
    margin-right: 2px;
  }
  cursor: pointer;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: "NanumGothic";
    color: gray;
  }
  .text {
    color: black;
    font-weight: bold;
  }
  .emphasize {
    color: #2a72da;
    font-weight: bold;
  }
  .title {
    font-size: 17px;
    color: black;
  }
  .content {
    margin-top: 5px;
    font-size: 15px;
  }
`;

export const Tip = styled.div`
  border-radius: 10px;
  background-color: #f8e4cd;
  color: brown;
  width: 100px;
  font-size: 12px;
  padding: 3px;
  text-align: center;
  font-family: "NanumGothic";
  margin-left: 7px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
