
import { useState , useEffect } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(() => {
        const raw = localStorage.getItem("user");
       return raw ? JSON.parse(raw) : null  
    })

const [token , setToken] = useState (() =>
localStorage.getItem("token") || "");


  useEffect(() => {
    if(token && ! user) {
        const raw = localStorage.getItem("user");

        if(raw)  setUser(JSON.parse(raw)) 
    }
} , [user , token]);

 const login = (userData , userTokens) => {
setUser(userData);
setToken(userTokens);

localStorage.setItem("user" , JSON.stringify(userData));
localStorage.setItem("token" , userTokens);

}

 const  logout =  () => {
    setUser("");
    setToken("");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

return (
    <AuthContext.Provider value = {{user , token , login , logout}}>
        {children}
    </AuthContext.Provider>
)
}