import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Components/ComponenteNavbar/ComponentNavbar';
import "./App.css"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  
  return (
    <>
      <div>
      
        <BasicExample/>
        <ItemListContainer greeting="Aqui sean Bienvenidos"/>
      </div>
      
    </>
  )
}

export default App
