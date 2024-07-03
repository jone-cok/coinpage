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
    <section className="container w-full h-full lg:w-[855px] m-auto" >
      <div className=" flex flex-row w-full opacity-50 bg-[#8ea4a6] rounded-[20px]"  >
        <div className="img-container" >
        </div>
        <div className="bg-codgray">
          <div className="bg-curiousblue">
            <div className=" bg-white" style={{ width: "295px", height: "36px", borderRadius: "40px", border: "1px #F2F2F2 solid" }}>
              tab
            </div>
            <div className="">
              #
            </div>
          </div>
          <div className="">
            <form className="" >
              <div>Input Email and Password</div>
              <div>
                <input
                  type="email"
                  className=" w-full rounded-xl bg-[#D7D7D7] p-3 shadow-2xl"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  type="password"
                  className=" w-full rounded-xl bg-[#D7D7D7] p-3 shadow-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
              <button
                className="mt-4 w-full rounded-xl py-4 text-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
            <div style={{ height: "140px" }}>
              links
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;