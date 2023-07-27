import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [peliculas, setPeliculas] = useState([]);
  const [detailsPeliculas, setDetailsPeliculas] = useState([]);

  const getFetch = async () => {
    if (!url) return;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data)
      setPeliculas(data.results);
    } catch (error) {
      console.log(error)
    }
  }

  const getDetails = async (id, url_details) => {
    console.log(url_details)
    if(!id || !url_details) return;
    try {
      const result = await fetch(url_details);
      const data = await result.json();
      console.log(data);
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
    getDetails
  }
}
