import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./Bottom";
import Stacks from "./Stacks";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bottom" component={Bottom} />

      <Stack.Screen name="Stacks" component={Stacks} />
    </Stack.Navigator>
  );
};

export default Root;
