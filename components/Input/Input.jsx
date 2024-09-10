import React from "react";
import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";
export default function Input({ onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={7}
        keyboardType="number-pad"
        placeholder="Enter temperature"
        onChangeText={function (text) {
          onChange(text);
        }}
        defaultValue="0"
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
