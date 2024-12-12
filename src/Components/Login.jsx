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
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center m-4 rounded-md">
        <div className="relative">
          <div className="flex justify-center items-center h-full overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                style={{ maxWidth: "80%", maxHeight: "80%", margin: "auto" }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-2">
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
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/5 h-[96%] bg-white p-10 rounded-xl shadow-2xl">
          <div className="w-full mx-28 mt-4">
            <img src={logo} alt="Logo" className="h-56 w-56 cursor-pointer" />
          </div>
          <div className="text-3xl font-bold mb-6 text-center -mt-8 flex items-center">
            <hr className="flex-grow border-t-2 border-blue-400 rounded-lg shadow-md mb-4 mt-4" />
            <span className="px-4">Web Portal</span>
            <hr className="flex-grow border-t-2 border-blue-400 rounded-lg shadow-md mb-4 mt-4" />
          </div>
          <h2 className="text-4xl font-bold mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-4 text-2xl font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="email"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-4 text-2xl font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none text-2xl"
                  onClick={togglePasswordVisiblity}
                >
                  {passwordShown ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-6 mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xl">
                  Remember me
                </label>
              </div>
              <div className="font-bold text-blue-600 text-xl">
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
            </div>
            <p className="text-red-500 text-xl font-bold mb-2">{errorMsg}</p>
            <button
              type="submit"
              disabled={isFetching || loading}
              onClick={handleSignin}
              className={`w-full py-3 rounded-md text-2xl ${
                isFetching || loading
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {loading ? "Loading...." : "Login"}
            </button>
            <div className="font-bold text-xl mt-4">
              Facing issues?{" "}
              <Link to="" className="text-blue-500 hover:text-blue-800">
                Contact Us
              </Link>
            </div>
          </form>
          <div className="font-bold text-xl mt-4 text-center">
            <button
              onClick={handleGuestLogin}
              className="text-black-500 hover:text-black-800 bg-gray-300 hover:bg-gray-500 w-full py-3 rounded-md "
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
