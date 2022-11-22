import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);

    if(context===undefined){
        throw new Error('AppContext must be within AppContextProvider');
    }

    return context;
}
const AppContextProvider=({children})=>{
    const [favorites,setFavorites]=useState([]);
    const [mount_component,setMountComponent]=useState();
    const setMountComponentHandler=(key)=>{
        setMountComponent(key)
    }


    const addToFavorites=(book)=>{
        const oldFavorites=[...favorites];

        const newFavorites=oldFavorites.concat(book);

        setFavorites(newFavorites);

    }


    const removeFromFavorites=(id)=>{
        
        const oldFavorites=[...favorites];
        const newFavorites=oldFavorites.filter((book)=>book.id!==id);

        setFavorites(newFavorites);
    }

    return(
        <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites,mount_component,setMountComponentHandler}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider