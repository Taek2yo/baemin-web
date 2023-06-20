"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'none';
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #fff;
  align-items: center;
  padding-top: 10px;
  .header-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto;
    padding-right: 30px;
  }
`;

export const RightBtn = styled.span`
  font-family: "NanumGothic";
  color: #d3d3d3;
  font-weight: bold;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin-top: 30px;
`

export const Item = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  .title{
    color: black;
    font-weight: bold;
    font-size: 16px;
  }
  .sub{
    margin-right: 7px;
    color: gray;
  }
`;

export const Box = styled.div`
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin-top: 30px;
  padding: 15px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-left: 15px;
  }
  .disc{
    margin-left: 15px;
    font-size: 12px;
    color: gray;
  }
`

export const AccountBox = styled.div`
  display: flex;
  color: gray;
  gap: 10px;
  font-family: "NanumGothic";
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .bar {
    font-size: 12px;
    color: #d3d3d3;
  }
  .out {
    cursor: pointer;
  }
`;

export const HiddenLabel = styled.label`
  border-radius: 100%;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow : hidden;
  object-fit: cover;
  cursor: pointer;
`;