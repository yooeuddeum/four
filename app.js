const a = (name, age, job) => {
  return {
    name: name,
    age: age,
    job: job,
  };
};
// console.log(a());
// 어느정도선에서 정적인 작업의 필요도
// 캡슐화해서 만들면 작업이 편해짐
const b = a("유으뜸", 13, "수강생");
console.log("첫번째 b:", b);
b.address = "대전";
console.log("두번째 b:", b);
