import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../helpers/firebase";

const AppContext = createContext();

export const AppContextprovider = ({children}) => {
    const [currentUser,setcurrentUser] = useState("")
    const [error,setError] = useState(false)
    useEffect(() => {
        mevcutKullanici(setcurrentUser)
    },[])
    console.log("mevcut kul",currentUser);
    return(
        <AppContext.Provider value={{currentUser,setcurrentUser,setError,error}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext;