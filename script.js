// * 사용자 정보를 캡슐에 담은 함수
const getUserInfo = () => {
  return {
    name: "유으뜸",
    age: 11,
    job: "수강생",
  };
};

// * 폼 컴포넌트
const formComponent = (action, method) => {
  const userInfo = getUserInfo();
  return `
  <form action = "${action}" method= "${method}">
  <label for = "name">이름:<label>
  <input type ="text" id = "name" name= "name" value = "${userInfo.name}" required>
  <label for = "age">나이:<label>
  <input type ="number" id = "age" name= "age" value = "${userInfo.age}" required>
  <label for = "job">직업:<label>
  <input type ="text" id = "job" name= "job" value = "${userInfo.name}" required>
  <button type = "submit">제출</button>
  </form>
  `;
};

// * 모든 컴포넌트를 조합하는 함수
const App = (formAction, formmethod) => `
<h1>함수의 리턴은</h1>
<h2>사람의 머리를 맑게 해준다.</h2>
${formComponent(formAction, formmethod)}`;

// * 페이지가 로드될 때 컴포넌트를 렌더링
const renderApp = (formAction, formmethod) => {
  const appDiv = document.getElementById("root");
  appDiv.innerHTML = App(formAction, formmethod);
}