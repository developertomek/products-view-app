import { IProduct } from "../../../utils/intefraces";
import styles from "./ProductEl.module.css";

const ProductInfo = ({
  title,
  description,
  price,
  rating,
  brand,
  category,
  stock,
}: IProduct) => {
  return (
    <ul className={styles.description}>
      <li className={styles.rate} data-cy="rating">
        <span className="fa fa-star checked"></span>
        {rating}
      </li>
      <li className={styles.title} data-cy="title">
        {title}
      </li>
      <li className={styles.info} data-cy="category">
        {category}
      </li>
      <li className={styles.details} data-cy="description">
        <header>Product Details</header>
        {description}
      </li>
      <li data-cy="brand">
        <strong>Brand: </strong>
        {brand}
      </li>
      <li className={styles.price} data-cy="price">
        ${price}
      </li>
      <li className={`${styles.info} ${styles.stock}`} data-cy="stock">
        ({stock} in stock)
      </li>
    </ul>
  );
};
export default ProductInfo;
