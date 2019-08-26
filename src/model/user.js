const bcrypt = require("bcrypt");

const { generateId } = require("util");
const { defineModel, TYPES } = require("../util/relationalDb");

const User = defineModel("user", {
  id: {
    type: TYPES.STRING,
    primaryKey: true
  },
  pseudo: {
    type: TYPES.STRING
  },
  birth: {
    type: TYPES.STRING
  },
  email: {
    type: TYPES.STRING,
    unique: true
  },
  password: {
    type: TYPES.STRING
  },
  email_verified: {
    type: TYPES.BOOLEAN,
    defaultValue: false
  }
});

const SALT_ROUNDS = 10;

async function findUserByEmail(email) {
  console.log((await User));
  return (await User).findOne({ where: { email } });
}

async function findUserById(id) {
  return (await User).findOne({ where: { id } });
}

async function createUser(pseudo, birth, email, password) {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return (await User).create({
    id: generateId(),
    pseudo,
    birth,
    email,
    password: hash
  });
}

async function passwordMatches(password, user) {
  return bcrypt.compare(password, user.password);
}

module.exports = {
  User,
  findUserByEmail,
  findUserById,
  createUser,
  passwordMatches
};
