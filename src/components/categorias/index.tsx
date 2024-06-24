import styles from "./Categorias.module.css";

function Categorias() {
  return (
    <div className={styles.categorias}>
      <nav className={styles.navcategorias}>
        <a href="#">Quadros Metalicos</a>
        <a href="#">Canecas</a>
        <a href="#">Velas Aromáticas</a>
        <a href="#">Escolhendo</a>
      </nav>
    </div>
  );
}
export default Categorias;
