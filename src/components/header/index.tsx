import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.contactInformation}>
        <span>Contato: (XX) XXXX-XXXX</span>
        <span>Telefone: (XX) XXXX-XXXX</span>
      </div>
      <div className={styles.headerContent}>
        <img src="#" alt="logohome" className={styles.logo} />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="digite aqui oque procura"
        />
        <nav className={styles.navigation}>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Atendimento</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
