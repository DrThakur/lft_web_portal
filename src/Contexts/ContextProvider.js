import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import Reducer from "./Reducer";

// Initial state for the user context
const INITIAL_STATE = {
  user: null, //  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// Initial state for the UI context
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // User authentication state using useReducer
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify(state.user));
    // if (state.user) {
    //   localStorage.setItem("user", JSON.stringify(state.user));
    // } else {
    //   localStorage.removeItem("user");
    // }
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user]);

  // UI related states using useState
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeRightSidebar, setActiveRightSidebar] = useState(false);
  const [activeName, setActiveName] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        // User context values
        user: state.user || {},
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        // UI context values
        currentColor,
        currentMode,
        activeMenu,
        activeName,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setActiveName,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        activeRightSidebar,
        setActiveRightSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
