import * as yup from "yup";

export const SignUpSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz.")
    .required("Email alanı zorunlu."),
  password: yup.string().required("Şifre alanı zorunlu."),
  confirmPassword: yup
    .string()
    .required("Şifre tekrarı zorunlu")
    .oneOf([yup.ref("password", yup.password)], "Şifreler eşleşmiyor."),
  checkBox: yup.boolean().required("Kutucuğu onaylayınız."),
});
