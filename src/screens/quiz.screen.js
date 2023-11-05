import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Quiz = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Let's Play</Text>
			<Text style={styles.subheader}>Be the first!</Text>

			{/* Level List */}
			<View style={styles.levelContainer}>
				{/* Level 1 */}
				<TouchableOpacity style={styles.blockHolder}>
					<View style={styles.levelInfo}>
						<Text style={styles.levelText}>Travel newbie</Text>
					</View>
					<Image source={require('../assets/books.png')} style={styles.levelImage} />
				</TouchableOpacity>

				{/* Level 2 */}
				<TouchableOpacity style={styles.blockHolder}>
					<View style={styles.levelInfo}>
						<Text style={styles.levelText}>Continuing</Text>
					</View>
					<Image source={require('../assets/books.png')} style={styles.levelImage} />
				</TouchableOpacity>

				{/* Level 3 */}
				<TouchableOpacity style={styles.blockHolder}>
					<View style={styles.levelInfo}>
						<Text style={styles.levelText}>Continuing</Text>
					</View>
					<Image source={require('../assets/books.png')} style={styles.levelImage} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'ivory',
		alignItems: 'center',
		paddingTop: 50
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 4
	},
	subheader: {
		fontSize: 16,
		color: 'grey'
	},
	levelContainer: {
		paddingTop: 30
	},
	levelButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#E8EAF6',
		borderRadius: 20,
		marginVertical: 10,
		width: wp('90%'),
		padding: 20
	},
	levelInfo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	levelIcon: {
		width: 30,
		height: 30,
		marginRight: 10
	},
	levelText: {
		fontSize: 18
	},
	levelImage: {
		width: 50,
		height: 50
	},

	blockHolder: {
		paddingHorizontal: '5%',
		borderRadius: 20,
		paddingTop: '7%',
		marginBottom: '5%',
		backgroundColor: 'beige',
		width: wp('90%')
	}
})

export default Quiz
