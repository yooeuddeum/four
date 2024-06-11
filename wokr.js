function formatHTML(language) {
  let htmlData = {
    titleOne: "유으뜸",
    titleTwo: "yueuddeum",
    h1: "my name",
    p: "euddeum",
  };

  let decision = () => {
    if (language === "korean") {
      return htmlData.titleOne;
    }
    if (language === "english") {
      return htmlData.titleTwo;
    }
  };
  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;
  return html;
}
console.log(formatHTML("korean"));
console.log(formatHTML("english"));
