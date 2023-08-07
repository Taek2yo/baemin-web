'use client'
import * as S from "./deliveryStyle";
import Image from "next/image";
import oneserving from "/public/assets/img/oneserving.png";
import meat from "/public/assets/img/meat.png";
import dessert from "/public/assets/img/dessert.png";
import sushi from "/public/assets/img/sushi.png";
import pizza from "/public/assets/img/pizza.png"
import { useRouter } from "next/navigation";
export default function CategorySection() {
  const categoryData = [
    {
      title: "1인분",
      image: oneserving,
      category : "oneserving"
    },
    {
      title: "돈까스·회·일식",
      image: sushi,
      category : "sushi"
    },
    {
      title: "고기·구이",
      image: meat,
      category : "meat"
    },
    {
      title: "카페·디저트",
      image: dessert,
      category : "dessert"
    },
    {
      title: "피자",
      image: pizza,
      category : "pizza"
    },
  ];
  const router = useRouter();
  return (
    <S.CategoryContainer>
      {categoryData.map((item, index) => {
        return (
          <S.CategoryWrap key={index} onClick={()=>router.push(`/delivery/category?category=${item.category}`)}>
            <Image
              src={item.image}
              alt="category-icon"
              width={55}
              height={60}
            />
            <span>{item.title}</span>
          </S.CategoryWrap>
        );
      })}
    </S.CategoryContainer>
  );
}
