import { useState } from "react";
import { IApiParams } from "../../../utils/intefraces";
import useGetFilter from "../../../utils/hooks/useGetFilter";
import useGetProducts from "../../../utils/hooks/useGetProducts";
import Button from "../../atoms/Button/Button";
import ProductFilter from "../../molecules/Filter/ProductFilter";
import Product from "../../molecules/Product/Product";
import styles from "./ProductView.module.css";

const ProductView = () => {
  const [apiParams, setApiParams] = useState<IApiParams>({
    page: 1,
    categories: [],
    brands: [],
  });
  const { filter } = useGetFilter();
  const { products, total } = useGetProducts(apiParams);
  const props = { ...filter, setApiParams, apiParams };
  const handleSetApiParams = () => {
    setApiParams({ ...apiParams, page: apiParams.page + 1 });
  };

  return (
    <div className={styles.view} data-cy="product-view">
      <ProductFilter props={props} />
      {products?.map((el) => (
        <Product product={el} key={el.id} />
      ))}
      {total !== products.length && (
        <Button onClick={handleSetApiParams}>load more</Button>
      )}
    </div>
  );
};

export default ProductView;
