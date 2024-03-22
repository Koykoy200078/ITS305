import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextInput = ({ placeholder, value, textStyle }) => {
	return (
		<>
			<TextInput placeholder={placeholder} value={value} style={textStyle} />
		</>
	)
}

export default CustomTextInput
