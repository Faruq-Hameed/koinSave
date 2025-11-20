import * as Yup from "yup";

export const SendMoneySchema = Yup.object().shape({
  email: Yup.string().email().required("Recipient email is required"),
  amount: Yup.number().required("Amount is required"),
  purpose: Yup.string().required("Purpose of sending the money?")
});

