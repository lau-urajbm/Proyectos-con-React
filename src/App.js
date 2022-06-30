
import './App.css';
import { Route, Routes } from "react-router-dom";
import BotonesParaElModal from './Modal/Componentes/botones para el modal';
import Calculator from './Calculadora/componentes/Calculator';
import { Contenedor } from './usando UseContext/components/Contenedor';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

 
  return (
    
      <Routes>
      <Route
        exact
        path="/"
        element={<BotonesParaElModal key={"botones"} />}

      />
      <Route  exact
        path="/calculator"
        element={<Calculator key={"calculadora"} />}
      />

      <Route  exact
        path="/Context"
        element={<Contenedor key={"context"} />}
      />



      
      </Routes>
     
    
  );
}

export default App;
