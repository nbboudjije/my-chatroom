import React, { useRef } from "react";

const Room = (props) => {
  const { setRoom } = props;

  const roomRef = useRef(null);
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex flex-col justify-center items-center gap-3"
    >
      <h1 className="text-4xl font-bold text-center">Welcome to The Chat!</h1>
      <input
        type="text"
        className="p-3 rounded bg-slate-700"
        placeholder="Room Name"
        ref={roomRef}
      />

      <button
        className="bg-purple-400 font-bold rounded-xl p-3 text-white"
        onClick={() => {
          setRoom(roomRef.current.value);
        }}
      >
        Get to The Room
      </button>
    </div>
  );
};

export default Room;
