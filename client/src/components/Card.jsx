import {Link, useLocation} from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = ({
   id,
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose,
 }) => {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const { myFavorites } = useSelector((state) => state);
   const { pathname } = useLocation();
 
   const handleFavorite = () => {
     if (isFav) {
       setIsFav(false);
       dispatch(removeFav(id));
     } else {
       setIsFav(true);
       dispatch(addFav({ id, name, status, species, gender, origin, image }));
     }
   };
 
   useEffect(() => {
     myFavorites.forEach((fav) => {
       if (fav.id === id) {
         setIsFav(true);
       }
     });
   }, [myFavorites]);
 
   return (
     <div className='tarjeta'>
      <img className='backTarjeta' src={image} alt="" />
         <button onClick={handleFavorite} className='xButton'>
           {isFav ? "❤️" : "🤍"}
         </button>
         {pathname !== "/favorites" && (
            <button
             onClick={() => {
                onClose(id);
             }}
             className='xButton'
           >
             x
           </button>
         )}
      <div className='Informacion'>
 
       <Link to={`/detail/${id}`}>
         <h3>{name}</h3>
       </Link>
       <p>{status}</p>
       <p>{species}</p>
       <p>{gender}</p>
       <p>{origin.name}</p>
       </div>
     </div>
   );
 };

// function Card({id, name, status, species, gender, origin, image, onClose}) {
  
  
  
//    return (
//       <div className='tarjeta'>
//          <img className='backTarjeta' src={image} alt="" />
         
//           <button type='submit' className='xButton' onClick={()=>onClose(id)}>X</button>
//          <div className='Informacion'>

//          <h2 className='Name'>
//          <Link className='Name'  to={`/detail/${id}`} > Nombre | {name}
//          </Link>
//             </h2>
         
//          <p className='Info'>Status | {status}</p>
//          <p className='Info'>Specie | {species}</p>
//          <p className='Info'>Gender | {gender}</p>
//          <p className='Info'>Origin | {origin}</p>
//          </div>
          

         
//       </div>
//    );
// }





export default Card;