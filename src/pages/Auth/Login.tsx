import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import loginimg from "../../assets/login.png";
import "./Login.scss"

import { login } from "@/services/apis/auth";
import { useUserContext } from "@/context/UserContext";
import { AuthResponse } from "@/types/auth.types";
import { CustomToast } from "@/components/Toast";


import path from "@/constants/path";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const resp: AuthResponse = await login({ email, password });

    if (resp.status == 200) {
      setToken(resp.token as string);
      navigate(path.Profile);
    } else {
      CustomToast({
        toastType: "error",
        title: resp.msg,
      });
    }
  };

  return (
    <section >
      <div className="card">
        <div className="card-img" >
        </div>
        <div className="card-body">
          <div className="card-upper">
            agwaegwaeg
          </div>
          <div className="card-footer">
            aegwagaweg
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;