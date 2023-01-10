import { useEffect, useState } from "react";
import { apiGetProducts } from "../helper";
import { IApiParams, IProduct } from "../intefraces";

const useGetProducts = (apiParams: IApiParams) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  const getProducts = async (apiParams: IApiParams) => {
    const response = await apiGetProducts({
      apiParams,
    });
    setTotal(response.total);

    if (apiParams.page !== 1) {
      setProducts((prev) => {
        return [...prev, ...(response.data as IProduct[])];
      });
    } else {
      setProducts(response.data as IProduct[]);
    }
  };

  useEffect(() => {
    getProducts(apiParams);
  }, [apiParams]);

  return { products, total };
};

export default useGetProducts;
