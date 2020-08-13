const { base } = require("../../connect");

const getUsers = () => {};

const getUserById = (id) =>
  new Promise((resolve, reject) => {
    console.log("Get user by id");
    base("Users")
      .select({ pageSize: 1, filterByFormula: `{chatId} = ${id}` })
      .eachPage((records, next) => {
        if (!records.length) {
          resolve(null);
        } else {
          resolve(records[0].fields);
          next();
        }
      });
  });

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
