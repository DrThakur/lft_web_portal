// import React from "react";
// import { useState } from "react";
// import logo from "../../Images/LFT-Logo.svg";
// import { Link } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [code, setCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showFields, setShowFields] = useState(false);

//   const handleSendCode = () => {
//     // Simulate sending code to the provided email
//     // Here you can implement the logic to send the code via an API or external service
//     if (email.trim() !== "") {
//       // Send code logic here
//       setMessage(`Code sent to ${email}`);
//       setShowFields(true);
//     } else {
//       setMessage("Please provide an email");
//     }
//   };

//   const handleResetPassword = () => {
//     // Handle password reset logic
//     if (
//       code.trim() === "" ||
//       newPassword.trim() === "" ||
//       confirmPassword.trim() === ""
//     ) {
//       setMessage("Please fill in all fields");
//     } else if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match");
//     } else {
//       // Password reset logic here
//       setMessage("Password successfully reset");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-1/3 bg-white p-8 shadow-lg rounded-md">
//         <div className="w-full mx-28 mt-4 flex items-center">
//           <img src={logo} alt="Logo" className="h-56 w-56 cursor-pointer" />
//         </div>
//         <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-2xl font-bold mb-4">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={handleSendCode}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//         >
//           Send Code
//         </button>
//         {message && <p className="text-lg mt-4 text-gray-600">{message}</p>}
//         <div className="font-bold text-xl mt-4">
//           <Link to="/login" className="text-blue-500 hover:text-blue-800">
//             Go back to login
//           </Link>
//         </div>
//         {showFields && (
//           <div className="mt-4">
//             <label htmlFor="code" className="block text-2xl font-bold mb-4">
//               Code
//             </label>
//             <input
//               type="text"
//               placeholder="Enter code"
//               className="w-full px-3 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />

//             <label htmlFor="password" className="block text-2xl font-bold mb-4">
//               New Password
//             </label>
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full px-3 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//             <label htmlFor="password" className="block text-2xl font-bold mb-4">
//               Confirm New Password
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm New Password"
//               className="w-full px-3 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button
//               onClick={handleResetPassword}
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
//             >
//               Reset My Password
//             </button>
//             <div className="flex justify-between font-bold text-xl mt-4">
//               <Link to="/login" className="text-blue-500 hover:text-blue-800">
//                 Back to Login
//               </Link>
//               <Link to="/" className="text-blue-500 hover:text-blue-800">
//                 Resend Code
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React from "react";
import { useState } from "react";
import logo from "../Images/LFT-Logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSendCode = () => {
    if (email.trim() !== "") {
      setShowFields(true);
      toast.info(`Code sent to ${email}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    } else {
      toast.error(`Please provide and email`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    }
  };

  const handleResetPassword = () => {
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
      toast.success(`Password successfully reset`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center h-screen w-full">
      <div className="w-1/3 bg-white p-8 shadow-lg rounded-md">
        <div className="w-full mx-28 mt-4 flex items-center">
          <img src={logo} alt="Logo" className="h-56 w-56 cursor-pointer" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-2xl font-bold mb-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={showFields}
          />
        </div>
        {showFields ? (
          <div className="mt-4">
            <label htmlFor="code" className="block text-2xl font-bold mb-4">
              Code
            </label>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full px-3 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <label htmlFor="password" className="block text-2xl font-bold mb-4">
              New Password
            </label>
            <div className="relative">
              <input
                type={newPasswordShown ? "text" : "password"}
                placeholder="New Password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute -mt-1 top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none text-2xl"
                onClick={toggleNewPasswordVisiblity}
              >
                {newPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <label htmlFor="password" className="block text-2xl font-bold mb-4">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordShown ? "text" : "password"}
                placeholder="Confirm New Password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
             <button
                type="button"
                className="absolute -mt-2 top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none text-2xl"
                onClick={toggleConfirmPasswordVisiblity}
              >
                {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
            >
              Reset My Password
            </button>
            <div className="flex justify-between font-bold text-xl mt-4">
              <Link to="/login" className="text-blue-500 hover:text-blue-800">
                Back to Login
              </Link>
              <button
                onClick={handleSendCode}
                className="text-blue-500 hover:text-blue-800"
              >
                Resend Code
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSendCode}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
            >
              Send Code
            </button>
            {message && <p className="text-lg mt-4 text-gray-600">{message}</p>}
            <div className="font-bold text-xl mt-4">
              <Link to="/login" className="text-blue-500 hover:text-blue-800">
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
