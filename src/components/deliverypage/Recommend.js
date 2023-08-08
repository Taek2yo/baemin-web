import * as S from "./deliveryStyle";
import useDraggable from "@/hooks/useDraggable";
import Image from "next/image";
import delivery1 from "/public/assets/img/delivery1.png";
import delivery2 from "/public/assets/img/delivery2.png";
import delivery3 from "/public/assets/img/delivery3.png";
import delivery4 from "/public/assets/img/delivery4.png";
import delivery5 from "/public/assets/img/delivery5.png";
import delivery6 from "/public/assets/img/delivery6.png";
export default function Recommend() {
  const imgData = [
    {
      id: 1,
      image: delivery1,
    },
    {
      id: 2,
      image: delivery2,
    },
    {
      id: 3,
      image: delivery3,
    },
    {
      id: 4,
      image: delivery4,
    },
    {
      id: 5,
      image: delivery5,
    },
    {
      id: 6,
      image: delivery6,
    },
  ];
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useDraggable();

  return (
    <>
      {imgData && (
        <S.RecommendContainer
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {imgData.map((item) => (
            <S.RecommendItem key={item.id}>
                <Image src={item.image} alt="recommend-image" width={135}/>
            </S.RecommendItem>
          ))}
        </S.RecommendContainer>
      )}
    </>
  );
}
