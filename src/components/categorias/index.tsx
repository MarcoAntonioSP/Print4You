import styles from "./Categorias.module.css";

function Categorias() {
  return (
    <div className={styles.categorias}>
      <nav className={styles.navcategorias}>
        <a href="#">Quadros</a>
        <a href="#">Canecas</a>
        <a href="#">Camisas</a>
        <a href="#">Escolhendo</a>
      </nav>
    </div>
  );
}
export default Categorias;
