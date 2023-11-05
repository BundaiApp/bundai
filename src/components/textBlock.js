import { StyleSheet, Text } from 'react-native'
import { VerticalSpacer } from '../components/spacers'

export const TextBlock = ({ t1, t2, t3 }) => {
	return (
		<>
			<Text style={styles.h1}>{t1}</Text>
			<VerticalSpacer height={2} />
			<Text style={styles.h4}>{t2}</Text>
			<VerticalSpacer height={2} />
			<Text style={styles.h4}>{t3}</Text>
			<VerticalSpacer height={4} />
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
	}
})
