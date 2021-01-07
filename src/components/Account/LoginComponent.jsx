import React, { useState } from 'react';
import { useFormik } from 'formik';

import LoginComponentStyles from './LoginComponent.module.css';
// import SuccessLogo from '../../success-logo';

import { COMMON, LOGIN_FORM } from '../../constants';
import { combineClasses } from '../../helpers';

const LoginComponent = () => {
  const validate = (values) => {
    const errors = {};
    if (values.username.length < COMMON.MIN_USERNAME_LENGTH) {
      errors.username = LOGIN_FORM.USERNAME_TOO_SHORT;
    }
    if (values.password.length < COMMON.MIN_PASSWORD_LENGTH) {
      errors.password = LOGIN_FORM.PASSWORD_TOO_SHORT;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const usernameMessage = () => {
    if (formik.values.username && formik.errors.username) {
      return formik.errors.username;
    }
    if (formik.values.username && !formik.errors.username) {
      return LOGIN_FORM.OK_LOGIN_FORM;
    }
    return LOGIN_FORM.USERNAME_REQUIRED;
  };

  const passwordMessage = () => {
    if (formik.values.password && formik.errors.password) {
      return formik.errors.password;
    }
    if (formik.values.password && !formik.errors.password) {
      return LOGIN_FORM.OK_LOGIN_FORM;
    }
    return LOGIN_FORM.PASSWORD_REQUIRED;
  };

  const [isPasswordInputFilledAndBlurred, setPasswordInputFilledAndBlurred] = useState(false);
  const [isUsernameInputFilledAndBlurred, setUsernameInputFilledAndBlurred] = useState(false);

  return (
    <div className={LoginComponentStyles.loginFormWrapper}>
      <span className={LoginComponentStyles.signUpSpan}>Sign up</span>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          id="username"
          className={combineClasses(
            LoginComponentStyles.credentialsInput,
            isUsernameInputFilledAndBlurred && LoginComponentStyles.filledCredentialsInput,
          )}
          onChange={formik.handleChange}
          onFocus={() => {
            setUsernameInputFilledAndBlurred(false);
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
            if (formik.values.username) {
              setUsernameInputFilledAndBlurred(true);
            }
          }}
          value={formik.values.username}
        />
        <label
          htmlFor="username"
          className={combineClasses(
            LoginComponentStyles.credentialsLabel,
            usernameMessage() === LOGIN_FORM.OK_LOGIN_FORM
              && LoginComponentStyles.validCredentialsLabel,
          )}
        >
          <span>{usernameMessage()}</span>
        </label>

        <input
          type="password"
          autoComplete="off"
          id="password"
          className={combineClasses(
            LoginComponentStyles.credentialsInput,
            isPasswordInputFilledAndBlurred
              && LoginComponentStyles.filledCredentialsInput,
          )}
          onChange={formik.handleChange}
          onFocus={() => {
            setPasswordInputFilledAndBlurred(false);
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
            if (formik.values.password) {
              setPasswordInputFilledAndBlurred(true);
            }
          }}
          value={formik.values.password}
        />
        <label
          htmlFor="password"
          className={combineClasses(
            LoginComponentStyles.credentialsLabel,
            passwordMessage() === LOGIN_FORM.OK_LOGIN_FORM
              && LoginComponentStyles.validCredentialsLabel,
          )}
        >
          <span>{passwordMessage()}</span>
        </label>

        {/*<button type="submit">*/}
        {/*  <span>Submit</span>*/}
        {/*  <SuccessLogo />*/}
        {/*</button>*/}
      </form>
    </div>
  );
};

export default LoginComponent;
