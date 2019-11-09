const User = require("./User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (root, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (root, { name, email }) => User.create({ name, email })
  }
};
