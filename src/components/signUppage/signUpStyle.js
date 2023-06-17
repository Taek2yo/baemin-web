"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  }
`;

export const submitBtn = styled.button`
  border: none;
  background-color: #fff;
  font-size: 17px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const InputBox = styled.form`
  width: 100%;
  margin-top: 150px;
  .label-text{
    display: block;
    font-family: "NanumGothic";
    font-size: 17px;
    margin-top: 10px;
  }
  .error-message{
     display: inline-block;
    font-family: "NanumGothic";
    color: red;
    margin-top: 10px;
  }
  .ok-message{
     display: inline-block;
    font-family: "NanumGothic";
    color: green;
    margin-top: 10px;
  }
`;

export const Input = styled.input`
   display: block;
  width: 100%;
  height: 45px;
  font-size: 16px;
  padding: 5px 0px 5px 0px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  ::placeholder {
    color: #d3d3d3;
    font-family: "NanumGothic";
  }
  :focus {
    outline: none;
    border-bottom: 1px solid gray;
  }
`;
