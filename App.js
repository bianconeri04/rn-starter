import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
    Color: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App Selector",
    },
  }
);

export default createAppContainer(navigator);
