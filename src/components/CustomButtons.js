import { View, Text, TouchableOpacity, ActivityIndicator, useWindowDimensions } from 'react-native'
import React from 'react'

const CustomButtons = ({ title, textStyle, onPress, isLoading }) => {
	const { width } = useWindowDimensions()
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			{isLoading ? (
				<ActivityIndicator size={'large'} color={'blue'} />
			) : (
				<TouchableOpacity onPress={onPress}>
					<View
						style={{
							borderRadius: 10,
							height: 50,
							width: width * 0.94,
							alignItems: 'center',
							justifyContent: 'center',
							padding: 10,
							backgroundColor: 'blue',
						}}>
						<Text style={textStyle}>{title}</Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	)
}

export default CustomButtons
