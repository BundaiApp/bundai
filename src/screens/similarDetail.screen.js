import React, { useState, useMemo } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import DeviceType from '../util/widthChecker'

const { height, width } = Dimensions.get('window')
const radius = width * 0.3 // Radius of the circular menu

const calculatedWidth = {
  mobile: 85,
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

const MenuItem = ({ kanji, meaning, reading }) => (
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
      {reading}
    </Text>
  </TouchableOpacity>
)

const CircularMenu = ({ menuData }) => {
  const filteredItems = menuData.filter((item) => !item.isMain)
  const mainMenu = menuData.find((item) => item.isMain)
  return (
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
  )
}

const JLPT_LEVELS = ['All', 'N5', 'N4', 'N3', 'N2', 'N1'];

export default function SimilarDetails({ route }) {
  const { kanji, meaning, furigana, kanjiArray, usedIn } = route.params
  const [isSelected, setIsSelected] = useState('similar')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filterAndLimitUsedIn = useMemo(() => {
    const jlptOrder = ['n5', 'n4', 'n3', 'n2', 'n1'];
    
    const filteredUsedIn = selectedLevel === 'All'
      ? usedIn
      : usedIn.filter(word => word.jlptLevel.toLowerCase() === selectedLevel.toLowerCase());

    const sortedUsedIn = filteredUsedIn.sort((a, b) => {
      const aIndex = jlptOrder.indexOf(a.jlptLevel.toLowerCase());
      const bIndex = jlptOrder.indexOf(b.jlptLevel.toLowerCase());
      return aIndex - bIndex;
    });

    return sortedUsedIn.slice(0, 8);
  }, [usedIn, selectedLevel]);

  const menuData = [
    {
      kanji,
      meaning,
      furigana,
      isMain: true
    },
    ...kanjiArray
  ]

  const usedWords = [
    {
      kanji,
      meaning,
      furigana,
      isMain: true
    },
    ...filterAndLimitUsedIn
  ]

  const KanjiBox = ({ kanji, meaning }) => (
    <View style={styles.block}>
      <Text style={styles.subtitleText}>{kanji}</Text>
      <Text style={styles.subtitleText}>{meaning}</Text>
    </View>
  )

  const LevelFilter = () => (
    <View style={styles.filterContainer}>
      {JLPT_LEVELS.map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.filterButton,
            selectedLevel === level && styles.selectedFilterButton
          ]}
          onPress={() => setSelectedLevel(level)}
        >
          <Text style={[
            styles.filterButtonText,
            selectedLevel === level && styles.selectedFilterButtonText
          ]}>{level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  return DeviceType() === 'desktop' ? (
    <View style={styles.macContainerHolder}>
      <ScrollView contentContainerStyle={styles.containerForMac}>
        <View style={styles.firstCol}>
          <View style={styles.textHolder}>
            <Text style={styles.header}>Words made with {kanji}</Text>
          </View>
          <LevelFilter />
          <View style={styles.pillHolder}>
            {filterAndLimitUsedIn.map((item, index) => (
              <KanjiBox key={item.kanji} index={index} kanji={item.kanji} meaning={item.meanings} />
            ))}
          </View>
        </View>

        <View style={styles.firstCol}>
          <View style={styles.textHolder}>
            <Text style={styles.header}>Kanjis similar to {kanji}</Text>
          </View>
          <View style={styles.pillHolder}>
            {kanjiArray?.map((item, index) => (
              <KanjiBox key={item.kanji} index={index} kanji={item.kanji} meaning={item.meaning} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.basicRow}>
          <TouchableOpacity
            style={[
              styles.tabTextHolder,
              {
                borderBottomColor: isSelected === 'similar' ? 'blue' : 'gray',
                borderBottomWidth: isSelected === 'similar' ? 3 : 0
              }
            ]}
            onPress={() => setIsSelected('similar')}>
            <Text style={[styles.tabText, { fontSize: calculatedBigFontSize[DeviceType()] }]}>
              Similar kanji
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabTextHolder,
              {
                borderBottomColor: isSelected === 'used' ? 'blue' : 'gray',
                borderBottomWidth: isSelected === 'used' ? 3 : 0
              }
            ]}
            onPress={() => setIsSelected('used')}>
            <Text style={[styles.tabText, { fontSize: calculatedBigFontSize[DeviceType()] }]}>
              Used in
            </Text>
          </TouchableOpacity>
        </View>
        {isSelected === 'used' && <LevelFilter />}
      </View>

      <View style={styles.bottomContainer}>
        {isSelected === 'used' ? (
          <CircularMenu menuData={usedWords} radius={150} />
        ) : (
          <CircularMenu menuData={menuData} radius={150} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'ivory'
  },
  macContainerHolder: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  containerForMac: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'ivory'
  },

  topContainer: {
    backgroundColor: 'pink'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'lightblue'
  },

  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItemContainer: {
    position: 'absolute',
    width: 100,
    height: 100
  },
  mainMenuItemContainer: {
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
  },
  basicRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderBottomColor: 'gray'
  },
  tabTextHolder: {
    width: '50%',
    paddingVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'Menlo'
  },

  subtitleText: {
    fontWeight: '400',
    fontSize: 22,
    fontFamily: 'menlo'
  },
  block: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10
  },
  textHolder: {
    paddingVertical: '1%',
    backgroundColor: 'khaki'
  },
  header: {
    fontWeight: '400',
    fontSize: 30,
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedFilterButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterButtonText: {
    fontSize: 14,
  },
  selectedFilterButtonText: {
    color: 'white',
  },
})
