"use client";
import { use } from "react";
import { UserContext } from "../UserContext/UserContext";

const useUsr = () => {
  const user = use(UserContext);
  return user;
};

export default useUsr;
