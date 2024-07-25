import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useWindowDimensions
} from 'react-native'
import { toHiragana } from 'wanakana'

//utils
import { FONTS } from '../components/fonts'

export const QuizEngine = ({ navigation, route }) => {
  //route params
  const { questionsArray, quizType, isWritten } = route.params
  //state
  const [number, setNumber] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null)
  const [kana, setKana] = useState(null)
  const [textAnswer, setIsTextAnswer] = useState('static')

  const textIn = useRef(null)

  function returnColor() {
    if (textAnswer === 'right') return 'mediumaquamarine'
    if (textAnswer === 'wrong') return 'red'
    if (textAnswer === 'static') return 'thistle'
  }

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

  const writeToNextQuestion = () => {
    setTimeout(() => {
      if (number !== questionsArray.length - 1) {
        setNumber(number + 1)
        setKana(null)
        setIsTextAnswer('static')
      } else {
        navigation.popToTop()
      }
    }, 500) // Adjust the delay as needed
  }

  return (
    <View style={styles.container}>
      <View style={styles.barHolder} />

      <View style={styles.topSection}>
        <Text style={styles.kanjiText}>{questionsArray[number].kanjiName}</Text>
      </View>

      <View style={styles.bottomSection}>
        {isWritten ? (
          <>
            <TextInput
              style={styles.textInput}
              value={kana}
              placeholder={'write your answer here'}
              placeholderTextColor={'gray'}
              autoCapitalize={'none'}
              blurOnSubmit={false}
              autoFocus={true}
              ref={textIn}
              onChangeText={(text) => {
                if (quizType === 'part' || quizType === 'full') {
                  let ans = toHiragana(text)
                  setKana(ans)
                } else {
                  setKana(text)
                }
              }}
              onSubmitEditing={(event) => {
                if (quizType === 'part') {
                  console.log('in on')
                  console.log(questionsArray[number])
                  if (questionsArray[number].on.includes(kana)) {
                    // some indication that answer was right
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }

                if (quizType === 'full') {
                  console.log('in kun')
                  console.log(questionsArray[number])
                  if (questionsArray[number].kun.includes(kana)) {
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }

                if (quizType === 'meaning') {
                  if (
                    questionsArray[number].meanings.includes(
                      kana[0].toUpperCase() + kana.substring(1)
                    )
                  ) {
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }
                writeToNextQuestion()
                setTimeout(() => {
                  textIn.current.focus()
                }, 1)
              }}
            />
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: returnColor()
                }
              ]}
              onPress={() => {
                if (quizType === 'part') {
                  console.log('in on')
                  console.log(questionsArray[number])
                  if (questionsArray[number].on.includes(kana)) {
                    // some indication that answer was right
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }

                if (quizType === 'full') {
                  console.log('in kun')
                  console.log(questionsArray[number])
                  if (questionsArray[number].kun.includes(kana)) {
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }

                if (quizType === 'meaning') {
                  if (
                    questionsArray[number].meanings.includes(
                      kana[0].toUpperCase() + kana.substring(1)
                    )
                  ) {
                    setIsTextAnswer('right')
                  } else {
                    setIsTextAnswer('wrong')
                  }
                }
                writeToNextQuestion()
              }}>
              <Text style={styles.buttonText}>answer</Text>
            </TouchableOpacity>
          </>
        ) : quizType === 'meaning' ? (
          questionsArray[number].quizAnswers.map((answer, index) => (
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
        ) : quizType === 'part' ? (
          questionsArray[number].quizAnswersOn.map((answer, index) => (
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
        ) : (
          questionsArray[number].quizAnswersKun.map((answer, index) => (
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
          ))
        )}
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
  },
  textInput: {
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    color: 'gray',
    ...FONTS.regular14,
    paddingBottom: '1%',
    height: '15%'
  },
  button: {
    marginTop: '10%',
    height: '20%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    backgroundColor: 'thistle'
  },
  buttonText: {
    ...FONTS.bold21
  }
})
