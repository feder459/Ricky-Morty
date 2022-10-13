import { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import { getData } from '../service';

const Tarjetas = () => {
    const [tarjetas, setTarjetas] = useState([]);
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getData()
            .then((data) => setTarjetas(data.results))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className='page'>
            {isLoading && <span className='loading-text'>Loading</span>}
            <div>
                <img src={image} alt="No hay imagen" />
            </div>

            {charList.map((char) => (
                <Char
                    key={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    imageUrl={char.image}
                    setImage={setImage}
                />
            ))
            }
        </div >
    );
}
export default Tarjetas;