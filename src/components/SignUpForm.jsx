import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9ca3af",
    },
    "&:hover fieldset": {
      borderColor: "#9ca3af",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "#9ca3af",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
}));

const SignUpForm = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Form durumunu yönetmek için state

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  const handleFormToggle = () => {
    setIsSignUp(!isSignUp); // Formlar arasında geçiş yap
  };

  return (
    <div className={`flex h-screen ${isSignUp ? "sign-up" : "sign-in"}`}>
      <div
        className={`flex-1 flex items-center justify-center m-5 flex-col form-container transition-transform duration-500 ${
          isSignUp ? "md:translate-x-full sm:translate-x-0" : ""
        }`}
      >
        <div className="w-full max-w-md flex gap-3 flex-col">
          <h3 className="text-3xl">
            hi<span className="text-orange-400">x</span>
          </h3>
          <p className="text-5xl">
            {isSignUp ? "Sign up account" : "Sign in account"}
          </p>
          <p className="text-gray-400/90 text-lg">
            {isSignUp
              ? "Create your account."
              : "Welcome back, sign in to continue."}
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
                {isSignUp ? (
                  <div className="flex flex-col gap-4">
                    <div>
                      <CustomTextField
                        className="w-3/4"
                        label="Password"
                        size="medium"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock
                                sx={{ color: "#9ca3af", fontSize: "20px" }}
                              />
                            </InputAdornment>
                          ),
                          endAdornment: password && (
                            <InputAdornment position="end">
                              <IconButton
                                sx={{ color: "#9ca3af" }}
                                aria-label="şifreyi göster/gizle"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div>
                      <CustomTextField
                        className="w-3/4"
                        label="Password"
                        size="medium"
                        type={showPassword2 ? "text" : "password"}
                        onChange={handlePasswordChange2}
                        value={password2}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock
                                sx={{ color: "#9ca3af", fontSize: "20px" }}
                              />
                            </InputAdornment>
                          ),
                          endAdornment: password2 && (
                            <InputAdornment position="end">
                              <IconButton
                                sx={{ color: "#9ca3af" }}
                                aria-label="şifreyi göster/gizle"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword2}
                              >
                                {showPassword2 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <CustomTextField
                    className="w-3/4"
                    label="Password"
                    size="medium"
                    type={showPassword2 ? "text" : "password"}
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#9ca3af", fontSize: "20px" }} />
                        </InputAdornment>
                      ),
                      endAdornment: password && (
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
                )}
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
                  {isSignUp ? "Sign up" : "Sign in"} account
                </Button>
              </div>
              <p className="cursor-pointer" onClick={handleFormToggle}>
                {isSignUp ? (
                  <p>
                    Already have an account?{" "}
                    <span className="text-orange-400">Sign in</span>
                  </p>
                ) : (
                  <p>
                    Don&apos;t have an account?{" "}
                    <span className="text-orange-400">Sign up</span>
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:flex flex-1 items-center justify-center image-container transition-transform duration-500 ${
          isSignUp ? "-translate-x-full" : ""
        }`}
      >
        <img
          className="md:h-96 md:w-96 lg:h-3/4 lg:w-3/4"
          src="/resim.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUpForm;
