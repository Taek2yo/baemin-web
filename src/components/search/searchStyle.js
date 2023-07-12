import styled from "styled-components";

export const Container = styled.div`
  font-family: "NanumGothic";
  background-color: #f0ededd3;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3px 10px 3px;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 99;
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
  background-color: white;
`;

export const Recent = styled.div`
  font-weight: bold;
`;

export const DeleteBtn = styled.div`
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 7px;
  font-size: 14px;
  margin-top: 5px;
`;

export const RSItemWrap = styled.div`
  background-color: white;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RSItem = styled.div`
  font-size: 14px;
  padding: 7px;
  border-radius: 18px;
  color: #2ac1bc;
  background-color: #d6f6f5;
  display: inline-block;
  .word {
    cursor: pointer;
  }
  .x-btn {
    margin-left: 7px;
    cursor: pointer;
  }
  margin-top: 5px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 140px;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px -2px black;
`;

export const AD = styled.div`
  border-radius: 10px;
  margin: 12px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const Personalized = styled.div`
  background-color: white;
  margin-top: 10px;
  box-shadow: 0 2px 2px -2px black;
  padding-bottom: 15px;
  .title-ad {
    font-size: 14px;
    color: gray;
    font-weight: 500;
    margin-left: 5px;
  }
  .question-mark {
    margin-top: 5px;
    margin-left: 5px;
  }
`;

export const PTextWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 10px;
`;

export const Ptitle = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

//-------- Personal Item -------//
export const Box = styled.div``;

export const thumbnail = styled.div`
  position: relative;
  width: 180px;
  height: 150px;
  img {
    position: absolute;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  margin: 8px 8px 8px 0px;
  align-items: center;
  font-weight: bold;
  .item-title {
    display: inline-block;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .star {
    color: #f5c220;
    margin-left: 5px;
  }
`;

export const TimeTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: normal;
  span {
    color: gray;
    margin-right: 5px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-left: 10px;
  gap: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// ---- Search Ranking --- //

export const MostSearchBox = styled.div`
  margin-top: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Most = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;
export const Date = styled.div`
  color: gray;
`;

export const SRTextWrap = styled.div`
  padding: 10px 10px 0px 10px;
  margin-top: 12px;
`;

export const Character = styled.div`
  margin-right: 10px;
`;

export const RankingContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  gap: 20px;
  box-shadow: 0 2px 2px -2px black;
`;

export const RankWrap = styled.div`
  width: 100%;
`;

export const RankItem = styled.div`
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding: 10px;
  }
`;

export const RankNumber = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;

export const RankTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomAD = styled.div`
  margin-top: 10px;
  width: 100%;
  img {
    width: 100%;
    height: 100px;
  }
`;

export const TabWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px -2px black;
`;

export const Tab = styled.div`
  padding: 7px;
  color: ${({ active }) => (active ? "black" : "#a2a2a2")};
  border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
`;

export const Delivery = styled.div`
  margin-top: 10px;
  background-color: white;
`;

export const DeliveryTitle = styled.div`
  display: inline-block;
  background: linear-gradient(transparent 50%, #d6f6f5 50%);
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  border-bottom: 1px solid #d3d3d3;
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ItemImage = styled.div`
  width: 85px;
  height: 90px;
  margin: 10px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContentTitle = styled.div`
  font-weight: bold;
`;

export const ItemStar = styled.div`
  .score {
    font-weight: bold;
  }
  .star {
    color: #f5c220;
  }
`;

export const ItemDesc = styled.div`
  color: #a2a2a2;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemDeliveryTime = styled.div``;

export const ItemTip = styled.div``;

export const MinimumOrder = styled.div`
  .minimum{
    color: #a2a2a2;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  gap: 10px;
`;


export const MoreBtnSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const MoreBtn = styled.div`
  display: flex;
  border: 1px solid #d3d3d3;
  padding: 10px 17px 10px 17px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 18px;
  gap: 3px;
  cursor: pointer;
  .search-terms{
    font-weight: bold;
  }
  .arrow{
    font-weight: bold;
    font-size: 13px;
  }
`;