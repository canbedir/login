import React, { useState } from "react";
import { useFormik } from "formik";
import { SignUpSchemas } from "../schemas/SignUpSchemas";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  Email,
  Lock,
  Password,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9ca3af", // Varsayılan border rengi
    },
    "&:hover fieldset": {
      borderColor: "#9ca3af", // Hover durumunda border rengi
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Odaklandığında border rengi
    },
  },
  "& .MuiInputBase-input": {
    color: "white", // İçindeki yazının rengi
  },
  "& .MuiInputLabel-root": {
    color: "#9ca3af", // Label rengi
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white", // Odaklanıldığında label rengi
  },
}));

const SignUpForm = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                <CustomTextField
                  className="w-3/4"
                  label="Email"
                  size="medium"
                  type="email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "#9ca3af", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <CustomTextField
                  className="w-3/4"
                  label="Password"
                  size="medium"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "#9ca3af", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ color: "#9ca3af" }}
                          aria-label="şifreyi göster/gizle"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex justify-between items-center w-3/4">
                <div>
                  <Switch {...label} color="warning" />
                  <label className="text-sm">Remember me</label>
                </div>
                <div>
                  <p className="text-sm text-orange-400 cursor-pointer">
                    Forgot password?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Button
                  variant="contained"
                  className="w-3/4"
                  sx={{ backgroundColor: "orange" }}
                >
                  Sign in account
                </Button>
              </div>
              <p className="cursor-pointer">
                Don&apos;t have an account?{" "}
                <span className="text-orange-400">Sign up</span>
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
