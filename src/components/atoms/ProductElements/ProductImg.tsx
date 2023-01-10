import styles from "./ProductEl.module.css";

const ProductImg = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={thumbnail} className={styles.img} alt="" data-cy="thumbnail" />
    </div>
  );
};

export default ProductImg;
