const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const getfindByIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

module.exports = {
  createService,
  findAllService,
  getfindByIdService,
  updateService,
};
