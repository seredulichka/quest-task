import { useState, useEffect } from "react";

const baseUrl = "https://salerow.vlazaay.pp.ua/api";

const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const createOptions = (method, body) => {
    const options = {
      method: method,
    };

    if (method === "POST" || method === "PUT") {
      (options.headers = { "Content-Type": "application/json" }),
        (options.body = JSON.stringify(body));
    }

    return options;
  };

  useEffect(() => {
    fetch(baseUrl + url, createOptions(method, body))
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
