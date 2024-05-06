import AppNavigator from "./app/navigation/AppNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (

        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>

  );
}
