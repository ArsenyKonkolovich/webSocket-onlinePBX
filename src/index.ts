import * as fs from "fs";
import { WebSocket } from "ws";
import { fileNumerator, dateCreator, dataFormatter } from "./utils";

let numOfFile = 1;
const fileName: string = "test";
const account: string = "expamle.onpbx.ru";
const api_key: string = "api_key";

const ws = new WebSocket(`wss://${account}:3342/?key=${api_key}`);

ws.onopen = function (e) {
  ws.send(
    JSON.stringify({
      command: "subscribe",
      reqId: "some unique req id",
      data: {
        eventGroups: ["calls", "user_blf"],
      },
    })
  );
  console.log("Connect");
};
// pf
ws.onmessage = function (event) {
  const currentDate = dateCreator();
  const data = dataFormatter(event.data);
  console.log(typeof event.data);
  const strData = `${currentDate} \n${data}\n\n`;
  console.log(strData);
  let resultFilePath = `./${fileName}${numOfFile}.txt`;
  if (fs.existsSync(resultFilePath) == false) {
    fs.writeFileSync(resultFilePath, strData, { flag: "w+" });
  } else {
    fs.appendFileSync(resultFilePath, strData);
  }
  numOfFile = fileNumerator(resultFilePath, numOfFile);
};
