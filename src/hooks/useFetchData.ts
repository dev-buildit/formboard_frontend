import { useState, useEffect } from "react";
import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

/**
 * This functions is used to fetch an api
 */
const useFetchData = (config: AxiosRequestConfig) => {
  const [data, setData] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    axios
      .request(config)
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [config]);

  return { data, error };
};

export default useFetchData;
