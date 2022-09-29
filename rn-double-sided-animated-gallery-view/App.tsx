import * as React from 'react'
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native'
const { width, height } = Dimensions.get('screen')

const { PEXELS_API_KEY } = process.env
const API_URL = "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20"

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar hidden />
    </View>
  )
}