import React, { useState } from "react";

function Input() {
  // text 변수에 대한 상태변화 세팅(default 값은 "")
  const [text, setText] = useState("");

  // input 에 작성하면 값의 text변수에 글자가 나타나도록 작성
  const onChange = (e) => {
    setText(e.target.value);
  };

  // button 클릭시 text 변수 내의 값이 초기화되도록 작성
  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

// 리액트 컴포넌트(.js 파일 하나하나를 '컴포넌트'리고 부름)는 작성하고나서 반드시 export default 컴포넌트명;을 하단에 작성해야함
export default Input;
