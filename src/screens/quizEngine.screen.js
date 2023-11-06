import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//utils
import { FONTS } from '../components/fonts'

export const QuizEngine = ({ navigation, route }) => {
	//route params
	const { questionsArray } = route.params
	//state
	const [number, setNumber] = useState(0)
	const [selectedAns, setSelectedAns] = useState(null)

	const moveToNextQuestion = () => {
		//set the next question
		if (number != questionsArray.length - 1) {
			setNumber(number + 1)
			setSelectedAns(null)
		} else if (number === questionsArray.length - 1) {
			navigation.popToTop()
		}
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
								backgroundColor:
									selectedAns === answer
										? questionsArray[number].meanings.includes(answer)
											? 'mediumaquamarine'
											: 'salmon'
										: 'white'
							}
						]}
						onPress={() => setSelectedAns(answer)}>
						<Text style={styles.optionText}>{answer}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.quizButton} onPress={moveToNextQuestion}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
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
		...FONTS.bold60
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
		fontSize: 20,
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
