import { StyleSheet, Text } from 'react-native'
import { VerticalSpacer } from '../components/spacers'

export const TextBlock = ({ tx1, tx2, tx3 }) => {
	return (
		<>
			<Text style={styles.h1}>{tx1}</Text>
			<VerticalSpacer height={2} />
			<Text style={styles.h4}>{tx2}</Text>
			<VerticalSpacer height={2} />
			<Text style={styles.h4}>{tx3}</Text>
			<VerticalSpacer height={4} />
		</>
	)
}

export const HeroTextBlockBottom = ({ tx1, tx2, tx3, tx1Color, tx2Color, tx3Color }) => {
	return (
		<>
			<Text style={[styles.bottomHeaderLineOne, { color: tx1Color }]}>{tx1}</Text>
			<Text style={[styles.bottomHeaderLineTwo, { color: tx2Color }]}>{tx2}</Text>
			<Text style={[styles.bottomHeaderLineThree, { color: tx3Color }]}>{tx3}</Text>
		</>
	)
}

export const HeroTextBlockTop = ({ tx1, tx2, tx3, tx1Color, tx2Color, tx3Color }) => {
	return (
		<>
			<Text style={[styles.headerLineOne, { color: tx1Color }]}>{tx1}</Text>
			<Text style={[styles.headerLineTwo, { color: tx2Color }]}>{tx2}</Text>
			<Text style={[styles.headerLineThree, { color: tx3Color }]}>{tx3}</Text>
		</>
	)
}
const styles = StyleSheet.create({
	h1: {
		fontWeight: 'bold',
		fontSize: 20,
		alignSelf: 'flex-start',
		fontFamily: 'menlo'
	},
	h3: {
		fontWeight: '300',
		fontSize: 10,
		paddingVertical: '2%',
		fontFamily: 'menlo',
		color: 'dimgray'
	},
	h4: {
		fontWeight: '300',
		fontSize: 15,
		fontFamily: 'menlo',
		color: 'gray'
	},
	blockHolder: {
		width: '95%',
		paddingHorizontal: '5%',
		borderRadius: 20,
		paddingTop: '7%',
		marginBottom: '5%',
		backgroundColor: 'beige'
	},

	//hero text block
	headerLineOne: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#ffffff',
		fontFamily: 'Menlo'
	},
	headerLineTwo: {
		fontSize: 32, // Assuming a larger font size for "Super Quiz"
		fontWeight: 'bold',
		color: '#ffffff',
		fontFamily: 'Menlo',
		marginBottom: 5 // Adjust as necessary to get the desired effect
	},
	headerLineThree: {
		fontSize: 16,
		color: '#ffffff',
		fontFamily: 'Menlo'
	},

	bottomHeaderLineOne: {
		fontSize: 16,
		fontWeight: 'normal',
		color: '#000000',
		marginBottom: 4
	},
	bottomHeaderLineTwo: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000000',
		marginBottom: 4
	},
	bottomHeaderLineThree: {
		fontSize: 18,
		color: '#000000'
	}
})
