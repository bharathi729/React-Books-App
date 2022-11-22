import React from 'react'
import { useEffect } from 'react';
import '../App';
import { useAppContext } from './context/appContext';
const Favorites=()=>{
    const{favorites,addToFavorites,removeFromFavorites,setMountComponentHandler}=useAppContext();

    console.log("Favorites are",favorites);

    const favoritesChecker=(id)=>{
        const boolean=favorites.some((book)=>book.id===id);
        return boolean;
    }

    useEffect(()=>{
        // console.log("mounted");
        setMountComponentHandler("fav")
        return ()=>{
            // console.log("unmounted")
            setMountComponentHandler('main')
        }
    },[])
    return(
        <div className='favorites'>
            {favorites.length > 0 ? favorites.map((book)=>(
                <div key={book.id} className="book">
                    <div>
                        <h4>{book.title}</h4>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" />
                    </div>
                    <div>
                        {favoritesChecker(book.id)? ( 
                        <button onClick={()=>removeFromFavorites(book.id)}>Remove from Favorites</button>
                        ) : (<button onClick={()=>addToFavorites(book)}>Add to Favorites</button>
                        )}
                       
                    </div>
                </div>
            )):<h1>You don't have any favorite books yet!1</h1>}
        </div>
    );
}
export default Favorites