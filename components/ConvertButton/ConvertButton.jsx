import { TouchableOpacity, Text } from 'react-native'
import {s} from "./convertButton.style"
export default function ConvertButton({unit, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.buttonText}> Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
