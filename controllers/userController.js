const { userService } = require("../services");

const createUser = async (req, res) => {
  try {
    const userDto = { ...req.body };

    if (!userDto.name || !userDto.birth || !userDto.height || !userDto.phone) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.createUser(userDto);
    return res.status(201).json({ message: "SIGN_UP_SUCCESS " });
  } catch (err) {
    console.log(err);
    return res
      .status(err.status || 500)
      .json({ message: err.message || "SERVER_ERROR" });
  }
};

module.exports = {
  createUser,
};
