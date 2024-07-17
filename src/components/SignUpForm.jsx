import React from "react";
import { useFormik } from "formik";
import { SignUpSchemas } from "../schemas/SignUpSchemas";
import {
  Box,
  Button,
  Divider,
  Input,
  TextField,
  Typography,
} from "@mui/material";

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
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center flex-col ">
        <div className="w-full max-w-md flex gap-3 flex-col">
          <h3 className="text-3xl">
            hi<span className="text-orange-400">x</span>
          </h3>
          <p className="text-5xl">Sign in account</p>
          <p className="text-gray-400/90 text-lg">
            Welcome back, sign in to continue.
          </p>
          <div>
            <Button
              style={{
                borderColor: "#9ca3af",
                color: "white",
                marginTop: "10px",
              }}
              variant="outlined"
              className="w-3/4"
            >
              <p>
                Continue with <span className="text-orange-400">Google</span>
              </p>
            </Button>
          </div>
          <div>
            <Box className="flex items-center w-3/4">
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
              <Typography className="px-3 text-white">OR</Typography>
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
            </Box>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email adress"
                  className="w-3/4 h-10 p-2 bg-transparent border-gray-400 border rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-3/4 h-10 p-2 bg-transparent border-gray-400 border rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Button variant="contained" className="w-3/4" sx={{ backgroundColor: "orange" }}>
                  Sign in account
                </Button>
              </div>
              <p className="cursor-pointer">
                Don&apos;t have an account? <span className="text-orange-400">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img className="h-3/4 w-3/4" src="/resim.png" alt="" />
      </div>
    </div>
  );
};

export default SignUpForm;
