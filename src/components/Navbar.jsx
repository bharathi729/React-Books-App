import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';
import{Link} from 'react-router-dom';
import Favorites from './Favorites';
const Navbar=()=>{
    const{favorites,addToFavorites,removeFromFavorites,mount_component,setMountComponentHandler}=useAppContext();

    return (
       
        <div className='navbar'>
            { mount_component==='fav' &&
                <Link to="/" className="link1">
                    <img src="https://w7.pngwing.com/pngs/63/444/png-transparent-button-back-return-step-back-arrow-the-direction-of-the-thumbnail.png" className="back-icon" />
                </Link>
            }
            <div>
               <h1>React Books App</h1>
            </div>
            <div>
                <Link to="/favorites">
                    <h3>My Favourites:{favorites.length}</h3>
                </Link>
            </div>
        </div>
    );
}

export default Navbar
