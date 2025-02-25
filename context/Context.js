"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [cartToggle, setCart] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);
  const [pricingFour, setPricingFour] = useState(true);
  const [isLightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [cart]);

  useEffect(() => {
    const themeType = localStorage.getItem("histudy-theme");
    if (themeType === "dark") {
      setLightTheme(false);
      document.body.classList.add("active-dark-mode");
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("active-dark-mode");
      localStorage.setItem("histudy-theme", "light");
    } else {
      document.body.classList.add("active-dark-mode");
      localStorage.setItem("histudy-theme", "dark");
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <CreateContext.Provider
      value={{
        toggle,
        setToggle,
        mobile,
        setMobile,
        smallMobileMenu,
        setsmallMobileMenu,
        cartToggle,
        setCart,
        search,
        setSearch,
        pricing,
        setPricing,
        pricingTwo,
        setPricingTwo,
        pricingThree,
        setPricingThree,
        pricingFour,
        setPricingFour,
        isLightTheme,
        setLightTheme,
        toggleTheme,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
