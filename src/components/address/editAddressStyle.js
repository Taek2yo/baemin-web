"use client";
import styled from "styled-components";

const SharedStyle = styled.div`
  background-color: white;
  height: 40px;
  padding: 20px;
  margin-top: ${({ marginTop }) => marginTop || 10}px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  gap: 10px;
`;
export const Home = styled(SharedStyle)``;

export const Company = styled(SharedStyle)`
  margin-top: 2px;
`;

export const Address = styled(SharedStyle)`
  margin-top: 2px;
  .detail {
    font-size: 14px;
    color: #a2a2a2;
    font-weight: normal;
  }
  padding-top: 35px;
  padding-bottom: 35px;
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const SelectedAddress = styled.div`
  border-radius: 2px;
  background-color: #eee8e1;
  color: #c9ac95;
  font-size: 10px;
  padding: 5px;
`;

export const BtnWrap = styled.div`
  display  : flex;
  align-items: center;
  gap: 10px;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 12px;
  padding: 6px 10px 6px 10px;
  cursor: pointer;
`;