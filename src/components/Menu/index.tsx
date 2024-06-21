import BottomSheet from "@gorhom/bottom-sheet"

import React, { forwardRef } from 'react'
import { MenuProps } from "./Menu"
import { styles } from "./styles"
import { Text, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { theme } from "@/theme"
import { MenuButton } from "./components/MenuButton"

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
    return (
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={[0.01, 230]}
        backgroundStyle={styles.container}
        handleComponent={() => null}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <FontAwesome
              name="close"
              size={24}
              color={theme.colors.white}
              onPress={onClose}
            />
            <Text style={styles.title}>Crie ou leia seus QRCode</Text>
          </View>
  
          <View style={styles.options}>
            <MenuButton title="Ler" icon="camera" />
            <MenuButton title="Criar" icon="plus" />
          </View>
        </View>
      </BottomSheet>
    )
  })
