import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
interface authType {
  [key: string]: string | object;
}
const API_BASE_URL = "http://localhost:5000";
export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const register = async (data: authType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, data);
      if (response.status === 201) {
        alert("User signed up successfully");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/ui_design");
      }
    } catch (err) {
      const errorMessage =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: authType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      if (response.status === 200) {
        alert("User Logged in Successfully");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/ui_design");
      }
    } catch (err: unknown) {
      const errorMessage =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "Invalid login credentials";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/logout`);
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.replace("/");
      }
    } catch (error: unknown) {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        "Logged out";
      setError(errorMessage);
    }
  };

  return { register, userLogin, logout, loading, error };
};
