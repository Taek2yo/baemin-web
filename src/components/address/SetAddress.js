"use client";
import * as S from "./setAddressStyle";
import Image from "next/image";
import back from "/public/assets/img/left.png";
import location from "/public/assets/img/location.png";
import home from "/public/assets/img/addresshome.png";
import { useState, useEffect } from "react";
import { SearchAddress } from "./SearchAddress";
import AddDetailInfo from "./AddrDetailInfo";
import { useSession } from "next-auth/react";
import RegisteredAddress from "./RegisteredAddress";
import EditAddress from "./EditAddress";
export default function SetAddress({ isOpen, handleModal }) {
  const arrow = ">";
  const [section, setSection] = useState("set");
  const addrDetailInfo = section.itemData;
  
  const handleSection = () => {
    if (section === "add-detail") {
      setSection("search");
    } else if (section === "edit") {
      setSection("set");
    } else {
      setSection("set");
    }
  };
  // 유저 이메일 이용, DB에 이메일 일치하는 주소 데이터 가져오기.
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const encodedEmail = encodeURIComponent(email || "");
  const [addressData, setAddressData] = useState([]);
  useEffect(() => {
    if (status === "authenticated" && encodedEmail) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `/api/address/getAddress?email=${encodedEmail}`
          );
          const result = await response.json();
          setAddressData(result);
        } catch (error) {
          console.error("데이터 가져오기 에러:", error);
        }
      };
      fetchData();
    }
  }, [status, encodedEmail]);
  const address = addressData[0]?.address;
 
  return (
    <S.Container className={isOpen ? "open" : ""}>
      <S.BottomSheetHeader>
        <S.DragBar>
          {section === "set" ? (
            <S.Touch
              onClick={() => {
                handleModal();
              }}
            />
          ) : null}
        </S.DragBar>
        <S.HeaderWrap>
          {section === "set" ? (
            <S.EmptyDiv />
          ) : (
            <S.Back
              onClick={() => {
                handleSection();
              }}
            >
              <Image src={back} width={23} alt="back-btn" />
            </S.Back>
          )}

          <S.HeaderTitle>
            {section === "set" ? (
              <span>주소 설정</span>
            ) : section === "search" ? (
              <span>주소 검색</span>
            ) : section.sectionName === "add-detail" ? (
              <span>상세 정보 입력</span>
            ) : section === "edit" ? (
              <span>주소 관리</span>
            ): null}
          </S.HeaderTitle>
          {section === "set" ? (
            <div className="edit" onClick={()=>{setSection("edit")}}>편집</div>
          ) : (
            <S.EmptyDiv />
          )}
        </S.HeaderWrap>
      </S.BottomSheetHeader>
      {section === "set" ? (
        <>
          <S.SearchSection>
            <S.SearchInput
              onClick={() => {
                setSection("search");
              }}
            >
              <S.SearchIcon> 🔍︎</S.SearchIcon>
              <span className="placeholder">지번, 도로명, 건물명으로 검색</span>
            </S.SearchInput>
          </S.SearchSection>
          <S.CurrentLocation>
            <S.CurrentWrap>
              <Image src={location} width={28} alt="location" />
              <span className="set">현재 위치로 설정</span>
            </S.CurrentWrap>
            <span className="arrow">{arrow}</span>
          </S.CurrentLocation>
          <S.MyHome>
            <S.MyHomeAddress>
              <S.Icon>
                <Image src={home} alt="my-home" />
              </S.Icon>
              <S.AddressWrap>
                <S.AddHome>우리집 추가</S.AddHome>
                <span className="address-detail">우리집 주소</span>
              </S.AddressWrap>
            </S.MyHomeAddress>
          </S.MyHome>
          { address?.map((item)=>{
            return (
              <RegisteredAddress item={item} key={item.addressId}/>
            )
          })}
        </>
      ) : section === "search" ? (
        <SearchAddress section={section} setSection={setSection} />
      ) : section.sectionName === "add-detail" ? (
        <AddDetailInfo addrDetailInfo={addrDetailInfo} />
      ) : section === "edit" ? (
        <EditAddress address={address}/>
      ): null}
    </S.Container>
  );
}
