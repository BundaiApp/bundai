import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import SQLite from 'react-native-sqlite-2'

export const SRS_HOME = () => {
  const [data, setData] = useState([])

  // Initialize the database
  useEffect(() => {
    const database = SQLite.openDatabase('srs.db', '1.0', '', 1)
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kanjiName TEXT UNIQUE,
        hiragana TEXT,
        meanings TEXT,
        firstSeen DATE,
        lastSeen DATE,
        rating INTEGER,
        nextReview DATE,
        quizAnswers TEXT
      )`
      )

      tx.executeSql(
        "SELECT *, date('now') AS currentDate FROM flashcards",
        [],
        function (tx, res) {
          let tempData = []
          for (let i = 0; i < res.rows.length; ++i) {
            let row = res.rows.item(i)
            let quizAnswersArray
            try {
              quizAnswersArray = JSON.parse(row.quizAnswers)
            } catch (e) {
              // Handle the error or set a default value if JSON parsing fails
              quizAnswersArray = []
            }
            // Construct the full data object including parsed quizAnswers
            tempData.push({ ...row, quizAnswers: quizAnswersArray })
          }
          setData(tempData) // Set state once after collecting all data
        },
        function (tx, err) {
          console.error('Error:', err)
        }
      )
    })

    // Cleanup if necessary
    // return () => database.close();
  }, [])

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.kanjiName} onPress={() => console.log(item)}>
          <Text style={styles.text}>{item.kanjiName}</Text>
          <Text style={styles.text}>last seen :{new Date(item.lastSeen).toLocaleString()}</Text>
          <Text style={styles.text}>next review: {new Date(item.nextReview).toLocaleString()}</Text>

          <View style={styles.bottomSection}>
            {item.quizAnswers.map((i) => (
              <View style={styles.option}>
                <Text style={styles.optionText} key={i}>
                  {i}
                </Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip'
  },
  option: {
    width: '45%', // Approximate for two columns, adjust as needed
    height: '40%', // Two rows
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'khaki',
    margin: 2,
    borderRadius: 10
  },
  optionText: {
    fontSize: 22,
    color: '#333'
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})
