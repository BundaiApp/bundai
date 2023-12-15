import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
//utils
import { FONTS } from '../components/fonts'

const reviewIntervals = { 1: 1, 2: 2, 3: 7, 4: 14, 5: 30, 6: 120 } // Days until next review

export const SRS_HOME = ({ navigation, route }) => {
  //route params
  const { questionsArray } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)

  const moveToNextQuestion = (answer) => {
    setSelectedAns(answer)

    let rating = questionsArray[number].rating
    let nextReview
    const newLastSeenDate = new Date().toISOString().split('T')[0]

    if (questionsArray[number].meanings.includes(answer)) {
      // mutation to increase kanjis next review date
      // rating++
      console.log('right')
    } else {
      console.log('wrong')
      // mutation to decrease kanjis next review date
      // rating--
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
