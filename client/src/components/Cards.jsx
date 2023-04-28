import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div className='galeria'>
         {
      characters.map(({name, status, species, gender, origin, image, id}) =>{
         return(
            
            
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            origin={origin.name}
            gender={gender}
           image={image}
           onClose={onClose}

            />
         
            )
         })}
         </div>
   );
}
