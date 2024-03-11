import { View, Text, Button } from 'react-native'
import React from 'react'
import { ROUTES } from '../config'

const Settings = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text
				style={{
					fontSize: 40,
					fontWeight: 'bold',
				}}>
				Settings
			</Text>

			<Button title={ROUTES.DASHBOARD} onPress={() => navigation.navigate(ROUTES.DASHBOARD)} />

			<View
				style={{
					marginVertical: 10,
				}}
			/>
			<Button title={ROUTES.PROFILE} onPress={() => navigation.navigate(ROUTES.PROFILE)} />
		</View>
	)
}

export default Settings
