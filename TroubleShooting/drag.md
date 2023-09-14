# 드래그가 가능한 컴포넌트 만들기. ( feat. Carousel )
## 구현하고 싶은 것
> 배민 앱의 광고 배너, 카테고리 별 가게, 카테고리 선택 등등 여러 곳에서 자주 사용되어지는 드래그 기능 및 배너의 경우 Carousel.

## 구현 과정
> 사용자가 드래그 가능한 컴포넌트 클릭 => 드래그 이벤트 발생 = > 드래그 중 이벤트 / 드래그 종료 이벤트

### 1. scrollRef
드래그를 적용하려는 요소 선택
### 2. 드래그 이벤트
적용하려는 컴포넌트에 React MouseEvent로 드래그 시작, 중, 종료 이벤트 핸들러 구현
### 3. 중복 사용이 많은 코드이니 커스텀 훅으로 분리

### 코드로 정리
```js
import { useRef, useState } from 'react';

const useDraggable = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return { scrollRef, isDrag, onDragStart, onDragEnd };
};

export default useDraggable;
```

### 4. 적용 후 문제 파악
1. 드래그 중 드래그가 끊김.
2. 너무 자주 함수가 호출되어 성능에 문제가 발생함.
3. 드래그가 부드럽지 않음.

> 문제의 원인. 함수가 일정한 간격으로 호출되는 것이 아니라 여러번 계속 호출되고 있음.

### 4-1. 문제 해결
> 함수가 일정한 간격으로 호출되게 만든다면 위의 문제점을 해결할 수 있을것이라고 생각함.

일정한 간격으로 함수를 호출하는 것을 찾아보던 중, 디바운싱 (Debouncing)과 스로틀링 (Throttling)을 찾게되었는데. 나는 마지막 함수만 호출되게하는 디바운싱말고 부드러운 스크롤링과 리소스 관리를 위해 스로틀링을 적용해보았다.

#### 5. 스로틀링 (Throttling) 코드
```js
//... 이전 코드

  const throttle = (func, delay) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, delay);
      }
    };
  };

  const onThrottleDragMove = throttle(onDragMove, 10);

  return { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove };
};

export default useDraggable;

```

## 소스 코드
* [useDraggable.js](../src/hooks/useDraggable.js)