import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);    

    return (
        <>
            <h3>{category}</h3>
            {
                //distintas opciones para mensajes condicionales
                //1. Condicional implicito
                // isLoading && (<h2>Cargando...</h2>)
                //2. Condicional ternario
                // isLoading 
                // ? (<h2>Cargando...</h2>)
                // : null
                
            }
            {/* //3. Functional component para el mensaje */}
            {/* <LoadingMessage isLoading={isLoading}/> */}

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) =>
                        // <GifItem key={id} title={title} url={url} />   //una forma de hacerlo                     
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                    )
                }
            </div>

        </>
    )
}
