import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import "./global.css";
import Routes from "./src/routes/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded, _error] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
