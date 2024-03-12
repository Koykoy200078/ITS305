import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Icons = {
	FontAwesome,
	Feather,
	Entypo,
	MaterialCommunityIcons,
}

const Icon = ({ type, name, size, color }) => {
	const TAG = type
	return <TAG name={name} size={size} color={color} />
}

export default Icon
