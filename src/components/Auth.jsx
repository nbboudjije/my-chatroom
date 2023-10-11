import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = (props) => {
  const { setisAuth } = props;
  const signGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("userloggedin", result.user.refreshToken);
      setisAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full relative h-screen">
      <div className="">
        <div className="absolute top-0 left-0 bg-black/50 w-full h-screen"></div>
        <div className="absolute gap-5 w-full h-screen top-0 left-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl">Sign In To Start Chating</h1>
          <button
            className="bg-purple-500 font-bold text-white p-3 rounded-xl animate-bounce"
            onClick={signGoogle}
          >
            Sign In With Google
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Auth;
