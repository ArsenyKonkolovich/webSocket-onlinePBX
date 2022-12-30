# webSockets-onlinePBX
The utility allows you to connect to the sockets of account and record responses to a file.

- You need to have node version - 17.9.0+

### Usage
- Install
```cmd
git clone https://github.com/ArsenyKonkolovich/webSockets-onlinePBX.git
```
- Install dependencies
```cmd
npm ci
```
- Params
index.js
```cmd
const filename - Filepath without extension
const account - Account name
const api_key - Api key from account
```
- Params 
util.js
```cmd
const fileSize - File size in bytes
```