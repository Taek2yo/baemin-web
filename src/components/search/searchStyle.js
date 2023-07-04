import styled from "styled-components";

export const Container = styled.div`
  font-family: "NanumGothic";
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3px 10px 3px;
  width: 100%;
`;

export const Back = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

export const Searchsection = styled.form`
  background-color: #f5f5f5;
  width: 450px;
  height: 35px;
  margin: 0px auto;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: 0px;
    font-size: 16px;
    outline: none;
    background-color: #f5f5f5;
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`;

export const SearchIcon = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;
  color: gray;
`;

export const ClearButton = styled.span`
  position: absolute;
  right: 3%;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: #ccc;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;


export const RecentSearches = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const DeleteBtn = styled.div`
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 7px;
    font-size: 14px;
`;