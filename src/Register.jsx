import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const registerLogics = (userData) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === userData.email);

    if (emailExists) {
      Swal.fire({
        icon: "error",
        title: "Email already exists",
        text: "Try another email",
      });
      return;
    }

    const { confirmPassword, ...newUser } = userData;

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "You can now login",
    }).then(() => {
      navigate("/login");
    });

    reset();
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">

        {/* HEADER */}
        <div className="register-header">
          <h1 className="register-title">FoodHub 🍔</h1>
          <p className="register-subtitle">Create your account</p>
        </div>

        {/* FORM */}
        <form className="register-form" onSubmit={handleSubmit(registerLogics)}>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name required" })}
            />
            <p className="error-text">{errors.name?.message}</p>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email required" })}
            />
            <p className="error-text">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: "Phone required" })}
            />
            <p className="error-text">{errors.phone?.message}</p>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
            />
            <p className="error-text">{errors.password?.message}</p>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm password required",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />
            <p className="error-text">{errors.confirmPassword?.message}</p>
          </div>

          <button className="register-btn" type="submit">
            Register
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="login-text">
          Already have an account?{" "}
          <Link className="login-link" to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;