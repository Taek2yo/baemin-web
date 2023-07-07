import * as S from "./searchStyle";
import Image from "next/image";
import url from "url";
import Link from "next/link";
export default function PersonalItem({ item }) {
  const getImageUrl = (path) => {
    const publicUrl = "/public";
    const imageUrl = url.resolve(publicUrl, path);
    return imageUrl;
  };
  return (
    <Link href={`/detail/${item._id}`}>
    <S.Box>
      <S.thumbnail>
        <Image src={getImageUrl(item.img)} alt="food" width={100} height={100}/>
      </S.thumbnail> 
      <S.ItemTitle>
        <span className="item-title">{item.title}</span>
        <span className="star">★</span>
        <span>{item.stars}</span>
      </S.ItemTitle>
      <S.TimeTip>
        <div>
          <span>배달</span>
          {item.onetime}
        </div>
        <div>
          <span>배달팁</span>
          {item.onetip}
        </div>
      </S.TimeTip>
    </S.Box>
    </Link>
  );
}
