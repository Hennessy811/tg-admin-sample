const Airtable = require("airtable");
require("dotenv").config();

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base("app7eP8Soe6ZGgdY9");

module.exports.base = base;
