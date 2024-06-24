import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contactBar}>
        <span>Contato: (XX) XXXX-XXXX</span>
        <span>Telefone: (XX) XXXX-XXXX</span>
      </div>
      <div className={styles.headerContent}>
        <img src="#" alt="logohome" className={styles.logo} />
        <input
          className={styles.headerinput}
          type="text"
          placeholder="digite aqui oque procura"
        />
        <nav className={styles.navHeader}>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
          <a href="#">Blog</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
