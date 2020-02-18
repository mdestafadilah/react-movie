import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      //   console.log(result);
      const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditEndpoint)).json();
      //   console.log(creditResult);
      const directors = creditResult.crew.filter(
        member => member.job === "Director"
      );
      // populate data
      setState({
        ...result,
        actors: creditResult.cast,
        directors
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, loading, error];
};
