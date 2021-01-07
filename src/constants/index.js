const COMMON = {
  MIN_PASSWORD_LENGTH: 6,
  MIN_USERNAME_LENGTH: 3,
};

const LOGIN_FORM = {
  OK_LOGIN_FORM: 'Seems legit!',

  PASSWORD_REQUIRED: 'What is your password?',
  USERNAME_REQUIRED: 'What is your username?',

  PASSWORD_TOO_SHORT: `Must be ${COMMON.MIN_PASSWORD_LENGTH} characters or more!`,
  USERNAME_TOO_SHORT: `Must be ${COMMON.MIN_USERNAME_LENGTH} characters or more!`,
};

exports.COMMON = COMMON;
exports.LOGIN_FORM = LOGIN_FORM;
