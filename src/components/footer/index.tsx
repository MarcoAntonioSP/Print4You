import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Entre em contato</h3>
          <p>
            <a href="mailto:contato@print4you.com">contato@print4you.com</a>
          </p>
          <p>+55 (XX) XXXX-XXXX</p>
        </div>
        <div className={styles.links}>
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/produtos">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="/sobre-nos">Sobre Nós</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Print4You - Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
