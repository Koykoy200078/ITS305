import { View, Text, Button } from 'react-native'
import React from 'react'
import { ROUTES } from '../config'

const Profile = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text
				style={{
					fontSize: 40,
					fontWeight: 'bold',
				}}>
				Profile
			</Text>

			<Button
				title={ROUTES.SETTINGS}
				onPress={() => navigation.navigate(ROUTES.SETTINGS)}
			/>

			<View
				style={{
					marginVertical: 10,
				}}
			/>
			<Button
				title={ROUTES.DASHBOARD}
				onPress={() => navigation.navigate(ROUTES.DASHBOARD)}
			/>
		</View>
	)
}

export default Profile
