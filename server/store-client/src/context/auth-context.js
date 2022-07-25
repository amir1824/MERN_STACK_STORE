import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  auth: (localStorage.getItem("authtoken")) ,
 
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {

  switch (action.type) {
   
    case "LOGIN_SUCCESS":
      return {
        auth: action.payload,
       
      };
 
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
 
  useEffect(() => {
     localStorage.setItem("authToken",state.auth)

  }, [state.auth]);

  return (
    <AuthContext.Provider
      value={{
        auth: state.auth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};