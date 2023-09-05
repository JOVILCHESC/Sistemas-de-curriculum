import React from 'react'
import styles from './Inicio.module.css';
import Button from 'react-bootstrap/Button';
function InicioScreen() {
  return (
    <section className={styles.inicioContainer}>
      <div className={styles.box}>
        <h1 className={styles.title}>Escoge tu mejor opcion.</h1>
        <h4 className={styles.description}>
          {/*La pagina sirve para contratar personas o encontrar empleos*/}
          Encuentra la oferta que más te convenga y pagás solo lo necesario, no importa el tamaño de tu empresa.
        </h4>
        <Button variant="primary" size="lg" active>
          Dar chamba
        </Button>{' '}
        <Button variant="primary" size="lg" active>
          Buscar chamba
        </Button>
        </div>
    </section>
  );
}

export default InicioScreen;