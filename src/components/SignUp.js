import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Register = (props) => {

  // Usar los props personalizados
  const { formTitle, buttonText, showTermsAndConditions, isEmployer, showFechaNacimiento } = props;

  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() - 18); // Restar 18 años

  const [fechaNacimiento, setFechaNacimiento] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Fecha de Nacimiento:', fechaNacimiento);
  };


  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>

      {/* Agregar el campo "Nombre de la empresa" solo para empleadores */}
      {/* {isEmployer && (
        <Form.Group as={Col} controlId="formGridCompany">
        <Form.Label>Nombre de la empresa</Form.Label>
        <Form.Control type="text" placeholder="" />
        </Form.Group>
      )} */}

      <Form.Group as={Col} controlId="formGridCompany">
        <Form.Label>{isEmployer ? 'Nombre de la empresa' : 'Nombre completo'}</Form.Label>
        <Form.Control type="text" placeholder={isEmployer ? 'Empleo Vita' : 'Luis Miguel Gallego Basteri'} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>{isEmployer ? 'Correo de la empresa' : 'Correo del Profesional'}</Form.Label>
          <Form.Control type="email" placeholder={isEmployer ? 'Empresa@gmail.com' : 'Profesional@gmail.com'} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Ejemplo: Santiago Polanco 2251" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Dirección 2</Form.Label>
        <Form.Control placeholder="Departamento, estudio, o piso" />
      </Form.Group> */}

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control />
        </Form.Group>

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

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}

        {/* <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group> */}
      </Row>
      

      <Row>

        {showFechaNacimiento && (
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
        )}
      
      </Row>



      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      {/* terminos y condiciones */}
      {showTermsAndConditions && (
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>
        )}

      <Button variant="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  </div>
  );
}

// Define las validaciones de PropTypes para los props
Register.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  showTermsAndConditions: PropTypes.bool.isRequired,
  isEmployer: PropTypes.bool.isRequired,
  showFechaNacimiento:PropTypes.bool.isRequired,
};

export default Register;