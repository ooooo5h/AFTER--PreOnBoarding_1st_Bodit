const { userService } = require("../services");

const createUser = async (req, res) => {
  try {
    const userDto = { ...req.body };

    if (!userDto.name || !userDto.birth || !userDto.height || !userDto.phone) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.createUser(userDto);
    return res.status(201).json({ message: "SIGN_UP_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res
      .status(err.status || 500)
      .json({ message: err.message || "SERVER_ERROR" });
  }
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  return res
    .status(200)
    .json({ message: "GET_ALL_USERS", data: result });
};

module.exports = {
  createUser,
  getAllUsers,
};
