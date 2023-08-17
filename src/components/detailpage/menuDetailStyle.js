"use client";
import styled from "styled-components";

export const Container = styled.div`
  font-family: "NanumGothic";
  background-color: #f0ededd3;
  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #d3d3d3;
    border-radius: 7px;
  }
 
`;

export const Header = styled.div`
position: sticky;
top: 0;
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const HeaderBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuDetailImage = styled.div`
  width: 100%;
  height: 280px;
  img{
    object-fit: cover;
  }
`;

export const MenuTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 4px;
`;

export const MenuDetailFooter = styled.div`
  bottom: 0;
  position: fixed;
  width: 500px;
  height: 80px;
  display: flex;
  border-top: 1px solid #a3a3a3;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const MinPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vh;
  gap: 7px;
  .text {
    color: gray;
  }
  .price {
    font-weight: bold;
  }
`;

export const AddCart = styled.div`
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
  background-color: #2ac1bc;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  width: 70vh;
`;

export const Description = styled.div`
  background-color: white;
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const Desc = styled.div`
  color: gray;
  width: 90%;
  padding-top: 10px;
  line-height: 25px;
`;

export const Price = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  font-size: 20px;
`;

export const BasicOptions = styled.div`
  margin-top: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

export const OptionsTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const Required = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #2a76dc;
  background-color: #c8edff;
  border-radius: 12px;
  padding: 6px;
`;

export const Selection = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: gray;
  background-color: #f0ededd3;
  border-radius: 12px;
  padding: 6px;
  span {
    width: 100%;
  }
`;

export const OptionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BasicOptionInput = styled.input`

`;

export const BasicOptionLabel = styled.label`

`;

export const ChekWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
`;

export const AdditionalOptions = styled.div`
  margin-top: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

export const AdditionalInput = styled.input``;

export const Max = styled.span`
  color: #a2a2a2;
  font-size: 14px;
`;


export const MaxSelections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const AdditionalLable = styled.label`
`;

export const OptionPrice = styled.span`
`;


export const Total = styled.div`
  height: 45px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  .total-products{
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Quantity = styled.div`
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  padding: 5px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DecreaseBtn = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #a2a2a2;
  cursor: pointer;
  padding-left: 5px;
`;

export const IncreaseBtn = styled.span`
  font-size: 30px;
  color: #212121;
  font-weight: bold;
  padding-right: 5px;
  cursor: pointer;
`;

export const Warnning = styled.div`
  height: 50px;
  color: #a2a2a2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  padding: 10px;
`;