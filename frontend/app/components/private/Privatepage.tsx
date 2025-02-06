import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const PrivatePage : React.FC<{children : React.ReactNode}>  = ({ children }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);

      if (!storedToken) {
        router.replace("/");
      }

      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return token ? <div>{children}</div> : null;
};

export default PrivatePage;