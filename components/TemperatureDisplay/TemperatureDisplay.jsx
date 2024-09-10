import React from 'react'
import { Text } from 'react-native'
import {s} from './Display.style'
export default function TemperatureDisplay({temperature,unit}) {
  return (
    <Text style={s.temp}>{temperature} { unit}</Text>
  )
}
