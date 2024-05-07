// apiService.js
import { useState, useEffect } from "react";

const API_URL = "https://api.mercadolibre.com/";
//https://api.mercadolibre.com/sites/MLA/search?q=:query
//https://api.mercadolibre.com/items/:id
//https://api.mercadolibre.com/items/:id%E2%80%8B/description

export function useFetchData(endpoint) {
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(API_URL + endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, [endpoint]);

  return { data };
}
