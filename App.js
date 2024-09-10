import { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hot from "./assets/hot.png";
import cold from "./assets/cold.png";
import Input from "./components/Input/Input";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";
import {
  convertTemperature,
  getOppositeUnit,
  UNITS,
  isIced,
} from "./utils/temperature";
import ConvertButton from "./components/ConvertButton/ConvertButton";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnite = getOppositeUnit(currentUnit);
  const [currentBg, setCurrentBg] = useState(cold);

  useEffect(() => {
    const isCold = isIced(inputValue, currentUnit);
    setCurrentBg(isCold ? cold : hot);
  }, [inputValue, currentUnit]);

  function getConvertedTemp() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperature(inputValue, oppositeUnite).toFixed(1);
    }
    3;
  }

  return (
    <ImageBackground
      style={s.backgroundImg}
      source={currentBg}
      resizeMethod="auto"
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <TemperatureDisplay
              temperature={getConvertedTemp()}
              unit={oppositeUnite}
            />
            <Input unit={currentUnit} onChange={setInputValue} />
            <ConvertButton
              unit={currentUnit}
              onPress={() => setCurrentUnit(oppositeUnite)}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
