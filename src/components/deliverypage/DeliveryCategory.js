'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./deliveryStyle";
import DeliveryHeader from "./DeliveryHeader";
import StoreDataItem from "./StoreDataItem";

const categories = [
  { title: "1인분", name: "oneserving" },
  { title: "돈까스·회·일식", name: "sushi" },
  { title: "고기·구이", name: "meat" },
  { title: "카페·디저트", name: "dessert" },
  { title: "피자", name: "pizza" },
];

export default function DeliveryCategory() {
  const router = useRouter();
  const [categoryTitle, setCategoryTitle] = useState("oneserving");
  const [storeData, setStoreData] = useState([]);  
  const changeCategory = (title) => {
    if (categoryTitle !== title) {
      router.replace(`/delivery/category?=${title}`);
      setCategoryTitle(title);
    }
  };

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch(`/api/delivery/getCategory?category=${categoryTitle}`);
        if (!response.ok) {
          throw new Error("네트워크 에러");
        }
        const data = await response.json();
        setStoreData(data);
      } catch (error) {
        console.error("데이터 패칭 에러", error);
        setStoreData([]);
      }
    };

    fetchStore();
  }, [categoryTitle]);
  return (
    <>
    <S.DeliveryCategoryContainer>
      <DeliveryHeader />
      <S.SelectTitle>
        {categories.map((category) => (
          <S.Title
            key={category.name}
            onClick={() => {
              changeCategory(category.name);
            }}
            active={categoryTitle === category.name}
          >
            {category.title}
          </S.Title>
        ))}
      </S.SelectTitle>
    </S.DeliveryCategoryContainer>
    {storeData.map((item)=>{
        return <StoreDataItem key={item._id} item={item}/>
    })}
    </>
  );
}
