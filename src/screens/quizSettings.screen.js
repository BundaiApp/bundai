import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

//components
import { Pill } from '../components/blocks'
import { FONTS } from '../components/fonts'

//utils
import Jlpt from '../util/jlptAll.json'

export default function QuizSettings({ navigation: { navigate } }) {
	const [jlptLevel, setJlptLevel] = useState(5)
	const [selected, setSelected] = useState([])

	const checkIfSelected = (item) => {
		return selected.includes(item)
			? setSelected(selected.filter((i) => i !== item))
			: setSelected([...selected, item])
	}

	const checkThenNavigate = () => {
		return selected.length === 0
			? alert('please select some kanji')
			: navigate('QuizEngine', { questionsArray: selected })
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>JLPT</Text>
			<View style={styles.row}>
				{new Array(5).fill(1).map((i, index) => (
					<Pill
						key={index}
						index={index}
						level={5}
						subject={'JLPT'}
						isAll={false}
						handlePress={() => setJlptLevel(5 - index)}
					/>
				))}
			</View>

			<View style={styles.flatlist}>
				<FlatList
					data={Jlpt[jlptLevel]}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={[
								styles.block,
								{ backgroundColor: selected.includes(item) ? 'khaki' : 'white' }
							]}
							onPress={() => checkIfSelected(item)}>
							<Text style={styles.kanjiText}>{item.kanjiName}</Text>
						</TouchableOpacity>
					)}
					numColumns={5}
					showsVerticalScrollIndicator={false}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.quizButton} onPress={checkThenNavigate}>
					<Text style={styles.buttonText}>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		paddingHorizontal: '5%',
		paddingTop: '2%',
		backgroundColor: 'beige'
	},
	text: {
		...FONTS.bold24
	},
	row: {
		flexDirection: 'row'
	},
	scrollViewContainer: {
		height: 100,
		backgroundColor: 'red'
	},

	flatlist: {
		width: '100%',
		height: '60%',
		backgroundColor: '#C4C4B0',
		borderRadius: 20,
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	block: {
		width: 50,
		height: 50,
		margin: wp('1%'),
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: wp('3%')
	},
	kanjiText: {
		fontSize: 22,
		fontWeight: '500'
	},
	quizButton: {
		width: '100%',
		borderRadius: 20,
		backgroundColor: 'khaki',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		...FONTS.bold18,
		marginVertical: 15
	},
	buttonContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		paddingBottom: 20
	}
})
