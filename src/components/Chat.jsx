import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [filtredmessage, setfiltredMessage] = useState([]);
  const { room } = props;
  const messageRef = collection(db, "message");

  useEffect(() => {
    const queryMsg = query(
      messageRef,
      where("room", "==", room),
      orderBy("created_at")
    );
    const subscribe = onSnapshot(queryMsg, (snapshot) => {
      let mess = [];
      snapshot.forEach((doc) => {
        mess.push({ ...doc.data(), id: doc.id });
      });
      setfiltredMessage(mess);
      console.log(filtredmessage.text);
    });

    return () => {
      subscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(messageRef, {
        text: message,
        created_at: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen ">
      <div className="md:w-[500px] rounded-xl md:h-[500px] w-[100%] h-[100%] flex flex-col justify-between items-center fixed md:left-[30%] md:top-[10%] py-24 px-4 bg-slate-600">
        <div className="w-full h-12 absolute top-8 md:top-5 p-3">
          <h1 className="text-white font-bold text-4xl text-center">
            Room Name : {room}
          </h1>
        </div>
        <div className="flex gap-3 flex-row w-[85%] bg-white h-[70%] mb-5 rounded-xl shadow-xl shadow-slate-500 p-3 absolute md:top-20">
          <h1 className="font-bold">
            {filtredmessage.map((fmsg) => (
              <div>{fmsg.user}</div>
            ))}
          </h1>
          <h1 className="">
            {filtredmessage.map((fmsg) => (
              <div>{fmsg.text}</div>
            ))}
          </h1>
        </div>
        <div className=" absolute bottom-1 ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-row gap-2 "
          >
            <input
              type="text"
              placeholder="Enter Your Message"
              className="py-4 px-20 rounded-xl"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />

            <button
              type="submit"
              className="bg-purple-500 text-white font-bold p-2 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
