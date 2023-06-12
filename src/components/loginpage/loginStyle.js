"use client";
import styled from "styled-components";

export const Container = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;

export const Cancle = styled.div`
  display: flex;
  float: left;
`;

export const InputBox = styled.form`
  width: 100%;
  margin-top: 150px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 16px;
  padding: 5px 0px 5px 0px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  margin-top: 20px;
  ::placeholder {
    color: #d3d3d3;
    font-family: "NanumGothic";
  }
  :focus {
    outline: none;
    border-bottom: 1px solid gray;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  background-color: #2ac1bc;
  color: white;
  font-weight: bold;
  font-family: "NanumGothic";
  font-size: 17px;
  border: none;
  border-radius: 5px;
  height: 50px;
  margin-top: 40px;
  cursor: pointer;
`;

export const FindIdBox = styled.div`
  display: flex;
  color: gray;
  gap: 10px;
  font-family: "NanumGothic";
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .bar {
    font-size: 12px;
    color: #d3d3d3;
  }
  .find {
    cursor: pointer;
  }
`;

export const SocialBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-family: "NanumGothic";
  padding: 7px;
  margin-top: 150px;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;

export const SignUp = styled.div`
  font-family: "NanumGothic";
  text-align: center;
  margin-top: 15px;
  .btn {
    margin-left: 5px;
    color: #2ac1bc;
  }
  cursor: pointer;
`;
