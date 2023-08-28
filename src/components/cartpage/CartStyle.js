"use client";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #f0ededd3;
  font-family: "NanumGothic";
`;

export const Header = styled.div`
  display: flex;
  padding: 10px 3px 10px 3px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Back = styled.div`
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  img {
    width: 100%;
    object-fit: cover;
    margin-top: 3px;
  }
`;

export const HeaderBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PageTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
`;

/*----- select categories start ----- */
export const SelectTitle = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1.7px solid #d3d3d3;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
`;

export const Title = styled.div`
  cursor: pointer;
  font-size: 15px;
  padding: 7px;
  ${(props) =>
    props.active
      ? css`
          font-weight: bold;
          border-bottom: 3px solid black;
          color: black;
        `
      : css`
          color: #a2a2a2;
        `}
`;
/*--- select categories end ----- */

/* ---- cart item start ------ */

export const ItemCotainer = styled.div`
  background-color: white;
  padding: 15px;
`;

export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 1px;
  background-color: white;
`;

export const StoreName = styled.div`
  font-weight: bold;
  font-size: 17px;
`;

export const DeliveryTime = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  img {
    width: 18px;
    height: 18px;
  }
  font-weight: bold;
`;

export const MenuTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteBtn = styled.div`
  cursor: pointer;
  font-size: 17px;
  color: black;
  img {
    width: 15px;
    height: 15px;
  }
`;

/* -------- Empty Cart ----------- */

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const EmptyText =styled.span`
  color: black;
  font-weight: bold;
  margin-right: 18px;
`;

export const EmptyBtn = styled.div`
  border: 1px solid #d3d3d3;
  width: 160px;
  height: 40px;
  border-radius: 25px;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  padding: 2px;
`
