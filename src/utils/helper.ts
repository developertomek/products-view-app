import { IApiResponse, IApiParams } from "./intefraces";

const API_URL = "http://localhost:3000/";
const OPTIONS = "?_limit=5&_page=";

export async function apiGetFilter(type: string): Promise<IApiResponse> {
  return api(type);
}

export async function apiGetProducts({
  apiParams,
}: {
  apiParams: IApiParams;
}): Promise<IApiResponse> {
  const { brands, categories, page = 1 } = apiParams;
  let params = OPTIONS + page;
  brands?.map((el: string) => (params += `&brand=${el}`));
  categories?.map((el: string) => (params += `&category=${el}`));
  return api("products", params);
}

async function api(type: string, params = ""): Promise<IApiResponse> {
  const response: Response = await fetch(API_URL + type + params);
  const total = parseInt(response.headers.get("X-Total-Count") ?? "0");
  const body: IApiResponse = await response
    .json()
    .then((data: IApiResponse["data"]) => {
      return { data, total };
    })
    .catch((err) => err);
  return body;
}
