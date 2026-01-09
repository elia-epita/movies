import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { movieApi } from "../constants/axios";
import { movieRequests } from "../constants/requests";
import useAppStateContext from "../hooks/useAppStateContext";
import Row from "../components/Row";

const HomePage = () => {
  const { appState } = useAppStateContext();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await movieApi.get(movieRequests.fetchAllMovies, {
          headers: {
            Authorization: `Bearer ${appState.user.token}`,
          },
        });
        setMovies(request.data.movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [appState.user.token]);

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <Navbar />
      <Banner />
      {Object.keys(movies).map((title) => (
        <Row key={title} title={title} movies={movies[title]} />
      ))}
    </div>
  );
};

export default HomePage;
