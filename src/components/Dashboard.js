import React, { useEffect, useState } from "react";
import { FeedList } from "./FeedList";

export const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // fetch("https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.nodes));

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      const response = await fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`);
      const data = await response.json();
      console.log(data);
      setItems((prevItems) => [...prevItems, ...data?.nodes]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      {items?.map((node) => (
        <FeedList node={node.node} key={node.node.nid} />
      ))}
      {isLoading && <h2>Loading...</h2>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
