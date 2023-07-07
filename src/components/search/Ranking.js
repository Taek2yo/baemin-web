import * as S from "./searchStyle";
import number1 from "/public/assets/img/number1.png";
import number2 from "/public/assets/img/number2.png";
import number3 from "/public/assets/img/number3.png";
import up from "/public/assets/img/up.png";
import down from "/public/assets/img/down.png";
import unchanged from "/public/assets/img/unchanged.png";
import Image from "next/image";
export default function Ranking() {
  const ranking = [
    {
      rank: 1,
      title: "탕후루",
      rankChange: "unchanged",
    },
    {
      rank: 2,
      title: "배스킨라빈스",
      rankChange: "up",
    },
    {
      rank: 3,
      title: "처갓집양념치킨",
      rankChange: "up",
    },
    {
      rank: 4,
      title: "빙수",
      rankChange: "up",
    },
    {
      rank: 5,
      title: "던킨도너츠",
      rankChange: "up",
    },
    {
      rank: 6,
      title: "설빙",
      rankChange: "down",
    },
    {
      rank: 7,
      title: "명랑핫도그",
      rankChange: "down",
    },
    {
      rank: 8,
      title: "닭발",
      rankChange: "up",
    },
    {
      rank: 9,
      title: "노랑통닭",
      rankChange: "up",
    },
    {
      rank: 10,
      title: "치킨",
      rankChange: "up",
    },
  ];
  const firstRow = ranking.slice(0, 5);
  const secondRow = ranking.slice(5, 10);

  return (
    <S.RankingContainer>
      <S.RankWrap>
      <div>
        {firstRow.map((item) => (
          <S.RankItem key={item.rank}>
            <S.RankTextWrap>
              {item.rank <= 3 ? (
                <Image
                  src={
                    item.rank === 1
                      ? number1
                      : item.rank === 2
                      ? number2
                      : number3
                  }
                  alt="Rank"
                  width={15}
                />
              ) : (
                <S.RankNumber>{item.rank}</S.RankNumber>
              )}
              <span>{item.title}</span>
            </S.RankTextWrap>
            <span>
              {item.rankChange === "unchanged" ? (
                <Image src={unchanged} alt="Unchanged" width={15} />
              ) : item.rankChange === "up" ? (
                <Image src={up} alt="Up" width={15} />
              ) : (
                <Image src={down} alt="Down" width={15} />
              )}
            </span>
          </S.RankItem>
        ))}
      </div>
      </S.RankWrap>
      <S.RankWrap>
      <div>
        {secondRow.map((item) => (
          <S.RankItem key={item.rank}>
            <S.RankTextWrap>
              <S.RankNumber>{item.rank}</S.RankNumber>
              <span>{item.title}</span>
            </S.RankTextWrap>
            <span>
              {item.rankChange === "unchanged" ? (
                <Image src={unchanged} alt="Unchanged" width={15} />
              ) : item.rankChange === "up" ? (
                <Image src={up} alt="Up" width={15} />
              ) : (
                <Image src={down} alt="Down" width={15} />
              )}
            </span>
          </S.RankItem>
        ))}
      </div>
      </S.RankWrap>
    </S.RankingContainer>
  );
}
