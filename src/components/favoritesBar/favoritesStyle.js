'use client'
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content: center;
    align-items : center;
`;


export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 480px;
    margin: 15px 12px 15px 12px;
    height: 80px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px gray;
    display: flex;
    font-family: 'NanumGothic';
`

export const Item = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    border-left: ${props => props.line};
`;