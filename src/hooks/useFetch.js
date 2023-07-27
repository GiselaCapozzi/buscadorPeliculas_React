import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [peliculas, setPeliculas] = useState([]);

  const getFetch = async () => {
    if (!url) return;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPeliculas(data.results);
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    getFetch();
  }

  return {
    peliculas,
    handleSubmit,
  }
}
