import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MotiView } from 'moti'

interface SwitchProps {
  size: number
  onPress: () => void
  isActive: boolean
}

const Switch: FC<SwitchProps> = ({ size, onPress, isActive }) => {
  return (
    <Pressable>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* // Track */}
        <MotiView
          style={{
            position: 'absolute',
            width: size * 1.5,
            height: size * 0.4,
            borderRadius: size * 0.2,
            backgroundColor: 'gray'
          }}
        >
          {/* // Knob */}

          <MotiView>
            {/* // Knob Indicator */}
            <MotiView />
          </MotiView>
        </MotiView>
      </View>
    </Pressable>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Switch size={100} onPress={() => { }} isActive={false} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
