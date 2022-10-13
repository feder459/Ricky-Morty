//Mi primer componente funcional
/* onst Color = ({name, hex, id}) => {
    return (
        <div className='color-square' style={ {backgroundColor: hex}
    }>
        <h2> Id: {id} y Nombre: {name} </h2>
    </div>
    );
    
}
export default Color; */
const Color = ({ hex, name, setBackgroundColor }) => {
    return (
      <button
        className='color-square'
        style={{ backgroundColor: hex }}
        onClick={() => setBackgroundColor(hex)}
      >
        <h2>{name}</h2>
      </button>
    )
  }
  export default Color;
  