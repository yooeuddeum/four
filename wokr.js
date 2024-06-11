function formatHTML() {
  let htmlData = {
    title: "유으뜸",
    h1: "my name",
    p: "euddeum",
  };
  let html = `
  <html>
    <head>
      <title>${htmlData.title}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;
  return html;
}
console.log(formatHTML());
