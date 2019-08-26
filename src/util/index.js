const crypto = require("crypto");

function parseQueryString(queryString) {
  return queryString.split("&").reduce(
    (params, paramString) => ({
      ...params,
      [paramString.split("=")[0]]: paramString
        .split("=")
        .slice(1)
        .join("")
    }),
    {}
  );
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function generateId() {
  return (
    crypto
      .randomBytes(32)
      .toString("base64")
      // urlsafe
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "")
  );
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  parseQueryString,
  capitalize,
  generateId,
  sleep
};
