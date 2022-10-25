const pool = require("./mysql");

/**
 * 기능 : 연락처 중복 검사(ID 반환)
 */
const getUserByPhone = async (phone) => {
  const [[user]] = await pool.query(
    `
      SELECT 
          id
      FROM 
          users
      WHERE 
          phone = ?
    `,
    [phone],
  );
  return user;
};

/**
 * 기능 : 회원 등록
 */
const createUser = async (userDto) => {
  await pool.query(
    `
    INSERT INTO 
        users 
        (name, birth, height, phone)
    VALUE 
        (?, ?, ?, ?)
    `,
    [userDto.name, userDto.birth, userDto.height, userDto.phone],
  );
};

/**
 * 기능 : 회원 전체 조회
 */
const getAllUsers = async () => {
  const [user] = await pool.query(
    `
    SELECT 
        id, name, birth, height, phone
    FROM 
        users
    WHERE
        deleted = ?
    `,
    [false],
  );
  return user;
};

module.exports = {
  getUserByPhone,
  createUser,
  getAllUsers,
};
