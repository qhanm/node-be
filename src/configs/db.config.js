// src/configs/db.config.js
require("ts-node/register"); // Sử dụng ts-node để biên dịch các file TypeScript
require("dotenv").config();
module.exports = require("./db.config.ts").default; // Yêu cầu và sử dụng file TypeScript
