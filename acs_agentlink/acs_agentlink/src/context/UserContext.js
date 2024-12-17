"use client";

import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
        try {
          const response = await axios.get("/api/user");
          setUser(response.data);
        } catch (err) {
          setError("Failed to fetch user data");
        }
      };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
