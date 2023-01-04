import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import styled from "@emotion/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getImgPath, getPath } from "../util";
import { useNavigation } from "@react-navigation/native";

const UpComingMovies = () => {
  const { navigate } = useNavigation();

  const [upComing, setUpComing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Up_Coming = async () => {
    const { results } = await fetch(getPath("upcoming")).then((res) =>
      res.json()
    );
    setUpComing(results);
    setIsLoading(false);
  };

  useEffect(() => {
    Up_Coming();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <UpcomingMoviesBox>
      <UpcomingMoviesTitle>Upcoming Movies</UpcomingMoviesTitle>
      {upComing.map((movie) => {
        return (
          <UpcomingMoviesSection
            key={movie.id}
            onPress={() =>
              navigate("Stacks", {
                screen: "Detail",
                params: { movieId: movie.id },
              })
            }
          >
            <UpcomingMoviesImage
              source={{
                uri: getImgPath(movie.poster_path),
              }}
            />
            <UpcomingMoviesScript>
              <UpcomingMoviesScriptTitle>
                {movie.title}
              </UpcomingMoviesScriptTitle>
              <UpcomingMoviesScriptDate>
                {movie.release_date}
              </UpcomingMoviesScriptDate>
              <UpcomingMoviesScriptText>
                {movie.overview.slice(0, 90)}
                {movie.overview.length > 90 && "..."}
              </UpcomingMoviesScriptText>
            </UpcomingMoviesScript>
          </UpcomingMoviesSection>
        );
      })}
    </UpcomingMoviesBox>
  );
};

export default UpComingMovies;

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

const UpcomingMoviesSection = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
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
