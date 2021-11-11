import React, { useState } from "react";

const Input2 = () => {
  // inputs는 name, nickname 2개 요소에 대한 관리 실행
  const [inputs, setInputs] = useState({
    name: "", // 1번 input을 담당할 name
    nickname: "", // 2번 input을 담당할 nickname
  });
  console.log(inputs); // {name: '', nickname: ''}
  const { name, nickname } = inputs; // inputs 내부에 들어있는 name과 nickname을 두개로 분할
  console.log(setInputs);

  // inputs에 두개의 변수를 묶어서 관리하고 있기 대문에 이벤트 하나에서 inputs를 모두 처리해야함
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target); // input 내부의 값이 변경될 때마다 콘솔에 출력됨
    console.log(value);
    console.log(name);
    setInputs(value);
  };

  return (
    <div>
      <input placeholder="이름" onChange={onChange} value={name} />
      <input placeholder="별명" onChange={onChange} value={nickname} />
      <button>초기화</button>
      <b>
        값: {name}({nickname})
      </b>
    </div>
  );
};
// Input2를 외부로 export 해주겠다는 의미
export default Input2;
