import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const _color = '#19323c'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {new Array(3).fill(0).map((_, i) => (
          <MotiView
            from={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              loop: true,
              repeatReverse: false,
              delay: 400 * i,
            }}
            key={`circle-${i}`}
            style={[StyleSheet.absoluteFillObject, styles.circle]}
          />
        ))}

        <Feather name="phone-outgoing" size={32} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: _color,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
