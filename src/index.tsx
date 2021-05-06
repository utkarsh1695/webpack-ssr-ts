import express from "express";
import webpack from "webpack";
import path from "path";
import webpackClientConfig from "../webpack.client.config";
import webpackServerConfig from "../webpack.server.config";
import server from "./server";

const PORT = 8080;
const app = express();

const compilers = webpack([webpackServerConfig, webpackClientConfig] as any) as webpack.Compiler;
compilers.run((err, stats) => {
  console.log(err);
  console.log(stats);
  
  app.use(express.static(path.join(__dirname, '../public/')));
  app.use(server);
  app.listen(PORT, () => {
    console.log("App running on http://localhost:8080");
  });
});