import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SQLite from 'react-native-sqlite-2'

//utils
import { FONTS } from '../components/fonts'

export const QuizEngine = ({ navigation, route }) => {
  //route params
  const { questionsArray, isSRS } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)
  const [data, setData] = useState([])

  const moveToNextQuestion = (answer) => {
    setSelectedAns(answer)
    setTimeout(() => {
      if (number !== questionsArray.length - 1) {
        setNumber(number + 1)
        setSelectedAns(null)
      } else {
        navigation.popToTop()
      }
    }, 500) // Adjust the delay as needed
  }

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
      <View style={styles.topSection}>
        <Text style={styles.kanjiText}>{questionsArray[number].kanjiName}</Text>
      </View>

      <View style={styles.bottomSection}>
        {isSRS
          ? data[number].quizAnswers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  {
                    backgroundColor: selectedAns
                      ? selectedAns === answer
                        ? questionsArray[number].meanings.includes(answer)
                          ? 'mediumaquamarine'
                          : 'salmon'
                        : 'white'
                      : 'white'
                  }
                ]}
                onPress={() => moveToNextQuestion(answer)}>
                <Text style={styles.optionText}>{answer}</Text>
              </TouchableOpacity>
            ))
          : questionsArray[number].quizAnswers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  {
                    backgroundColor: selectedAns
                      ? selectedAns === answer
                        ? questionsArray[number].meanings.includes(answer)
                          ? 'mediumaquamarine'
                          : 'salmon'
                        : 'white'
                      : 'white'
                  }
                ]}
                onPress={() => moveToNextQuestion(answer)}>
                <Text style={styles.optionText}>{answer}</Text>
              </TouchableOpacity>
            ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige'
  },

  //3 sections
  topSection: {
    flex: 3 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flex: 1 / 5,
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },

  kanjiText: {
    fontSize: 200,
    fontWeight: 'bold'
  },
  option: {
    width: '45%', // Approximate for two columns, adjust as needed
    height: '40%', // Two rows
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10
  },
  optionText: {
    fontSize: 22,
    color: '#333'
  },
  buttonText: {
    ...FONTS.bold18,
    marginVertical: 15
  },
  quizButton: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
