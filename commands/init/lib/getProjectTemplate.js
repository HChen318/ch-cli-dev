const request = require("@ch-cli-dev/request");

module.exports = function () {
  return request({
    url: "project/template",
  });
};
