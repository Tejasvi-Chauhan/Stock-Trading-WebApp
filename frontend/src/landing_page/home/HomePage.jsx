import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();

  // ✅ correct destructuring
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      // 🔐 no token → login
     

      try {
        const { data } = await axios.post(
          "http://localhost:8080",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast.success(`Welcome ${user} 👋`);
        } else {
          removeCookie("token");
          
        }
      } catch (e) {
        removeCookie("token");

      }
    };

    verifyUser();
  }, []);

  const Logout = () => {
    removeCookie("token");
    toast.info("Logged out");

    setTimeout(() => {
      navigate("/signup");
    }, 800);
  };

  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
