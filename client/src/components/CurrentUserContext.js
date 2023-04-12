import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserContext = createContext(null)

export const CurrentUserProvider = ({ children }) => {
  // state relative to the user we want sent accross the whole site.
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);

  // send the user's info to the backend and set that user with its details in a state.
  useEffect(() => {
    if(user) {
      fetch("/api/addUserOrLogin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentUser(data.data)
        })
        .catch((error) => {
          console.log("this is error from HomeFeed Post");
          console.log(error);
        });
    }
    else {
      setCurrentUser(null)
    }
  }, [user])

  return (
    <>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, user, isAuthenticated, loginWithPopup, logout }}>
          {children}
        </CurrentUserContext.Provider>
    </>
  )
}