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

export const Footer = styled.div`
  border-top : 1px solid #d3d3d3;
  background-color: white;
  width: 500px;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

export const OrderBtn = styled.div`
  border-radius: 7px;
  background-color: #2ac1bc;
  width: 95%;
  height: 55px;
  margin: 12px 0 12px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OrderQuantity = styled.div`
  border-radius: 100%;
  width: 27px;
  height: 27px;
  font-weight: bold;
  color: #2ac1bc;
  background-color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-left: 30px;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`
export const TotalPrice = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-right: 30px;
`

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

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  gap: 10px;
  img {
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionList = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 15px;
`;

export const Price = styled.span`
  font-size: 17px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
`;

export const ItemBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: right;
`;

export const Quantity = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 5px 7px 5px 7px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionBtn = styled.div`
  background: none;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;

export const DecreaseBtn = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? '#e9ecef' : '#343a40')};
  cursor: pointer;
  padding-left: 5px;
`;

export const IncreaseBtn = styled.span`
  font-size: 30px;
  color: #343a40;
  font-weight: bold;
  padding-right: 5px;
  cursor: pointer;
`;

export const MoreBtn = styled.div`
  margin-top: 1px;
  background-color: white;
  height: 30px;
  padding: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid #d3d3d3;
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

export const EmptyText = styled.span`
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
`;
