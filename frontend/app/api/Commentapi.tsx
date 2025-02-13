import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ObjectId } from "bson";

export const useComment = () => {
  const id = new ObjectId();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );

  const Addcomments = async (comment: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comment/send/${id.toString()}`,
          { comment },
          {
              headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        );
        
        console.log("data", response.data.comments);
        
        if (response.status === 200) {
            alert("Comment set");
            setComments((prevComments) => [...prevComments, response.data.comments]);
        }
    } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message: string }>;
        setError(axiosError.response?.data?.message || "Unknown error occurred");
      console.log('error',error);
    } finally {
      setLoading(false);
    }
  };
   
  return { loading, error, Addcomments, comments, setComments };
};
