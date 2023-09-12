import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';



const  Registro = () => {

  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() - 18); // Restar 18 años

  const [fechaNacimiento, setFechaNacimiento] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Fecha de Nacimiento:', fechaNacimiento);
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="name" placeholder="Ejemplo: Luis Miguel Gallego Basteri" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ejemplo123@email.com" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Minimo 6 caracteres" />
        </Form.Group>
      
        <Form.Group as={Col} controlId="formGridFechaNacimiento">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <DatePicker
            selected={fechaNacimiento}
            onChange={(date) => setFechaNacimiento(date)}
            dateFormat="dd/MM/yyyy"
            maxDate={fechaActual} 
            showYearDropdown
            scrollableYearDropdown
          />
        </Form.Group>
      

      <Row className="mb-3">
        

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Sexo</Form.Label>
          <Form.Select defaultValue="Elegir...">
            <option>Elegir...</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="No soy un robot" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        registrar
      </Button>
    </Form>
  );
}

export default Registro;