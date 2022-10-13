import { useState, useEffect } from "react";
import Color from "./Color";
import { getColors } from '../service';
import { colors } from './colors';

//COMPONENTE FUNCIONAL
/*
const ColorList = () => {

    const [colorList, setColorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cargarColores = () => {
        setIsLoading(true)
        setTimeout(() => {
            setColorList(colors)
            setIsLoading(false)
        }, 3000);
    }
    return (
        <>
            <button onClick={() => cargarColores()}>Click me</button>
            {
                isLoading &&
                <h1>Loading</h1>}
            <div>
                {
                    //map sirve para iterar una lista
                    colorList.map(color =>
                        <Color name={color.name} hex={color.hex} key={color.id} id={color.id} />
                    )
                }
            </div>
        </>
    );
}
    */
//COMPONENTE DE CLASE

/* class ColorList extends Component {
    constructor() {
        super()
        this.state = {
            colorList: [],
            isLoading: false
        }
    }
    render() {
                const cargarColores = () => {
                    this.setState({ isLoading: true })
                    setTimeout(() => {
                        this.setState({
                            colorList: colors,
                            isLoading: false
                        })
                    }, 3000);
                }
                const { colorList, isLoading } = this.state
                return (
                    <>
                        <button onClick={() => cargarColores()}>Click me</button>
                        {
                            isLoading &&
                            <h1>Loading</h1>}
                        <div>
                            {
                                //map sirve para iterar una lista
                                colorList.map(color =>
                                    <Color name={color.name} hex={color.hex} key={color.id} id={color.id} />
                                )
                            }
                        </div>
                    </>
                );
            }
        
        }
         */
const ColorPicker = () => {
    const [colorList, setColorList] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [isLoading, setIsLoading] = useState(false);
    /* LLAMADA A LA API*/
     useEffect(() => {
        setIsLoading(true);
        getColors()
            .then((data) => setColorList(data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    /*     useEffect(() => {
            setIsLoading(true)
            const timeOut = setTimeout(() => {
                setColorList(colors)
                setIsLoading(false)
            }, 2000)
            return () => {
                clearTimeout(timeOut)
            }
        }, []);
     */
    return (
        <div className='page' style={{ backgroundColor }}>
            {isLoading && <span className='loading-text'>Loading</span>}
            {colorList.map((color) => (
                <Color
                    key={color.id}
                    hex={color.hex}
                    name={color.name}
                    setBackgroundColor={setBackgroundColor}
                />
            ))}
        </div>
    );
}
export default ColorPicker;
