import { useEffect, useState } from "react";
import { apiGetFilter } from "../helper";
import { IFilter } from "../intefraces";

const useGetFilter = () => {
  const [filter, setFilter] = useState<IFilter>({
    categories: [],
    brands: [],
  });

  const getCategories = async () => {
    const response = await apiGetFilter("categories");
    setFilter((prev) => ({ ...prev, categories: response.data as string[] }));
  };

  const getBrands = async () => {
    const response = await apiGetFilter("brands");
    setFilter((prev) => ({ ...prev, brands: response.data as string[] }));
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  return { filter };
};

export default useGetFilter;
