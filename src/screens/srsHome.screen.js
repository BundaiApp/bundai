import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import SQLite from 'react-native-sqlite-2'
//utils
import { FONTS } from '../components/fonts'

const reviewIntervals = { 1: 1, 2: 2, 3: 4, 4: 7 } // Days until next review

export const SRS_HOME = ({ navigation, route }) => {
  //route params
  const { questionsArray } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)

  //find it in sqlite3 & update nextReviewDate & lastSeen
  const updateNextReviewDate = (flashcardId, newReviewDate, newLastSeenDate) => {
    //initialise db
    const database = SQLite.openDatabase('srs.db', '1.0', '', 1)

    if (!database) return
    console.log(
      'newLastSeenDate: ',
      newLastSeenDate,
      'newReviewDate: ',
      newReviewDate,
      'flashcardId: ',
      flashcardId
    )

    database.transaction((tx) => {
      tx.executeSql(
        'UPDATE flashcards SET nextReview = ?  WHERE id = ?',
        [newReviewDate, flashcardId],
        (_, result) => {
          console.log(`Updated flashcard with id ${flashcardId}:`, result)
        },
        (tx, error) => {
          console.error('Update error:', error)
        }
      )
    })
  }

  const moveToNextQuestion = (answer) => {
    let rating = 1
    let nextReview
    let newLastSeenDate

    setSelectedAns(answer)
    if (questionsArray[number].meanings.includes(answer)) {
      //do rating
      rating = 2
      newLastSeenDate = new Date().toISOString().split('T')[0]
      //nextReview date
      nextReview = new Date(new Date().setDate(new Date().getDate() + reviewIntervals[rating]))
        .toISOString()
        .split('T')[0]
      // make changes to sqlite3 item so nextReview date is changed
      updateNextReviewDate(questionsArray[number].id, nextReview, newLastSeenDate)
      console.log('right')
    } else {
      console.log('wrong')
    }

    setTimeout(() => {
      if (number !== questionsArray.length - 1) {
        setNumber(number + 1)
        setSelectedAns(null)
      } else {
        navigation.popToTop()
      }
    }, 500) // Adjust the delay as needed
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topSection}
        onPress={() => console.log(questionsArray[number])}>
        <Text style={styles.kanjiText}>{questionsArray[number].kanjiName}</Text>
      </TouchableOpacity>

      <View style={styles.bottomSection}>
        {questionsArray[number].quizAnswers.map((answer, index) => (
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

// {data[number].quizAnswers.map((item) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.option,
//             {
//               backgroundColor: selectedAns
//                 ? selectedAns === answer
//                   ? data[number].meanings.includes(answer)
//                     ? 'mediumaquamarine'
//                     : 'salmon'
//                   : 'white'
//                 : 'white'
//             }
//           ]}
//           onPress={() => moveToNextQuestion(answer)}>
//           <Text style={styles.optionText}>{answer}</Text>
//         </TouchableOpacity>
//       ))}
//
