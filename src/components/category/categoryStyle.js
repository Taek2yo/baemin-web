"use client";
import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    padding: 10px 10px 5px 10px;
    gap : 10px;
    overflow-x:auto; 
    white-space:nowrap; 
    &::-webkit-scrollbar {
      display: none;
     }
    
`;



export const Box = styled.div`
    padding: 7px;
    border: 1px solid black;
    border-radius: 20px;
    border-color: #2ac1bc;
    font-family: none, sans-serif;
    font-size: 12px;
    line-height: 20px;
    background-color: #fff;
    box-shadow: 0 1.5px 1.5px -1px gray;
    cursor: pointer;
`;

export const HashIcon = styled.span`
    color: #2ac1bc;
    padding-left: 2px;
    padding-right: 4px;
    font-size: 13px;
    font-weight: bold;
    
`;

export const CategoryText = styled.span`
    line-height: 20px;
    font-size: 13px;
    padding-right: 4px;
    color: #575759;
    font-family: 'NanumGothic';
`