import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import styled from "@emotion/native";

const TopRatedMovies = ({ BASE_URL, BASE_URL_IMAGE, API_KEY }) => {
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Top_Rated = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setTopRated(results);
    setIsLoading(false);
  };

  useEffect(() => {
    Top_Rated();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <TopRatedBox>
      <TopRatedTitle>Top Rated Movies</TopRatedTitle>
      <TopRatedMovieList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {topRated.map((movie) => {
          return (
            <TopRatedMovieSection>
              <TopRatedMovieImage
                source={{
                  uri: `${BASE_URL_IMAGE}${movie.poster_path}`,
                }}
              />
              <TopRatedMovieScriptView>
                <TopRatedMovieStar>⭐{movie.vote_average}/10</TopRatedMovieStar>
                <TopRatedMovieText>{movie.title}</TopRatedMovieText>
              </TopRatedMovieScriptView>
            </TopRatedMovieSection>
          );
        })}
      </TopRatedMovieList>
    </TopRatedBox>
  );
};

export default TopRatedMovies;

const TopRatedBox = styled.View`
  width: 100%;
  height: 280px;
  /* background-color: white; */
  padding-top: 20px;
  padding-left: 15px;
`;
const TopRatedTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;

  color: ${(props) => props.theme.title};
`;
const TopRatedMovieList = styled.ScrollView`
  width: 100%;
  height: 220px;
  margin-top: 10px;
  /* background-color: skyblue; */
  flex-direction: row;
`;

const TopRatedMovieSection = styled.View`
  height: 100%;
  width: 120px;
  margin-right: 15px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const TopRatedMovieImage = styled.Image`
  width: 100%;
  height: 160px;
  background-color: blue; ;
`;
const TopRatedMovieScriptView = styled.View`
  width: 100%;
  height: 70px;
  background-color: gray;
  padding-left: 10px;
  padding-top: 15px;
  padding-right: 10px;
`;
const TopRatedMovieStar = styled.Text`
  font-size: 14px;
  color: white;
  margin-bottom: 5px;
`;

const TopRatedMovieText = styled.Text`
  color: white;
  font-size: 13px;

  font-weight: bold;
`;
