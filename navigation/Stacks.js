import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

const MovieDetail = ({ navigation: { navigate, setOptions } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("back")}>
        <Text>다음 페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOptions({ title: "변경된 제목" })}>
        <Text>변경된 페이지</Text>
      </TouchableOpacity>
    </>
  );
};

const Back = ({ navigation: { goBack, reset } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>back 페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 1,
            routes: [{ name: "back" }, { name: "moviedetail" }],
          })
        }
      >
        <Text>reset 페이지</Text>
      </TouchableOpacity>
    </>
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="moviedetail" component={MovieDetail} />
      <Stack.Screen name="back" component={Back} />
    </Stack.Navigator>
  );
};

export default Stacks;
