import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import ProgressBar from 'react-native-progress/Bar'

//utils
import { FONTS } from '../components/fonts'

export const QuizEngine = ({ navigation, route }) => {
  const { width } = useWindowDimensions()
  //route params
  const { questionsArray, quizType } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)

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

  return (
    <View style={styles.container}>
      <View style={styles.barHolder}>
        <ProgressBar
          progress={number / questionsArray.length}
          color={'mediumaquamarine'}
          borderColor={'silver'}
          height={15}
          width={width - 20}
          animationType={'spring'}
        />
      </View>

      <View style={styles.topSection}>
        <Text style={styles.kanjiText}>{questionsArray[number].kanjiName}</Text>
      </View>

      <View style={styles.bottomSection}>
        {quizType === 'meaning'
          ? questionsArray[number].quizAnswers.map((answer, index) => (
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
          : quizType === 'part'
          ? questionsArray[number].quizAnswersOn.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  {
                    backgroundColor: selectedAns
                      ? selectedAns === answer
                        ? questionsArray[number].on.includes(answer)
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
          : questionsArray[number].quizAnswersKun.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  {
                    backgroundColor: selectedAns
                      ? selectedAns === answer
                        ? questionsArray[number].kun.includes(answer)
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
    backgroundColor: 'beige',
    paddingTop: '15%'
  },
  barHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%'
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
    fontSize: 100,
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
