import { useFormik } from "formik";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/AuthSlice";

let schema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email!")
    .required("Email is required"),
  password: Yup.string().required("Password required"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isLoading, isError, isSuccess, message } = authState.auth;

  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("admin");
    } else {
      // alert('')
    }
  }, [user, isLoading, isError, isSuccess, message]);
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#AFE1AF", minHeight: "100vh" }}
      >
        <br />
        <br />
        <br />
        <br />
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 login-wrapper">
          <h3 className="text-center">Login</h3>
          <p className="text-center">Login to your account to continue</p>

          <div className="error text-center">
            {message.message == "Rejected" ? "Only admins are allowed" : ""}
          </div>

          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              name="email"
              label="Email Address"
              id="email"
              onChng={formik.handleChange("email")}
              val={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <CustomInput
              type="password"
              name="password"
              label="Password  "
              id="pass"
              onChng={formik.handleChange("password")}
              val={formik.values.password}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-3 text-end">
              <Link to="forgot-password" className="">
                Forgot Password?
              </Link>
            </div>
            
            <Button
              className="border-0 px-3 py-2 fw-bold w-100 text-center text-decoration-none"
              style={{ background: "ffd333" }}
              type="submit"
            >
              Login
            </Button>
           
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
