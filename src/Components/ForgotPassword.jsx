import React, { useState } from "react";
import logo from "../Images/LFT-Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  const handleSendCode = async () => {
    setLoading(true);
    if (email.trim() !== "") {
      setShowFields(true);
      try {
        const res = await axios.post(`${apiUrl}/api/v1/auth/forgotPassword`, {
          email: email.trim(),
        });
        console.log("My login response", res);

        toast.info(`Reset Code sent to ${email}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // 3 seconds
        });
      } catch (error) {
        console.log(error);
        // setErrorMsg("*Incorrect email or password.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error(`Please provide and email`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    }
  };

  const handleResetPassword = async () => {
    if (
      code.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast.warn(` Please fill in all fields`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    } else if (newPassword !== confirmPassword) {
      toast.error(`Passwords do not match`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    } else {
      setLoading(true);
      try {
        const res = await axios.patch(`${apiUrl}/api/v1/auth/resetPassword`, {
          email: email.trim(),
          resetCode:code.trim(),
          newPassword:newPassword,
          confirmPassword:confirmPassword
        });
        console.log("My login response", res);
        setEmail("");
        setCode("");
        setNewPassword("");
        setConfirmPassword("");
        return navigate("/");
      } catch (error) {
        console.log(error);
        // setErrorMsg("*Incorrect email or password.");
      } finally {
        setLoading(false);
      }

      toast.success(`Password successfully reset`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center min-h-screen min:w-full p-8">
      <div className="w-full sm:w-11/12 md:w-8/12 lg:w-5/12 xl:w-4/12 bg-white p-8 shadow-xl rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="w-full mx-auto mt-4 flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-28 w-28 sm:h-32 sm:w-32 cursor-pointer" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Forgot Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={showFields}
            required
          />
        </div>
        {showFields ? (
          <div className="mt-4">
            <label htmlFor="code" className="block text-lg font-bold mb-2 text-gray-700">
              Code
            </label>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-lg"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />

            <label htmlFor="newPassword" className="block text-lg font-bold mb-2 text-gray-700">
              New Password
            </label>
            <div className="relative">
              <input
                type={newPasswordShown ? "text" : "password"}
                placeholder="New Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-lg"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none text-xl"
                onClick={toggleNewPasswordVisiblity}
              >
                {newPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <label htmlFor="confirmPassword" className="block text-lg font-bold mb-2 text-gray-700">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordShown ? "text" : "password"}
                placeholder="Confirm New Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-500 text-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none text-xl"
                onClick={toggleConfirmPasswordVisiblity}
              >
                {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset My Password"}
            </button>
            <div className="flex justify-between font-bold text-lg mt-4">
              <Link to="/" className="text-blue-500 hover:text-blue-800">
                Back to Login
              </Link>
              <button
                onClick={handleSendCode}
                className="text-blue-500 hover:text-blue-800"
                disabled={loading}
              >
                {loading ? "Sending..." : "Resend Code"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSendCode}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Code"}
            </button>
            {message && <p className="text-lg mt-4 text-gray-600">{message}</p>}
            <div className="font-bold text-lg mt-4">
              <Link to="/" className="text-blue-500 hover:text-blue-800">
                Go back to login
              </Link>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
