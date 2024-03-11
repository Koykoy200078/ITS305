import { View, Text, Button, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { IMGS, ROUTES } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard = ({ navigation }) => {
	const { width } = useWindowDimensions()
	const [getSwitch, setSwitch] = useState(false)

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text
				style={{
					fontSize: 40,
					fontWeight: 'bold',
				}}>
				{ROUTES.DASHBOARD}
			</Text>

			<Image
				source={getSwitch ? IMGS.bg : IMGS.bg2}
				style={{
					width: width * 0.8,
					height: width * 0.9,
					borderRadius: 40,
					marginVertical: 20,
				}}
			/>

			<TouchableOpacity onPress={() => setSwitch(!getSwitch)}>
				<View
					style={{
						borderWidth: 2,
						padding: 10,
						borderRadius: 20,
						width: width * 0.5,
						height: width * 0.2,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text
						style={{
							fontSize: 30,
							fontWeight: '700',
							color: '#000',
						}}>
						Next{' '}
					</Text>
				</View>
			</TouchableOpacity>

			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<Button title={ROUTES.SETTINGS} onPress={() => navigation.navigate(ROUTES.SETTINGS)} />

			<View
				style={{
					marginVertical: 10,
				}}
			/>
			<Button title={ROUTES.PROFILE} onPress={() => navigation.navigate(ROUTES.PROFILE)} />
		</View>
	)
}

export default Dashboard
