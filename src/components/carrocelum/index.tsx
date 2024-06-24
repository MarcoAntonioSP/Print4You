import styles from "./Carrocel.module.css";

function Carrocel() {
  return (
    <div className={styles.carrocel}>
      <img
        className={styles.imgbannerum}
        src="https://cdn.bemcolar.com/media/slideshow/full-banner-quadros-decorativos1280x393.jpg"
        alt="imagembannerquadros"
      />
    </div>
  );
}

export default Carrocel;
