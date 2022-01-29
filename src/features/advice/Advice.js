import React, { useEffect } from "react";
import { FaRandom } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";
import { selectTheme } from "../theme/themeSlice";
import { fetchAdvice, selectAdvice, selectIsLoading } from "./adviceSlice";

const Advice = () => {
  const advice = useSelector(selectAdvice);
  const isLoading = useSelector(selectIsLoading);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvice());
  }, [dispatch]);

  return (
    <>
      <div className="text-slate-700 dark:text-slate-300 text-5xl lg:text-7xl text-center">
        {!isLoading ? (
          <div>
            <div>{advice}</div>
            <button
              className="text-3xl mt-10 p-2"
              onClick={() => dispatch(fetchAdvice())}
            >
              <FaRandom />
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <PuffLoader
              size={150}
              color={theme === "dark" ? "#cbd5e1" : "#334155"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Advice;
