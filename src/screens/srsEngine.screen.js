import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useMutation } from '@apollo/client'
//utils
import { FONTS } from '../components/fonts'
//mutation
import CALCULATE_NEXT_REVIEW_DATE from '../mutations/calculateNextReviewDate.mutation'
//utils
import AuthContext from '../contexts/authContext'

export const SRS_Engine = ({ navigation, route }) => {
  //route params
  const { questionsArray } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)
  //context
  const { auth } = useContext(AuthContext)
  //mutation
  const [calculateNextReviewDate] = useMutation(CALCULATE_NEXT_REVIEW_DATE)

  const moveToNextQuestion = async (answer) => {
    setSelectedAns(answer)
    let rating = questionsArray[number].rating
    // mutation to increase kanjis next review date
    await calculateNextReviewDate({
      variables: {
        userId: auth.userId,
        kanjiName: questionsArray[number].kanjiName,
        rating: questionsArray[number].meanings.includes(answer) ? rating++ : rating--
      }
    })

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
      <View style={styles.topSection}>
        <Text style={styles.kanjiText}>{questionsArray[number].kanjiName}</Text>
      </View>

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
  kanjiText: {
    fontSize: 80,
    fontWeight: 'bold'
  },
  kanjiTextBig: {
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
