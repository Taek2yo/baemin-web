import styled from "styled-components";

export const Container = styled.div`
  font-family: "NanumGothic";
  height: 100vh;
`;
export const AddrSection = styled.div`
  width: 500px;
  background-color: white;
  margin-top: 10px;
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
`;

export const Address = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin-top: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RoadName = styled.div`
  border-radius: 5px;
  background-color: #eeeeee;
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  text-align: center;
`;

export const RoadAddr = styled.span`
  font-size: 16px;
  margin-left: 7px;
`;

export const InputWrap = styled.div`
  margin: 5px 15px 15px 15px;
`;

export const DetailInput = styled.input`
  font-size: 15px;
  outline: none;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  padding: 10px;
  width: calc(100% - 23px);
`;

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  padding: 0px 15px 15px 15px;
`;

export const Category = styled.div`
  width: 100%;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Confirm = styled.button`
  font-family: "NanumGothic";
  font-weight: bold;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: #2ac1bc;
  width: calc(100% - 24px);
  cursor: pointer;
  height: 50px;
  position: fixed;
  bottom: 50px;
`;
