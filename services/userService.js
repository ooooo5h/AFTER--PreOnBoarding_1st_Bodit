const { userDao } = require("../models");
const {
  validateName,
  validateBirth,
  validateHeight,
  validatePhone,
} = require("../utils/validation");

const createUser = async (userDto) => {
  // 이름,생일,키,연락처 유효성 검사
  validateName(userDto.name);
  validateBirth(userDto.birth);
  validateHeight(userDto.height);
  validatePhone(userDto.phone);

  // 중복 검사
  const samePhoneUser = await userDao.getUserByPhone(userDto.phone);

  if (samePhoneUser) {
    const error = new Error("PHONE_ALREADY_EXIST");
    error.statusCode = 409;
    throw error;
  }

  await userDao.createUser(userDto);
};

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

module.exports = {
  createUser,
  getAllUsers,
};
