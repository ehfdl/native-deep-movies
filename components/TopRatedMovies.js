import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styled from "@emotion/native";
import { getImgPath, getPath } from "../util";
import { useNavigation } from "@react-navigation/native";

const TopRatedMovies = () => {
  const { navigate } = useNavigation();
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Top_Rated = async () => {
    const { results } = await fetch(getPath("top_rated")).then((res) =>
      res.json()
    );
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topRated}
        renderItem={({ item }) => {
          return (
            <TopRatedMovieSection
              onPress={() =>
                navigate("Stacks", {
                  screen: "Detail",
                  params: { movieId: item.id },
                })
              }
            >
              <TopRatedMovieImage
                source={{
                  uri: getImgPath(item.poster_path),
                }}
              />
              <TopRatedMovieScriptView>
                <TopRatedMovieStar>⭐{item.vote_average}/10</TopRatedMovieStar>
                <TopRatedMovieText>
                  {item.title.slice(0, 11)}
                  {item.title.length > 11 && "..."}
                </TopRatedMovieText>
              </TopRatedMovieScriptView>
            </TopRatedMovieSection>
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ width: 15 }} />}
      />

      {/* <TopRatedMovieList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {topRated.map((movie) => {
          return (
            <TopRatedMovieSection>
              <TopRatedMovieImage
                source={{
                  uri: getImgPath(movie.poster_path),
                }}
              />
              <TopRatedMovieScriptView>
                <TopRatedMovieStar>⭐{movie.vote_average}/10</TopRatedMovieStar>
                <TopRatedMovieText>
                  {movie.title.slice(0, 11)}
                  {movie.title.length > 11 && "..."}
                </TopRatedMovieText>
              </TopRatedMovieScriptView>
            </TopRatedMovieSection>
          );
        })}
      </TopRatedMovieList> */}
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
  margin-bottom: 10px;
`;
const TopRatedMovieList = styled.ScrollView`
  width: 100%;
  height: 220px;
  margin-top: 10px;
  /* background-color: skyblue; */
  flex-direction: row;
`;

const TopRatedMovieSection = styled.TouchableOpacity`
  height: 100%;
  width: 120px;
  /* margin-right: 15px; */
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
