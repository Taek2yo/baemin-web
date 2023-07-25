import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #2ac1bc;
  position: sticky;
  top: 0;
  z-index: 99;
  color: white;
`;

export const Title = styled.div`
  font-size: 25px;
  font-family: "Hanna";
  padding-top: 10px;
  text-align: center;
  display: list-item;
  span{
    font-size: 20px;
  }
`;

export const AddressBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 12px 5px 12px;
  align-items: center;
`;

export const Address = styled.span`
  color: white;
  font-family: 'NanumGothic';
  font-size: 20px;
  font-weight: 550;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 5px;
  p{
    font-size: 13px;
  }
  cursor: pointer;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  img{
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 12px;
  background-color: #2ac1bc;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;


export const Searchsection = styled.div`
  background-color: white;
  width: 450px;
  height: 18px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 5px 5px -5px #5B5B5B;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.span`
  color: #2ac1bc;
  padding-left: 5px;
`;

export const Placeholder = styled.span`
  color: gray;
  font-family: none;
  font-size: 12px;
  padding-left: 5px;
`

