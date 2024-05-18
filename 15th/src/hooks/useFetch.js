import { useState, useEffect, useCallback } from "react";

export default function useFetch(
  fetchingFn,
  initialValue,
  operationType,
  errorMsg = "Oops... something went wrong"
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchedData, setFetchedData] = useState(initialValue);

  const fetchData = useCallback(
    async (params) => {
      setIsLoading(true);
      setError("");
      try {
        const data = await fetchingFn(params);
        setFetchedData(data);
      } catch (error) {
        setError(error.message || errorMsg);
      }
      setIsLoading(false);
    },
    [fetchingFn, errorMsg]
  );

  useEffect(() => {
    if (operationType === "FETCH") fetchData();
  }, []);

  return {
    isLoading,
    error,
    fetchedData,
    setFetchedData,
    fetchData,
  };
}
