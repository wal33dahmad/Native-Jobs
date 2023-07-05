import axios from "axios";
import React, { useEffect, useState } from "react";
import jsonData from "../data/jobSearch.json";

const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const options = {
  //     method: "GET",
  //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //     headers: {
  //       "X-RapidAPI-Key": rapidapiKey,
  //       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //     },
  //     params: { ...query },
  //   };

  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await axios.request(options);

  //       setData(response.data.data);
  //       setIsLoading(false);
  //       console.log(response.data);
  //     } catch (error) {
  //       setError(error);
  //       console.error(error);
  //       alert("There is an error");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setData(jsonData?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
