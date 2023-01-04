import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styled from "@emotion/native";
import UpComingMovies from "../components/UpComingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import MainMovies from "../components/MainMovies";

const Movies = () => {
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_KEY = "6bef5fd5109a0d603ca0648fc8f8cb45";
  return (
    <MoviesScrollView>
      <MainMovies
        BASE_URL={BASE_URL}
        BASE_URL_IMAGE={BASE_URL_IMAGE}
        API_KEY={API_KEY}
      />
      <TopRatedMovies
        BASE_URL={BASE_URL}
        BASE_URL_IMAGE={BASE_URL_IMAGE}
        API_KEY={API_KEY}
      />
      <UpComingMovies
        BASE_URL={BASE_URL}
        BASE_URL_IMAGE={BASE_URL_IMAGE}
        API_KEY={API_KEY}
      />
    </MoviesScrollView>
  );
};

export default Movies;

const MoviesScrollView = styled.ScrollView`
  width: 100%;
`;
