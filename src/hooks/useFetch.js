import { useState, useEffect } from "react";

export default function useFetch(fetchUrl) {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error("data fetching failed");
        const data = await response.json();
        setFetchedData(data);
        setIsLoading(false);
      } catch (err) {
        setIsError(err.message);
      }
    }
    fetchCountries();
  }, [fetchUrl]);

  return { fetchedData, isLoading, isError };
}
