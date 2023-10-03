import React, { useEffect, useState } from "react";
import { FeedList } from "./FeedList";
import { CONSTANTS, URL_ENDPOINT } from "../constants";

export const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${URL_ENDPOINT}${page}`);
      const data = await response.json();
      if (Array.isArray(data?.nodes)) setItems((prevItems) => [...prevItems, ...data?.nodes]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>{CONSTANTS.TITLE}</h1>
      {items?.map((node) => (
        <FeedList node={node.node} key={node.node.nid} />
      ))}
      {isLoading && <h2>{CONSTANTS.LOADING}</h2>}
      {error && (
        <p>
          {CONSTANTS.ERROR} {error.message}
        </p>
      )}
    </div>
  );
};
