import { useComment } from "@/app/api/Commentapi";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Comments = () => {
  const [comment, setComment] = useState<string>("");
  const { Addcomments, comments, setComments } = useComment();
  const user = localStorage.getItem("user");

  useEffect(() => {
    socket.on("comment", (newComment) => {
      setComments((prevComments) => [...prevComments, newComment]);
    });

    return () => {
      socket.off("comment");
    };
  }, []);

  const sendComment = () => {
    if (!user) return;

    const object = JSON.parse(user);
    const name = object.fullName.firstName;

    if (comment.trim()) {
      const newComment = { name, comment };

      socket.emit("comment", newComment);
    }
    Addcomments(comment);
    setComment("");
  };
  useEffect(() => {
 
  }, []);

  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-xl font-bold">Comments</h1>
      <div>
        {comments.map((cmt, id) => (
          <div key={id}>
            <strong className="capitalize">{cmt.name}</strong>
            <p>{cmt.comment}</p>
            <button className="w-[100px] border">Reply</button>
          </div>
        ))}
      </div>
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
