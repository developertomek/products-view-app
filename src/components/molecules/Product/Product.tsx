import { IProduct } from "../../../utils/intefraces";
import ProductImg from "../../atoms/ProductElements/ProductImg";
import ProductInfo from "../../atoms/ProductElements/ProductInfo";
import styles from "./Product.module.css";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.product} data-cy="product">
      <ProductImg thumbnail={product.thumbnail} />
      <ProductInfo {...product} />
    </div>
  );
};

export default Product;
