import React from 'react'
import SignUp from '../components/SignUp'

const RegistroProfesional = () => {

  const customProps = {
    formTitle: 'Registro de Profesional',
    buttonText: 'Registrar Profesional',
    showTermsAndConditions: true,
    registrationType: 'Profesional',
  };

  return (
    <div><SignUp {...customProps} /></div>
  )
}

export default RegistroProfesional;