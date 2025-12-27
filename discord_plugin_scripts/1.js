const fonts = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Trebuchet MS",
  "Comic Sans MS",
  "Impact",
  "Lucida Console",
  "Tahoma",
  "Palatino Linotype",
  "Garamond",
  "Bookman",
  "Candara"
];

setInterval(() => {
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  document.body.style.fontFamily = font;
}, 2000);
