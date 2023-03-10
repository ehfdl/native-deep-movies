import React, { useEffect, useState } from "react";
import styled from "@emotion/native";
import { ActivityIndicator, StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import { getImgPath, getPath } from "../util";
import { useNavigation } from "@react-navigation/native";

const MainMovies = () => {
  const { navigate } = useNavigation();

  const [nowPlayings, setNowPlayings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Now_Playings = async () => {
    const { results } = await fetch(getPath("now_playing")).then((res) =>
      res.json()
    );
    setNowPlayings(results);
    setIsLoading(false);
  };

  useEffect(() => {
    Now_Playings();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Swiper height="100%" showsPagination={false} autoplay loop>
      {nowPlayings.map((movie) => {
        return (
          <MainMoviebox
            key={movie.id}
            onPress={() =>
              navigate("Stacks", {
                screen: "Detail",
                params: { movieId: movie.id },
              })
            }
          >
            <Image
              style={StyleSheet.absoluteFill}
              source={{
                uri: getImgPath(movie.backdrop_path),
              }}
            />
            <LinearGradient
              style={StyleSheet.absoluteFill}
              colors={["transparent", "black"]}
            />
            <MainMovieIntroBox>
              <MainMovieImage2
                source={{
                  uri: getImgPath(movie.poster_path),
                }}
              />
              <MainMovieSection>
                <MainMovieSectionTitle>{movie.title}</MainMovieSectionTitle>
                <MainMovieSectionStar>
                  ⭐{movie.vote_average}/10
                </MainMovieSectionStar>
                <MainMovieSectionText>
                  {movie.overview.slice(0, 140)}
                  {movie.overview.length > 140 && "..."}
                </MainMovieSectionText>
              </MainMovieSection>
            </MainMovieIntroBox>
          </MainMoviebox>
        );
      })}
    </Swiper>
  );
};

export default MainMovies;

const styles = StyleSheet.create({
  MainMovieImage1: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

const MainMoviebox = styled.TouchableOpacity`
  width: 100%;
  height: 300px;
  background-color: yellow;
`;

const MainMovieIntroBox = styled.View`
  width: 100%;
  height: 170px;
  /* background-color: white; */
  padding-left: 10px;
  position: relative;
  top: 130px;
  flex-direction: row;
`;

//  absolutefill 사용.
// const MainMovieImage1 = styled.Image`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

const MainMovieImage2 = styled.Image`
  width: 100px;
  height: 100%;
`;

const MainMovieSection = styled.View`
  width: 250px;
  height: 65%;
  /* background-color: skyblue; */
  margin-left: 10px;
  top: 60px;
  overflow: hidden;
`;

const MainMovieSectionTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  /* color: ${(props) => props.theme.title};
   */
  color: white;
`;

const MainMovieSectionStar = styled.Text`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: white;
`;

const MainMovieSectionText = styled.Text`
  font-size: 13px;

  color: white;
`;
