const express = require("express");
const React = require("react");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
//
const AppServer = require("../src/AppServer").default;
const PostServer = require("../src/PostServer").default;
const CounterFunctional = require("../src/CounterFunctional").default;
const CounterClass = require("../src/CounterClass").default;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
      <h1>Here you go</h1>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

//
app.get("/class", (req, res) => {
  const content = ReactDOMServer.renderToString(<CounterClass />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
      <h1>Here you go</h1>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});
//
app.get("/functional", (req, res) => {
  const content = ReactDOMServer.renderToString(<CounterFunctional />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
      <h1>Here you go</h1>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});
//
app.post("/", (req, res) => {
  const content = ReactDOMServer.renderToString(<PostServer />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
      <h1>Here you go</h1>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
