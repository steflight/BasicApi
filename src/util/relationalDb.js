const Sequelize = require("sequelize");
const { sleep } = require("./index");
//process.env.DATABASE_URI
const client = new Sequelize(process.env.DATABASE_URI, {
  operatorsAliases: false,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci"
  }
});

async function ensureConnected() {
  try {
    await client.authenticate();
    return true;
  } catch (error) {
    await sleep(1000);
    return false;
  }
}

async function defineModel(name, model) {
  await ensureConnected();
  const Model = client.define(name, model);
  Model.sync({
    alter: true // XXX: use migration tool instead
  });
  return Model;
}

const TYPES = { ...Sequelize };
module.exports = { client, defineModel, TYPES, ensureConnected };
