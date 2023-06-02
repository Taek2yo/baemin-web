'use client'
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 150px;
    background-color: #2AC1BC;
    text-align: center;
    border-bottom-left-radius : 20px;
    border-bottom-right-radius : 20px;
`

export const Title = styled.div`
   color: white;
   font-size: 25px;
   font-family: 'Hanna';
   padding-top: 10px;
`

export const AddressBtnWrap = styled.div`
   display : flex;
   justify-content: space-between;
   padding: 20px;
   align-items: center;
`

export const Address = styled.span`
   color: white;
   font-family: none;
   font-size: 20px;
   font-weight: 550;
   
`

export const BtnWrap = styled.div`
   display : flex;
   gap: 12px;
`

export const Searchsection = styled.input`
   width: 90%;
   margin: 0 auto;
   padding: 8px;
`