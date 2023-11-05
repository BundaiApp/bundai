import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//utils
import { FONTS } from '../components/fonts'

const QuizScreen = ({ route }) => {
	const { questionsArray } = route.params

	// Example function to handle option press
	const handlePressOption = (option) => {
		console.log('Option selected:', option)
		// Here you might set the state, navigate to the next question, etc.
	}

	const FlatListItem = ({ item }) => {
		return (
			<View style={styles.flatListItem}>
				<View style={styles.topSection}>
					<Text style={styles.kanjiText}>{item.kanjiName}</Text>
				</View>
				<View style={styles.bottomSection}>
					{[item.meanings[0], 'wrong answer', 'another wrong answer', 'wrong'].map((answer, index) => (
						<TouchableOpacity key={index} style={styles.option} onPress={() => handlePressOption(answer)}>
							<Text style={styles.optionText}>{answer}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={questionsArray}
				renderItem={({ item }) => <FlatListItem item={item} />}
				showsVerticalScrollIndicator={false}
				horizontal={true}
				pagingEnabled
				getItemLayout={(questionsArray, index) => ({
					length: wp('100%'),
					offset: wp('100%') * index,
					index
				})}
			/>
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
		justifyContent: 'space-around',
		backgroundColor: 'red',
		borderColor: 'white',
		borderWidth: 3
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
