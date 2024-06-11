// * 사용자 정보를 캡슐에 담은 함수
const getUserInfo = () => {
  return {
    name: "유으뜸",
    age: 11,
    job: "수강생",
  };
};

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
