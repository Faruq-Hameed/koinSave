import * as Yup from "yup";

/**Login validator for new user expecting email and passcode */
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  passcode: Yup.string()
    .required("Passcode is required")
    .length(6, "Your passcode must be 6 digits long"),
});


export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Surname is required"),
  email: Yup.string().email().required("Email is required"),
  passcode: Yup.string()
    .required("Passcode is required")
    .length(6, "Your passcode must be 6 digits long"),
});

