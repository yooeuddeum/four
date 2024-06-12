const root = document.getElementById("root");

const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민",
];

// * 태그를 만드는 가장 기본적인 형태의 함수
// * 매개변수를 받아서 문자열로 리턴
// * 문자열은 HTML 작성법을 따르므로 위 서술한 innerHTML에 넣어 줄 수 있음
const tagComponent = (tagname, textnode) => {
  return `<${tagname}>${textnode}</${tagname}>`;
};

// * arrayString은 문자열을 뒤에 덧붙이는 방식
const arrayString = (array, Componentname) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = result + Componentname("li", names[i]);
  }
  return result;
};

// * arrayPush는 배열에 덧 붙이는 방식
const arrayPush = (array, Componentname) => {
  let result = [];
  array.forEach((name, index) => {
    result.push(Componentname("li", names[index]));
  });
  return result.join("");
};

// * app 함수는 두 가지를 선택지처럼 받도록 if문을 사용한 경우
// * 때에 따라서 결과물이 달라질 수 있음
const app = (isProgrammingType = false) => {
  if (isProgrammingType === true) {
    return `<ul>${arrayString(names, tagComponent)}</ul>`;
  } else {
    return `<ul>${arrayPush(names, tagComponent)}</ul>`;
  }
};
console.log(app());

const render = () => {
  root.innerHTML = app();
};
render();

// console.log(app());
