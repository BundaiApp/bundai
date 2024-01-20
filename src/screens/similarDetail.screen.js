import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import DeviceType from '../util/widthChecker'

const { width } = Dimensions.get('window')
const radius = width * 0.3 // Radius of the circular menu

const calculatedWidth = {
  mobile: 70,
  tablet: 120,
  desktop: 140
}

const calculatedBigFontSize = {
  mobile: 18,
  tablet: 22,
  desktop: 28
}

const calculatedSmallFontSize = {
  mobile: 12,
  tablet: 18,
  desktop: 20
}

const calculatePosition = (index, totalItems) => {
  const angle = ((2 * Math.PI) / totalItems) * index - Math.PI / 2
  const x = radius * Math.cos(angle) + width / 2 - calculatedWidth[DeviceType()] / 2 // Centering on the screen
  const y = radius * Math.sin(angle) + width / 2 - calculatedWidth[DeviceType()] / 2 // Centering on the screen
  return { top: y, left: x }
}

const MenuItem = ({ kanji, meaning, furigana }) => (
  <TouchableOpacity
    style={[
      styles.menuItem,
      {
        width: calculatedWidth[DeviceType()],
        height: calculatedWidth[DeviceType()],
        borderRadius: calculatedWidth[DeviceType()] / 2
      }
    ]}>
    <Text style={[styles.menuTextKanji, { fontSize: calculatedBigFontSize[DeviceType()] }]}>
      {kanji}
    </Text>
    <Text style={[styles.menuText, { fontSize: calculatedSmallFontSize[DeviceType()] }]}>
      {meaning}
    </Text>
    <Text style={[styles.menuText, { fontSize: calculatedSmallFontSize[DeviceType()] }]}>
      {furigana}
    </Text>
  </TouchableOpacity>
)

const CircularMenu = ({ menuData }) => {
  const filteredItems = menuData.filter((item) => !item.isMain)
  const mainMenu = menuData.find((item) => item.isMain)

  return (
    <View style={styles.container}>
      <View style={[styles.menuContainer, { height: width, width }]}>
        {filteredItems.map((item, index) => {
          const position = calculatePosition(index, filteredItems.length)
          return (
            <View key={item.id} style={[styles.menuItemContainer, position]}>
              <MenuItem {...item} />
            </View>
          )
        })}
        <View style={styles.mainMenuItemContainer}>
          <MenuItem {...mainMenu} />
        </View>
      </View>
    </View>
  )
}

export default function SimilarDetails({ route }) {
  const { kanji, meaning, furigana, kanjiArray } = route.params
  const menuData = [
    {
      kanji: kanji,
      meaning,
      furigana,
      isMain: true
    },
    ...kanjiArray
  ]

  useEffect(() => {
    console.log(width)
  }, [])

  return <CircularMenu menuData={menuData} radius={150} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc059'
  },
  menuContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItemContainer: {
    position: 'absolute',
    width: 100,
    height: 100
  },
  mainMenuItemContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuText: {
    textAlign: 'center',
    fontSize: 12
  },
  menuTextKanji: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  }
})
