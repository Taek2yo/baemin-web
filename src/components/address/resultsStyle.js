import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background-color: white;
  margin-bottom: 3px;
  margin-top: 2px;
  cursor: pointer;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RoadAddrTitle = styled.span`
  font-weight: bold;
`;

export const RoadName = styled.div`
  border-radius: 5px;
  background-color: #eeeeee;
  padding: 2px 5px 2px 5px;
  span {
    font-size: 12px;
    color: #a2a2a2;
  }
`;

export const RoadAddr = styled.span`
  margin-left: 7px;
`;
