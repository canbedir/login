import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      checkBox: "",
    },
  });

  const inputClassName = "w-full border-b border-gray-500 text-white rounded-md pl-2 h-8 bg-neutral-900 outline-none"

  return (
    <div className="flex h-screen justify-center items-center bg-neutral-900 flex-col">
      <form className="flex flex-col gap-10 text-white w-3/12">
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            className={inputClassName}
            type="email"
            id="email"
            placeholder="Email giriniz"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            className={inputClassName}
            type="password"
            id="password"
            placeholder="Şifre giriniz"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            className={inputClassName}
            type="password"
            id="confirmPassword"
            placeholder="Şifre giriniz"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-row gap-2">
          <input type="checkbox" id="checkBox" value={formik.values.checkBox} onChange={formik.handleChange} />
          <label>Kullanıcı sözleşmesini onaylıyorum.</label>
        </div>

        <div className="flex flex-col gap-2">
          <button className="w-full bg-white text-neutral-950 h-9 rounded-md hover:bg-slate-200 transition">Kayıt ol</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
