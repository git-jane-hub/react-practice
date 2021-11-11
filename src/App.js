//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
//import React, { Fragment, useState } from "react";
//import Input from "./Input";
import Input2 from "./Input2";

// 함수형 컴포넌트
function App() {
  // 가상 DOM - 변동속도가 빠름, 페이지에서의 표현 내용이 바뀌기 때문에 필요
  // [] 내부의 count는 변수, setCount는 세터, userState를 이용해 값을 변경, useState의 0은 count에 최초로 삽입되는 값(default)
  //const [count, setCount] = useState(0);
  // 비구조 할당
  // const countState = useState(0);
  // console.log(countState);  // Array[2] = [0, f()];

  // Input을 한개 이상 작성하려면 부모태그(Fragment도 가능)가 있어야함
  return (
    <>
      <Input2 />
    </>
  );
}
/*
  return (
    // 버튼을 클릭시마다 setter를 이용해 count값을 변경
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    <Input />
  );
}
*/
/*
// 파일명과 동일한 클래스명
// 클래스형 컴포넌트
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
*/
/*
// localhost:3000 으로 브라우저 접속
function App() {
  let a = "test";

  // css 는 변수로 설정하고
  const style = {
    backgroundColor: "black",
    color: "aqua",
  };

  return (
    // 태그의 style 속성으로 넣어줌
    <div style={style}>
      <li className="123">{a}</li>
      <li>{a}</li>
      <li>{a}</li>
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
