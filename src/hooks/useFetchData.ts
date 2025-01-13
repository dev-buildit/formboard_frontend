import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const useFetchData = (config : AxiosRequestConfig) => {
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
