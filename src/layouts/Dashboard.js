import { View, Text, Button, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { IMGS, ROUTES } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Icons } from '../config/icons'

const Dashboard = ({ navigation }) => {
	const { width, height } = useWindowDimensions()
	const [nextView, setNextView] = useState(false)

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
					color: 'black',
				}}>
				{ROUTES.DASHBOARD}
			</Text>

			<Icons.Entypo name='twitter-with-circle' size={50} color={'blue'} />
			<Icons.Feather name='activity' size={150} color={'blue'} />
			<Icons.FontAwesome name='signal' size={100} color={'blue'} />

			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<TouchableOpacity onPress={() => setNextView(!nextView)}>
				<View
					style={{
						padding: 10,
						width: width * 0.65,
						borderWidth: 2,
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}>
					<View
						style={{
							marginHorizontal: 20,
						}}>
						<Icons.MaterialCommunityIcons
							name='page-next-outline'
							size={100}
							color={'black'}
						/>
					</View>
					<View>
						<Text
							style={{
								fontSize: 40,
								fontWeight: 'bold',
							}}>
							Next
						</Text>
					</View>
				</View>
			</TouchableOpacity>

			<View
				style={{
					marginVertical: 10,
				}}
			/>

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
				title={ROUTES.PROFILE}
				onPress={() => navigation.navigate(ROUTES.PROFILE)}
			/>
		</View>
	)
}

export default Dashboard
