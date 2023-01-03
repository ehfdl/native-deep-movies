import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styled from "@emotion/native";

const Movies = ({ props }) => {
  return (
    <ScrollView>
      <MainMoviebox>
        <MainMovieImage1
          source={{
            uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
          }}
        />
        <MainMovieIntroBox>
          <MainMovieImage2
            source={{
              uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
            }}
          />
          <MainMovieSection>
            <MainMovieSectionTitle>New-jins</MainMovieSectionTitle>
            <MainMovieSectionStar>⭐8.3/10</MainMovieSectionStar>
            <MainMovieSectionText>
              설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명
              줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이
              설명 줄줄이 설명 줄줄이 설명
            </MainMovieSectionText>
          </MainMovieSection>
        </MainMovieIntroBox>
      </MainMoviebox>
      <TopRatedBox>
        <TopRatedTitle>Top Rated Movies</TopRatedTitle>
        <TopRatedMovieList>
          <TopRatedMovieSection></TopRatedMovieSection>
          <TopRatedMovieSection></TopRatedMovieSection>
          <TopRatedMovieSection></TopRatedMovieSection>
        </TopRatedMovieList>
      </TopRatedBox>
    </ScrollView>
  );
};

export default Movies;

const TopRatedBox = styled.View`
  width: 100%;
  height: 280px;
  background-color: white;
  padding-top: 20px;
  padding-left: 15px;
`;
const TopRatedTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;

  color: ${(props) => props.theme.title};
`;
const TopRatedMovieList = styled.View`
  width: 100%;
  height: 220px;
  margin-top: 10px;
  background-color: skyblue;
  flex-direction: row;
`;

const TopRatedMovieSection = styled.View`
  height: 100%;
  width: 120px;
  margin-right: 15px;
  background-color: yellow;
  border-radius: 10px;
`;

const TopRatedMovieImage = styled.Image``;

const MainMoviebox = styled.View`
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
const MainMovieImage1 = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.5); */
  opacity: 0.95;
`;

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
  font-size: 25px;
  font-weight: bold;
  /* color: ${(props) => props.theme.title};
   */
  color: white;
`;

const MainMovieSectionStar = styled.Text`
  font-size: 16px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: white;
`;

const MainMovieSectionText = styled.Text`
  color: white;
`;
