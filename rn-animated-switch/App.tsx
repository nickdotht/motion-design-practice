import { StatusBar } from 'expo-status-bar'
import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MotiView, TransitionConfig } from 'moti'
import { Easing } from 'react-native-reanimated'

interface SwitchProps {
  size: number
  onPress: () => void
  isActive: boolean
}

const Switch: FC<SwitchProps> = ({ size, onPress, isActive }) => {
  const _transition: TransitionConfig = {
    type: 'timing',
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  }

  return (
    <Pressable onPress={onPress}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* // Track */}
        <MotiView
          style={{
            width: size * 1.5,
            height: size * 0.4,
            borderRadius: size * 0.2,
            backgroundColor: '#000',
            position: 'absolute'
          }}

          transition={_transition}

          animate={{
            opacity: !isActive ? 0.5 : 1,
          }}
        />

        {/* // Knob */}
        <MotiView
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}

          transition={_transition}

          animate={{
            translateX: isActive ? size * 0.5 : -size * 0.5
          }}
        >
          {/* // Knob Indicator */}
          <MotiView
            style={{
              width: size * 0.4,
              height: size * 0.4,
              borderRadius: size * 0.2,
              borderWidth: size * 0.07,
              borderColor: '#000',
            }}

            transition={_transition}

            animate={{
              width: isActive ? 0 : size * 0.4,
              opacity: !isActive ? 0.5 : 1,
            }}
          />
        </MotiView>

      </View>
    </Pressable>
  )
}

export default function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <View style={styles.container}>
      <Switch size={60} onPress={() => { setIsActive(!isActive) }} isActive={isActive} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
