import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import React, { useRef } from 'react'
import { Alert, View } from 'react-native'
import { Menu } from '@/components/Menu'
import { theme } from '@/theme'

export default function TabsLayout() {

    const bottomSheetRef = useRef<BottomSheet>(null)

    const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
    const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

    return (
        <View style={{ flex: 1 }}>

            <Tabs screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false,
                 tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray[600],
                tabBarStyle: {
                    backgroundColor: theme.colors.black,
                    borderColor: theme.colors.black,
                  },
            }}>
                <Tabs.Screen name='index'
                    options={{
                        tabBarIcon: ({ size, color }) => <FontAwesome name='history' size={size} color={color} />
                    }} />
                <Tabs.Screen name='reader' options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome name='plus-square-o' size={size} color={color} />
                }}
                    listeners={() => ({
                        tabPress: (event) => {
                            event.preventDefault()
                            handleBottomSheetOpen()
                        }
                    })}
                />
                <Tabs.Screen name='profile' options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome name='user' size={size} color={color} />
                }} />

            </Tabs>
            <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />

        </View>
    )
}
