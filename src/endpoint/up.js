const { ensureConnected } = require("../util/relationalDb");

module.exports = async () => ({
  success: true,
  isDatabaseConnected: await ensureConnected()
});
