import React from 'react'
import styles from './Inicio.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function InicioScreen() {
  //utilizar react route para dirigirse de una ventana a otra mediante el boton de login
  return (
    <section className={styles.inicioContainer}>
      <div className={styles.box}>
        <h1 className={styles.title}>Escoge tu chamba.</h1>
        <h4 className={styles.description}>
          {/* "Conéctate al éxito: Donde los talentos y oportunidades se encuentran." */}
          Encuentra la chamba que más te convenga y chambea feliz.
        </h4>
        <Link to="/registro-empleador">              {/*Empleador */}
          <Button variant="primary" size="lg" active>Dar Chamba</Button>
        </Link>{' '}
        <Link to="/registro-profesional">            {/*Profesional */}
          <Button variant="primary" size="lg" active>Buscar Chamba</Button>
        </Link>
        </div>
    </section>
  );
}

export default InicioScreen;