import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export function ExamScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Exam</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
