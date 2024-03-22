import { View, Text } from 'react-native'
import React from 'react'

const CardView = ({ cardStyle, children }) => {
	return <View style={cardStyle}>{children}</View>
}

export default CardView
