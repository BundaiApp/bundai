import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function QuizSettings({ navigation: { navigate } }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Quiz Settings page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: '5%'
	}
})
