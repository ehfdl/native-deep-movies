import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import styled from "@emotion/native";
import UpComingMovies from "../components/UpComingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import MainMovies from "../components/MainMovies";

const Movies = () => {
  return (
    <MoviesScrollView>
      <MainMovies />
      <TopRatedMovies />
      <UpComingMovies />
    </MoviesScrollView>
  );
};

export default Movies;

const MoviesScrollView = styled.ScrollView`
  width: 100%;
`;
