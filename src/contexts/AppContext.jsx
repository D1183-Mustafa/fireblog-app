import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../helpers/firebase";

const AppContext = createContext();


export const AppContextprovider = ({children}) => {
    const [currentUser,setcurrentUser] = useState("")
    const [blog,setBlog] = useState({
        user : "",
        title: "",
        imageUrl : "",
        content: "",
        date : ""
    })
    useEffect(() => {
        mevcutKullanici(setcurrentUser)
    },[])
    console.log("mevcut kul",currentUser);
    return(
        <AppContext.Provider value={{currentUser,setcurrentUser,setBlog,blog}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext;