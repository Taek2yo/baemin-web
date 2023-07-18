import styled from "styled-components";

export const SearchSection = styled.div`
  background-color: white;
  padding: 0px 15px 12px 15px;
`;

export const SearchForm = styled.form`
  border-radius: 10px;
  width: 100%;
  height: 42px;
  background-color: #f0ededd3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    outline: none;
    background-color: #f0ededd3;
    border-radius: 10px;
    caret-color: #2ac1bc;
    font-family: "NanumGothic";
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
    padding: 0;
  }
  &:focus-within {
    border: 2px solid black;
    margin: -2px;
  }
  input::placeholder{
    color: #a2a2a2;
  }
`;

export const SearchIcon = styled.div`
  margin-left: 15px;
  margin-right: 8px;
  font-size: 18px;
  color: gray;
`;

export const CurrentLocation = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 15px 20px;
  box-shadow: 0 4px 4px -4px #a3a3a3;
  cursor: pointer;
  .set{
    margin-left: 5px;
  }
  .arrow{
    color: #a2a2a2;
    font-weight: bold;
  }
 
`;

export const CurrentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Guide = styled.div`
  padding: 35px;
  display: flex;
  justify-content: space-between;
`;

export const GuideWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const GuideTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
`

export const GuideLi = styled.li`
  margin-top: 10px;
`;

export const GuideEx = styled.span`
  color: #a2a2a2;
`;

export const ImageWrap = styled.div`
  margin-top: 15px;
`;