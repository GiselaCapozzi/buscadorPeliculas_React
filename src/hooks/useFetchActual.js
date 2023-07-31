import { useEffect, useState } from "react"

export const useFetchActual = (url) => {
  
  const [actualMovie, setActualMovie] = useState([]);
  
  const actualFetch = async () => {
    const res = await fetch(url)
    const data = await res.json();
    setActualMovie(data.results)
  }

  useEffect(() => {
    actualFetch();
  }, [])

  return {
    actualMovie
  }
}
