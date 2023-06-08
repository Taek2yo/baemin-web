"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  font-family: "NanumGothic";
  font-weight: bold;
`;

export const Title = styled.div`
  font-size: 23px;
  display: flex;
  text-align: center;
  align-items: center;
  .title {
    padding: 12px 10px 10px;
  }
  .title-ad {
    font-size: 14px;
    font-family: "NanumGothic";
    cursor: pointer;
  }
  .question-mark {
    color: black;
    margin-left: 5px;
    cursor: pointer;
  }
`;
export const Wrap = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-left: 10px;
  gap: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// ---- Quick Item ---- //

export const Box = styled.div``;

export const thumbnail = styled.div`
  position: relative;
  width: 180px;
  height: 150px;
  img {
    position: absolute;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  margin: 8px 8px 8px 0px;
  align-items: center;
  .item-title {
    display: inline-block;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .star {
    color: #f5c220;
    margin-left: 5px;
  }
`;

export const TimeTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: normal;
  span {
    color: gray;
    margin-right: 5px;
  }
`;

export const NewCouponeWrap = styled.div`
  display: flex;
  gap: 7px;
`;

export const New = styled.div`
  width: 35px;
  height: 20px;
  font-size: 12px;
  border-radius: 5px;
  color: #e00095;
  background-color: pink;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Coupone = styled.div`
  width: 35px;
  height: 20px;
  font-size: 12px;
  border-radius: 5px;
  color: orange;
  background-color: #f8e4cd;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
