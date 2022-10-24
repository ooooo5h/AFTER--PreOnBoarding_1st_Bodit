const validateName = (name) => {
  const nameRegExp = /^[가-힣a-zA-Z]{1,50}$/;
  if (!nameRegExp.test(name)) {
    const err = new Error("INVALID_NAME");
    err.statusCode = 400;
    throw err;
  }
};

const validateBirth = (birth) => {
  const birthRegExp =
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  if (!birthRegExp.test(birth)) {
    const error = new Error("INVALID_BIRTH");
    error.statusCode = 400;
    throw error;
  }
};

const validateHeight = (height) => {
  const heightRegExp = /^\d{2,3}[.]\d{1}$/;
  if (!heightRegExp.test(height)) {
    const error = new Error("INVALID_HEIGHT");
    error.statusCode = 400;
    throw error;
  }
};

const validatePhone = (phone) => {
  const phoneRegExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!phoneRegExp.test(phone)) {
    const error = new Error("INVALID_PHONE");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  validateName,
  validateBirth,
  validateHeight,
  validatePhone,
};
