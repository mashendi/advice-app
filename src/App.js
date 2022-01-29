import React from "react";
import { useSelector } from "react-redux";
import Advice from "./features/advice/Advice";
import Theme from "./features/theme/Theme";
import { selectTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useSelector(selectTheme);

  return (
    <div className={theme}>
      <Theme />
      <div className="h-screen flex justify-center items-center bg-slate-300 dark:bg-slate-700">
        <div className="container mx-auto">
          <Advice />
        </div>
      </div>
      
    </div>
  );
}

export default App;
