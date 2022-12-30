import * as fs from "fs";
// import WebSocket from "ws";

const fileSize: number = 104857600;

const sizeCheck = (filePath: string): number => {
  const { size } = fs.statSync(filePath);
  return size;
};

export const fileNumerator = (filePath: string, numOfFile: number): number => {
  if (sizeCheck(filePath) > fileSize) {
    return (numOfFile += 1);
  }
  return numOfFile;
};

export const dateCreator = (): string => {
  const date = new Date();
  const parseDate = JSON.stringify(date).replace(/[A-Z]/g, " ");
  return parseDate.slice(1, -1);
};

export const dataFormatter = (obj: any): string => {
  return JSON.stringify(JSON.parse(obj), null, "\t");
};
