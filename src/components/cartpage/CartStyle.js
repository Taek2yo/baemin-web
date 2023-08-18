"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #f0ededd3;
  font-family: "NanumGothic";
  
`;

export const Header = styled.div`
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Back = styled.div`
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  img{
    width: 100%;
    object-fit: cover;
    margin-top: 3px;
  }
`;

export const HeaderBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PageTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
`;