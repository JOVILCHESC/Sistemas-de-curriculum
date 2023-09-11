import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import InicioScreen from './Screens/Inicio';
import BuscarEmpresaScreen from './Screens/BuscarEmpresa';
import EmpleadoresScreen from './Screens/Empleadores';
import RegistroEmpleador from './Screens/EmpleadorRegistro';
import NavbarComponent from './components/Navbar';
import RegistroProfesional from './Screens/ProfesionalRegistro';




function App() {
  return (
    <Router>
      <NavbarComponent/>
      <div>
        <Routes> {/* Cambia a "Routes" */}
              <Route path="/" element={<InicioScreen />} /> {/* Usa "element" */}
              <Route path="/home" element={<InicioScreen />} /> {/* Usa "element" */}
              <Route path="/link1" element={<BuscarEmpresaScreen />} /> {/* Usa "element" */}
              <Route path="/link2" element={<EmpleadoresScreen />} /> {/* Usa "element" */}
              <Route path="/registro-empleador" element={<RegistroEmpleador />} /> {/* Usa "element" */}
              <Route path="/registro-profesional" element={<RegistroProfesional />} /> {/*Usa "element"*/}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
