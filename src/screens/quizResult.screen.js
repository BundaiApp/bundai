import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function QuizResult({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.popToTop()}>
				<Text style={styles.text}> Go back</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
