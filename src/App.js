import Auth from "./components/Auth";
import Room from "./components/Room";
import Cookies from "universal-cookie";
import { useState } from "react";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const cookies = new Cookies();

function App() {
  const [isAuth, setisAuth] = useState(cookies.get("userloggedin"));
  const [room, setRoom] = useState(null);
  const singoutFun = () => {
    try {
      signOut(auth);
      setisAuth(false);
      cookies.remove("userloggedin");
      setRoom(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setisAuth={setisAuth} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-slate-400">
      <div>{room ? <Chat room={room} /> : <Room setRoom={setRoom} />}</div>
      <div className="">
        <button
          onClick={singoutFun}
          className="p-3 bg-stone-800 text-white top-0 absolute"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default App;
