# Next js 에서 검색기능 구현하기?
## 내가 구현하고 싶은 것
> MongoDB의 'menu' 컬렉션에서 store_name 및 menu_info (배열 데이터)에 있는 price를 제외한 desc (메뉴 설명)와 name (메뉴명)을 검색한 후 이 두 필드 중 하나에 검색어가 포함되어 있으면 해당 결과를 출력.

> 또한 이 두가지를 모두 포함하는 검색이 아닌 한 필드에라도 있으면 해당하는 검색 결과 출력.

## 구현 과정
### 1. 검색어 입력 -> api 요청 -> 결과 페이지 이동 -> 결과 출력

* 검색 페이지 와 결과 페이지 에서도 검색창은 존재하며 이 둘다 검색기능을 수행할 수 있어야함.
대신, 결과 페이지의 검색창(input)의 placeholder는 searchTerm 이다.

### 2. input 창에 text를 입력할때마다 fetch 요청이 간다.
* 실시간으로 검색결과를 보여주고 싶다면 괜찮다 ( 그래도 성능상의 문제나 유료 API를 사용하고 있다면 심각한 비용 문제를 초래할 수 있다.) 
* 검색 결과를 다 입력한 후에 결과를 보여주기 위해 디바운싱을 적용하려 함. 디바운싱은 연이어 호출되는 함수 중 마지막 함수만 호출하도록 하는 것을 의미.

### 3. 의문점) 검색 후 이동한 SearchResult 페이지에서 검색 결과를 받아와야하는데 어떻게 해야할까?
> next/navigation 의 router.push 의 query로 데이터 넘겨주면됨

여기서 오류 ! pathname에 정확한 경로를 입력했는데 
> Uncaught (in promise) TypeError: path.startsWith is not a function at addPathPrefix

오류가 났다 . 이유는 무엇일까 ? 
### 3-1. 의심할 점 
#### 1. encodedValue 가 string이 아니어서 오류가 난다.
> type of로 확인해봤는데 string이고 , pathname에 `/search/123` 이런식으로 넣어봤는데도 똑같은 오류. 그러므로 이 문제는 아니다.

#### 2. pathname 문제
> 일반 문자열 넣었는데도 안됨.


### 3-2. 해결 방법.
난 next 앱 외부에서 router를 사용하기 때문에 next/router를 사용하지 못하고 next/navigation을 사용한다.
그러므로 pathname 자체가 되지않는것. 그렇다면 어떻게 다른 페이지에서 검색 데이터를 가져와야할까?

```js
//search.js
const handleSearch = async (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      try {
        const encodedValue = encodeURIComponent(value)
        const response = await fetch(`/api/search/search?searchTerm=${encodedValue}`);
        const result = await response.json();
        router.push(`/search/${encodedValue}`) // 여기서 searchResult 페이지로 이동하고
      } catch (error) {
        console.error('API 요청 에러:', error);
      }
    }
  };
```


```js
//searchResult
const [searchData, setSearchData] = useState([]);
const param = useParams();
const placeHolderText = decodeURIComponent(param.terms)
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search/search?searchTerm=${placeHolderText}`);
        const result = await response.json();
        console.log(result)
        setSearchData(result);
      } catch (error) {
        console.error("데이터 가져오기 에러:", error);
      }
    };

    fetchData();
  }, []);
```


이렇게 했더니 searchResult 페이지에서 데이터가 잘 받아와진다. 

### 4. 가게에 존재하는 메뉴, 그리고 가게 이름을 검색 
mongodb는 관계형 데이터 베이스가 아니라 `join` 메서드 없음.

### 4-1. join 시도 store_info 배열에 빈배열
```js
import { connectDB } from "@/util/database";

export default async function searchTest(req, res) {
  const searchTerm = req.query.searchTerm;
  const db = (await connectDB).db("baemin");
  
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "잘못된 요청입니다." });
      return;
    }
    
    const result = await db.collection("menu").aggregate([
      {
        $lookup: {
          from: "store",
          localField: "_id",
          foreignField: "menuId",
          as: "store_info",
        },
      },
      {
        $match: {
          $or: [
            {
              "menu_info.desc": { $regex: new RegExp(`${searchTerm}`, "i") },
            },
            { store_name: { $regex: new RegExp(`${searchTerm}`, "i") } },
          ],
        },
      },
    ]).toArray();
    
    res.status(200).json(result);
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
}
```

### 4-1 문제점 파악 
> menu 컬렉션에 _id 필드는 ObjectId 타입이고 store 컬렉션에 menuId 필드는 string 이기때문에 데이터 타입이 일치하지않아 빈 배열이 들어오는것.

### 4-2 문제 해결
> $toString 을 사용해서 menu 컬렉션의 _id 필드를 string 타입으로 변환시켰다.

---
### 5. 해결 코드

```js
import { connectDB } from "@/util/database";

export default async function searchTest(req, res) {
  const searchTerm = req.query.searchTerm;
  const db = (await connectDB).db("baemin");
  
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "잘못된 요청입니다." });
      return;
    }
    
    const result = await db.collection("menu").aggregate([
      {
        $lookup: {
          from: "store",
          let: { menuIdString: { $toString: "$_id" } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$menuIdString", "$menuId"]
                }
              }
            }
          ],
          as: "store_info",
        },
      },
      {
        $match: {
          $or: [
            {
              "menu_info.desc": { $regex: new RegExp(`${searchTerm}`, "i") },
            },
            { store_name: { $regex: new RegExp(`${searchTerm}`, "i") } },
          ],
        },
      },
    ]).toArray();
    
    res.status(200).json(result);
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
}
```

## 소스 코드
#### Front

- [Search.js](../src/components/search/Search.js)

- [searchResult.js](../src/components/search/searchResult.js)

#### Back

- [search](../pages/api/search/search.js)