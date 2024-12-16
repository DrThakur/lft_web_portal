
import { useRef, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import logo from "../Images/LFT-Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const images = [
  `man_with_laptop.png`,
  `man_with_laptop.png`,
  `man_with_laptop.png`,
];

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useStateContext();
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isImageVisible, setIsImageVisible] = useState(true);

  // const baseURL = process.env.REACT_APP_BASE_URL;
  // const port = process.env.REACT_APP_BACKEND_PORT;

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
    passwordRef.current.focus();
  };

  // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/api/v1/auth/login"
  // const apiUrl1 = `http://${baseURL}:${port}/api/v1/auth/login`
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log("my api url final", apiUrl);
  console.log("Environment Variables:", process.env);

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("My login response", res);
      const token = res.data.token;
      const decodedToken = jwtDecode(token);
      const userData = decodedToken;
      console.log("user Dtata", userData);

      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      return navigate("/dashboard");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMsg("*Incorrect email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    dispatch({ type: "LOGIN_START" });
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email: "guest@example.com",
        password: "guestpassword",
      });
      console.log("Guest login response", res);
      const token = res.data.token;
      const decodedToken = jwtDecode(token);
      const userData = decodedToken;
      console.log("Guest user data", userData);

      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      return navigate("/dashboard");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMsg("*Guest login failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the screen size on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 767) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  }, [screenSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Left Section: Image */}
      {isImageVisible && (
        <div className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center ml-4 relative overflow-hidden">
          <div className="w-full h-full flex justify-center items-center relative">
            {images.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute ${index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  maxWidth: "80%",
                  maxHeight: "80%",
                  objectFit: "cover",
                  transition: "transform 1s ease", // Smooth sliding transition
                  transform: `translateX(${index === currentImage ? "0" : "100%"})`, // Slide effect
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 absolute  md:bottom-52 lg:bottom-10 w-full">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentImage ? "bg-white" : "bg-white opacity-50"
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      )}


      {/* Right Section: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8 md:px-12 md:py-16">
        <div className="w-full max-w-md space-y-2 bg-white p-6 rounded-xl shadow-2xl">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-24 w-44 cursor-pointer" />
          </div>
          <div className="text-3xl font-bold mb-6 text-center -mt-8 flex items-center">
            <hr className="flex-grow border-t-2 border-blue-400 rounded-lg shadow-md mb-4 mt-4" />
            <span className="px-4">Web Portal</span>
            <hr className="flex-grow border-t-2 border-blue-400 rounded-lg shadow-md mb-6 mt-4" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

          <form onSubmit={handleSignin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-xl font-bold mb-2">Password</label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisiblity}
                >
                  {passwordShown ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="mb-4 mt-4 flex  justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xl">
                  Remember me
                </label>
              </div>
              <div className="font-bold text-blue-600 text-xl ml-4">
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
            </div>
            <p className="text-red-500 text-xl font-bold mb-2">{errorMsg}</p>

            <button
              type="submit"
              disabled={isFetching || loading}
              onClick={handleSignin}
              className={`w-full py-3 text-xl rounded-md ${isFetching || loading
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <div className="font-bold text-xl mt-4">
              Facing issues?{" "}
              <Link to="" className="text-blue-500 hover:text-blue-800">
                Contact Us
              </Link>
            </div>
          </form>

          <div className="mt-4 font-bold text-center">
            <button
              onClick={handleGuestLogin}
              className="w-full py-3 text-lg rounded-md bg-gray-300 hover:bg-gray-500"
            >
              Login as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
