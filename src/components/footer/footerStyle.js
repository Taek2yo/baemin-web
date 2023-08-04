"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 90px;
  background-color: white;
  box-shadow: 0px -5px 5px -2px #b3b3b3;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  font-family: "NanumGothic";
  gap: 10px;
  position: fixed;
  bottom: 0;
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 12px;
  color: #a2a2a2;
  font-weight: bold;
  gap: 4px;
  padding: 10px;
  align-items: center;
  height: 50px;
`;

export const HomeBtn = styled.div`
  border: 1px solid black;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #2ac1bc;
  font-size: 27px;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  box-shadow: 1px 2px 1px 1.5px gray;
  position: relative;
  bottom: 10px;
  z-index: 1;
`;
