const root = document.getElementById("root");

const tagComponent = (tagname, textnode) => {
  return `<${tagname}>${textnode}</${tagname}>`;
};

const app = () => {
  return `
  ${tagComponent("h1", "유")}
  ${tagComponent("h2", "으")}
  ${tagComponent("h3", "뜸")}
  ${tagComponent("h4", "★")}
  `;
};
console.log(app());

const render = () => {
  root.innerHTML = app();
};
render();

// console.log(app());