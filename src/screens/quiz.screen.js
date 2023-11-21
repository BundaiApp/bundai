import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import SQLite from 'react-native-sqlite-2'
//util
import { FONTS } from '../components/fonts'
//components
import { HeroTextBlock } from '../components/textBlock'

//"SELECT * FROM flashcards WHERE date(nextReview) = '2023-11-25'",
export const QuizScreen = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([])

  // Initialize the database
  useFocusEffect(
    useCallback(() => {
      const database = SQLite.openDatabase('srs.db', '1.0', '', 1)

      let d = new Date().toISOString().split('T')[0]

      database.transaction((tx) => {
        // get the data from sqlite
        tx.executeSql(
          'SELECT * FROM flashcards WHERE nextReview =?',
          [d],
          // 'SELECT * FROM flashcards',
          function async(tx, res) {
            let tempData = []
            for (let i = 0; i < res.rows.length; ++i) {
              let row = res.rows.item(i)
              let quizAnswersArray
              try {
                quizAnswersArray = JSON.parse(row.quizAnswers || '[]')
                meaningsArray = JSON.parse(row.meanings || '[]')
              } catch (e) {
                // Handle the error or set a default value if JSON parsing fails
                quizAnswersArray = []
              }
              // Construct the full data object including parsed quizAnswers
              tempData.push({ ...row, quizAnswers: quizAnswersArray, meanings: meaningsArray })
            }
            setData(tempData) // Set state once after collecting all data
          },
          function (tx, error) {
            console.error('Query error:', error)
          }
        )
      })
      // Cleanup if necessary
      //return () => database.close()
    }, [])
  )
  useEffect(() => {
    const database = SQLite.openDatabase('srs.db', '1.0', '', 1)
    database.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kanjiName TEXT UNIQUE,
        hiragana TEXT,
        meanings TEXT,
        firstSeen TEXT,
        lastSeen TEXT,
        rating INTEGER,
        nextReview TEXT,
        quizAnswers TEXT
      )`)
    })
    //return () => database.close()
  }, [])

  // Initialize the database
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
            onPress={() => navigate('SRS_Home', { questionsArray: data })}>
            <Text style={{ ...FONTS.bold24 }}>SRS</Text>
            <View style={styles.notificationCircle}>
              <Text style={styles.notificationText}>{data.length}</Text>
            </View>
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
