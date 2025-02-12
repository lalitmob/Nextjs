import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");
const Comments = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const user = localStorage.getItem("user");
  const[replay, setReplay] = useState()
  useEffect(() => {
    socket.on("comment", (data) => {
      setComments((prevComments) => [...prevComments, data]);
    });
    return () => {
      socket.off("comment");
    };
  }, []);
  const sendComment = () => {
    const object = JSON.parse(user);
    if (user) {
      const name = object.fullName.firstName;
      if (comment.trim()) {
        socket.emit("comment", { comment, name });
        setComment("");
      }
      console.log(name);
    }
  };
  const handleReplay = () =>{
    
  }
  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-xl font-bold">Comments</h1>
      <div>
        {comments.map((cmt, id) => (
          <div key={id}>
            <strong className="capitalized">{cmt.name}</strong>
            <p>{cmt.comment}</p>
            <button onClick={()=>handleReplay()} className="w-[100px] border">Reply</button>
          </div>
        ))}
      </div>
      <div></div>
      <div className="flex gap-5 flex-wrap ">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded-xl focus:outline-none focus:border-green-400 px-3 w-[90%] max-h-[200px] border-black-1"
        />
        <button
          onClick={sendComment}
          className="border px-10 py-2 h-[50px] rounded-xl bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Comments;
