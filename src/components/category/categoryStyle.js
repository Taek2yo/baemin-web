"use client";
import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    padding: 10px 10px 5px 0px;
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
`;

export const HashIcon = styled.span`
    color: #2ac1bc;
    padding-left: 2px;
    padding-right: 4px;
    font-size: 1px;
    font-weight: bold;
    
`;

export const CategoryText = styled.span`
    line-height: 20px;
    font-size: 12px;
    padding-right: 4px;
`