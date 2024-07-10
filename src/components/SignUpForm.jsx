import React from "react";
import { useFormik } from "formik";
import { SignUpSchemas } from "../schemas/SignUpSchemas";

const SignUpForm = () => {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      checkBox: "",
    },
    validationSchema: SignUpSchemas,
    onSubmit: submit,
  });

  const inputClassName =
    "w-full border-b border-gray-500 text-white rounded-md pl-2 h-8 bg-neutral-900 outline-none";

  return (
    <div className="flex h-screen justify-center items-center bg-neutral-900 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 text-white w-3/12"
      >
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            className={inputClassName}
            type="text"
            id="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label>Şifre</label>
          <input
            className={inputClassName}
            type="password"
            id="password"
            placeholder="Şifre giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label>Şifre Tekrar</label>
          <input
            className={inputClassName}
            type="password"
            id="confirmPassword"
            placeholder="Şifre giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            id="checkBox"
            value={values.checkBox}
            onChange={handleChange}
          />
          <label>Kullanıcı sözleşmesini onaylıyorum.</label>
          {errors.checkBox && <p className="error">{errors.checkBox}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-white text-neutral-950 h-9 rounded-md hover:bg-slate-200 transition"
          >
            Kayıt ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
