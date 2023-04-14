import {Link} from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions'
import { Connect } from 'react-redux';


function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className='tarjeta'>
         <img className='backTarjeta' src={image} alt="" />
         
          <button type='submit' className='xButton' onClick={()=>onClose(id)}>X</button>
         <div className='Informacion'>

         <h2 className='Name'>
         <Link className='Name'  to={`/detail/${id}`} > Nombre | {name}
         </Link>
            </h2>
         
         <p className='Info'>Status | {status}</p>
         <p className='Info'>Specie | {species}</p>
         <p className='Info'>Gender | {gender}</p>
         <p className='Info'>Origin | {origin}</p>
         </div>
          

         
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: () => {dispatch(addFav())},
      removeFav: () => {dispatch(removeFav())
   }
}


export default connect (
null,
mapDispathToProps
)(Card);