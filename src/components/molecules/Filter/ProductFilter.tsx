import React from "react";
import { IApiParams } from "../../../utils/intefraces";
import Select from "../../atoms/Select/Select";
import styles from "./ProductFilter.module.css";

interface IFilterProps {
  categories: string[];
  brands: string[];
  setApiParams: React.Dispatch<React.SetStateAction<IApiParams>>;
  apiParams: IApiParams;
}

const ProductFilter = ({ props }: { props: IFilterProps }) => {
  return (
    <div className={styles.filter} data-cy="filter">
      <p className={styles.title} data-cy="filter-title">
        Filter
      </p>
      <Select type="categories" options={props.categories} {...props} />
      <Select type="brands" options={props.brands} {...props} />
    </div>
  );
};

export default ProductFilter;
