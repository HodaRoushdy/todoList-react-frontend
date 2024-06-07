import * as yup from "yup";

// register form constrains and error messages
export const RegisterSchema = yup.object({
  username: yup
    .string()
    .required("the username is required")
    .min(4, "the username should be at least 4 characters"),
  email: yup
    .string()
    .required("the email is required")
    .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "invalid email"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
      "Password must contain at least one letter, at least one number, and be longer than six characters."
    )
    .min(6, "password length must be more than or equal to 6 "),
}).required()

// login form constrains and error messages
export const LoginSchema = yup
  .object({
    identifier: yup
      .string()
      .required("the email is required")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "invalid email"),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
        "Password must contain at least one letter, at least one number, and be longer than six characters."
      )
      .min(6, "password length must be more than or equal to 6 "),
  })
  .required();
