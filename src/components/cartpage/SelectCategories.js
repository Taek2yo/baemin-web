"use client";
import { useState } from "react";
import * as S from "./CartStyle";

export default function SelectCategories() {
  const categories = [
    { title: "배달/포장", name: "delivery" },
    { title: "B마트", name: "Bmart" },
    { title: "배민스토어", name: "store" },
    { title: "대용량특가", name: "special" },
    { title: "전국별미", name: "delicacies" },
  ];
  const [categoryTitle, setTitle] = useState("delivery");
  return (
    <S.SelectTitle>
      {categories.map((category) => (
        <S.Title
          key={category.name}
          onClick={() => {
            setTitle(category.name);
          }}
          active={categoryTitle === category.name}
        >
          {category.title}
        </S.Title>
      ))}
    </S.SelectTitle>
  );
}
