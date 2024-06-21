import { Stack } from 'expo-router/stack'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <GestureHandlerRootView>

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)'></Stack.Screen>
      </Stack>
    </GestureHandlerRootView>
  )
}
