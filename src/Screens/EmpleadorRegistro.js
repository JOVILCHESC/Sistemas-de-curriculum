import React from 'react';
import SignUp from '../components/SignUp';

const RegistroEmpleador = () => {
  const customProps = {
    formTitle: 'Registro de Empleador',
    buttonText: 'Registrar Empleador',
    showTermsAndConditions: true,
    isEmployer: true,
    showFechaNacimiento: false,
    
  };
  return (
    <div>
      <SignUp {...customProps} />
    </div>
  );
}

export default RegistroEmpleador;