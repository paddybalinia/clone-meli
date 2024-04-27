import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
