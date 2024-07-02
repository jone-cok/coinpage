// import Logo from "@/assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/UserContext";
import { signup } from "@/services/apis/auth";
import { AuthResponse } from "@/types/auth.types";
import { CustomToast } from "@/components/Toast";
import path from "@/constants/path";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shelter, setShelter] = useState("");
  const [password2, setPassword2] = useState("");

  const { setToken } = useUserContext();
  const navigate = useNavigate();

  const handleSignup = async () => {
    const resp = (await signup({ shelter, email, password, password2 })) as AuthResponse;

    if (resp.status == 200) {
      setToken(resp.token as string);
      CustomToast({
        toastType: "success",
        title: "Register successfully!",
      });
      navigate(path.Profile);
    } else {
      CustomToast({
        toastType: "error",
        title: resp.msg,
      });
    }
  };

  return (
    <div className="flex justify-center pt-10 text-black">
      <div className="w-96">
        <div className="mt-6 grid grid-cols-1 gap-6">
          <div>Create Email and Password</div>
          <div>
            <input
              type="text"
              className="styled-input w-full rounded-xl bg-[#D7D7D7] p-3 shadow-lg"
              placeholder="Address of shelter"
              value={shelter}
              onChange={(e) => setShelter(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="email"
              className="styled-input w-full rounded-xl bg-[#D7D7D7] p-3 shadow-lg"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              className="styled-input w-full rounded-xl bg-[#D7D7D7] p-3 shadow-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              className="styled-input w-full rounded-xl bg-[#D7D7D7] p-3 shadow-lg"
              placeholder="Retype Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            ></input>
          </div>
          <button
            className="signUpButtonColor mt-4 w-full rounded-xl py-4 text-white"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
