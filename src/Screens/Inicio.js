import React from 'react'
import styles from './Inicio.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function InicioScreen() {
  return (
    <section className={styles.inicioContainer}>
      <div className={styles.box}>
        <h1 className={styles.title}>Escoge tu mejor opción.</h1>
        <h4 className={styles.description}>
          Conéctate al éxito: Donde los talentos y oportunidades se encuentran.

        </h4>
        <Link to="/registro-empleador">              {/*Empleador */}
          <Button variant="primary" size="lg" active>Empleador</Button>
        </Link>{' '}
        <Link to="/registro-profesional">            {/*Profesional */}
          <Button variant="primary" size="lg" active>Profesional</Button>
        </Link>
        </div>
    </section>
  );
}

export default InicioScreen;