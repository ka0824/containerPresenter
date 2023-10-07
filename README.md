## 목차

### 1. [container presenter 패턴이란?](#1-container-presenter-패턴이란-1)
### 2. [장점](#2-장점-1)
### 3. [단점](#3-단점-1)
### 4. [적용법](#4-적용법-1)

<br />

-----------------

<br />

### 1. container presenter 패턴이란?
- 하나의 컴포넌트를 container, presenter로 나눠서 작성
- container는 상태 혹은 데이터 로직을 관리하는 역할
- presenter는 화면의 레이아웃, 스타일을 담당. container로부터 넘겨 받은 데이터를 렌더링
- 따라서 container가 presenter를 감싸는 구조

<br />

------------------

<br />

### 2. 장점
- 유지보수성
	- UI 담당하는 코드와 데이터 로직 코드가 분리되어, 하나의 파일에 담겨있는 코드가 줄어들어 코드를 이해하기 쉬워짐
<br />

- 테스트 용이
	- 데이터 로직 테스트와 UI 테스트를 분리해서 진행 가능
    
<br />

-------------------

<br />

### 3. 단점
- 작은 규모의 프로젝트일 경우 오히려 복잡해 질 수 있음
<br />

- hooks의 등장으로 상태, 생명 주기 관리가 간편해져 도입 의도 퇴색
	- 과거 클래스형 컴포넌트에서는 상태, 생명 주기 관리를 위한 코드가 너무 길었음
    - 그러나 hook, 함수형 컴포넌트의 등장으로 코드가 많이 간결해짐
    - hook을 사용하면 container와 presenter로 나누는 것보다 간결하게 표현할 수도 있으므로 무조건적인 사용은 지양해야함
    - 즉, 상황에 맞춰 사용할 것
    
<br />

-------------------

<br />

### 4. 적용법

- 만들고자 하는 컴포넌트 폴더를 생성

<br />

- container 컴포넌트 생성
	- 상태, 상태관리 함수 생성 후 presenter 컴포넌트로 내려 줌
<br />

```
/components/counter/CounterContainer.jsx

import React, { useState } from "react";
import CounterPresenter from "./CounterPresenter";

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterPresenter
      count={count}
      handlePlus={handlePlus}
      handleMinus={handleMinus}
    ></CounterPresenter>
  );
};

export default CounterContainer;

```

<br />

- presenter 컴포넌트 생성
	- container에서 받은 상태, 상태관리 함수 적용
    - UI 작성

```
import React from "react";

const CounterPresenter = ({ count, handlePlus, handleMinus }) => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default CounterPresenter;
```

<br />

- 사용하고자 하는 곳에서 container 불러오기

<br />

```
import "./App.css";
import CounterContainer from "./components/counter/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
    </div>
  );
}

export default App;
```
