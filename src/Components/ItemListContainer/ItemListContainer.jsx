
const ItemListContainer = ({greeting}) => {
const estilos ={
color: 'black',
textAlign: 'center',
fontSize: '2rem'
};
  return (
    <div style={estilos}>
    {greeting}
    </div>
  )
}

export default ItemListContainer