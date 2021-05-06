import React from "react";
import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { StaticRouter } from "react-router";
import routes from "./routes";
import { renderToString } from "react-dom/server";

const dummyData = {
  name: "Utkarsh"
}

const server = express();
server.use((req: Request, res: Response) => {
  let content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {routes()}
    </StaticRouter>
  );
  const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), 'utf-8');
  const finalHtml = html
    .replace('<div id="root"></div>',
      `<div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(dummyData)}
        </script>
      `)
  res.send(finalHtml);
})
export default server;