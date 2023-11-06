import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//utils
import { FONTS } from '../components/fonts'

const QuizScreen = ({ navigation, route }) => {
	const { questionsArray } = route.params
	const [number, setNumber] = useState(0)

	// handle answer press
	const handlePressOption = (answer) => {
		if (number != questionsArray.length - 1) {
			setNumber(number + 1)
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
				{[questionsArray[number].meanings[0], 'wrong answer', 'another wrong answer', 'wrong'].map(
					(answer, index) => (
						<TouchableOpacity
							key={index}
							style={styles.option}
							onPress={() => handlePressOption(answer)}>
							<Text style={styles.optionText}>{answer}</Text>
						</TouchableOpacity>
					)
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'beige'
	},
	topSection: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	kanjiText: {
		...FONTS.bold60
	},
	bottomSection: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
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

	flatListItem: {
		flex: 1,
		width: '100%',
		height: '100%'
	}
})

export default QuizScreen
