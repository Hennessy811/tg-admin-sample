const { base } = require("../../connect");
const faker = require("faker");

const createUser = (user) => {
  console.log("Create");
  base("Users").create(
    [
      {
        fields: user,
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log("User created successfully", record.getId());
      });
    }
  );
};

module.exports.createUser = createUser;
