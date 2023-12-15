import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
//util
import { FONTS } from '../components/fonts'
//components
import { HeroTextBlock } from '../components/textBlock'

export const QuizScreen = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([])
  const [allData, setAllData] = useState([])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <View styles={styles.textBlockContainer}>
          <HeroTextBlock
            tx2={'Memorise'}
            tx2Color={'black'}
            tx3={'Spaced Repetition System'}
            tx3Color={'dimgray'}
          />
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.boxRow}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              alert('Nothing to review')
              //navigate('SRS_Home', { questionsArray: data })
            }}>
            <Text style={{ ...FONTS.bold24 }}>SRS</Text>
            {data.length === 0 ? null : (
              <View style={styles.notificationCircle}>
                <Text style={styles.notificationText}>{data.length}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigate('QuizSettings')}>
            <Text style={{ ...FONTS.bold24 }}>Instant Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  topSection: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30, // Rounded corners
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30, // Adjust padding to match the design
    paddingBottom: 30 // Adjust padding to ensure content is above the navigation
  },
  //boxRow
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
    width: '45%',
    height: 100,
    borderRadius: 10,
    marginRight: 15
  },
  notificationCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white'
  }
})
