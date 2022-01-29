import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { selectTheme, toggle } from "./themeSlice";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Theme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(toggle());
  };
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 p-10">
        {theme === "light" ? (
          <FaMoon className="text-slate-700 text-2xl" onClick={toggleTheme} />
        ) : (
          <FaSun className="text-yellow-400 text-2xl" onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default Theme;
