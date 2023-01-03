import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styled from "@emotion/native";

const Movies = ({ props }) => {
  return (
    <MoviesScrollView>
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
        <TopRatedMovieList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TopRatedMovieSection>
            <TopRatedMovieImage
              source={{
                uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
              }}
            />
            <TopRatedMovieScriptView>
              <TopRatedMovieStar>⭐8.3/10</TopRatedMovieStar>
              <TopRatedMovieText>The Godfath...</TopRatedMovieText>
            </TopRatedMovieScriptView>
          </TopRatedMovieSection>
          <TopRatedMovieSection>
            <TopRatedMovieImage
              source={{
                uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
              }}
            />
            <TopRatedMovieScriptView>
              <TopRatedMovieStar>⭐8.3/10</TopRatedMovieStar>
              <TopRatedMovieText>The Godfath...</TopRatedMovieText>
            </TopRatedMovieScriptView>
          </TopRatedMovieSection>
          <TopRatedMovieSection>
            <TopRatedMovieImage
              source={{
                uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
              }}
            />
            <TopRatedMovieScriptView>
              <TopRatedMovieStar>⭐8.3/10</TopRatedMovieStar>
              <TopRatedMovieText>The Godfath...</TopRatedMovieText>
            </TopRatedMovieScriptView>
          </TopRatedMovieSection>
        </TopRatedMovieList>
      </TopRatedBox>
      <UpcomingMoviesBox>
        <UpcomingMoviesTitle>Upcoming Movies</UpcomingMoviesTitle>
        <UpcomingMoviesSection>
          <UpcomingMoviesImage
            source={{
              uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
            }}
          />
          <UpcomingMoviesScript>
            <UpcomingMoviesScriptTitle>
              Savage Salvation
            </UpcomingMoviesScriptTitle>
            <UpcomingMoviesScriptDate>2022-12-02</UpcomingMoviesScriptDate>
            <UpcomingMoviesScriptText>
              설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명
              줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄
            </UpcomingMoviesScriptText>
          </UpcomingMoviesScript>
        </UpcomingMoviesSection>
        <UpcomingMoviesSection>
          <UpcomingMoviesImage
            source={{
              uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
            }}
          />
          <UpcomingMoviesScript>
            <UpcomingMoviesScriptTitle>
              Savage Salvation
            </UpcomingMoviesScriptTitle>
            <UpcomingMoviesScriptDate>2022-12-02</UpcomingMoviesScriptDate>
            <UpcomingMoviesScriptText>
              설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명
              줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄
            </UpcomingMoviesScriptText>
          </UpcomingMoviesScript>
        </UpcomingMoviesSection>
        <UpcomingMoviesSection>
          <UpcomingMoviesImage
            source={{
              uri: "https://image.newsis.com/2022/07/23/NISI20220723_0001048302_web.jpg?rnd=20220723101034",
            }}
          />
          <UpcomingMoviesScript>
            <UpcomingMoviesScriptTitle>
              Savage Salvation
            </UpcomingMoviesScriptTitle>
            <UpcomingMoviesScriptDate>2022-12-02</UpcomingMoviesScriptDate>
            <UpcomingMoviesScriptText>
              설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄이 설명
              줄줄이 설명 줄줄이 설명 줄줄이 설명 줄줄
            </UpcomingMoviesScriptText>
          </UpcomingMoviesScript>
        </UpcomingMoviesSection>
      </UpcomingMoviesBox>
    </MoviesScrollView>
  );
};

export default Movies;

const MoviesScrollView = styled.ScrollView`
  width: 100%;
`;

const UpcomingMoviesBox = styled.View`
  width: 100%;
  /* background-color: white; */
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const UpcomingMoviesTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;

  color: ${(props) => props.theme.title};
  margin-bottom: 20px;
`;

const UpcomingMoviesSection = styled.View`
  width: 100%;
  height: 155px;
  /* background-color: skyblue; */
  border-radius: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  overflow: hidden;
`;

const UpcomingMoviesImage = styled.Image`
  width: 110px;
  height: 100%;
  border-radius: 10px;
`;

const UpcomingMoviesScript = styled.View`
  width: 230px;
  height: 100%;
  /* background-color: black; */
  margin-left: 20px;
`;

const UpcomingMoviesScriptTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
  margin-top: 5px;
`;

const UpcomingMoviesScriptDate = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};

  margin-bottom: 10px;
`;

const UpcomingMoviesScriptText = styled.Text`
  color: ${(props) => props.theme.text};

  font-size: 15px;
  line-height: 20px;
`;

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
