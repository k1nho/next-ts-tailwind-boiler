import React, { useEffect } from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <div className="mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
