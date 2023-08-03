import styled from "styled-components";

export const Header = styled.div`
  font-family: "NanumGothic";
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const Address = styled.span`
  font-family: 'NanumGothic';
  font-size: 16px;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 5px;
  padding-left: 7px;
  margin-top: -8px;
  p{
    font-size: 13px;
  }
  cursor: pointer;
`;