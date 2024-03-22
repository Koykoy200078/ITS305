import React, { useContext, useState } from 'react'
import {
	View,
	useWindowDimensions,
	TextInput,
	Button,
	Text,
} from 'react-native'
import ProviderContext from '../providers/Providers'
import { handleLogin } from '../app/api/Auth'

const Login = () => {
	const { width } = useWindowDimensions()
	const { getLoginData } = useContext(ProviderContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = () => {
		handleLogin(email, password)
	}

	return (
		<View
			style={{
				padding: 10,
			}}>
			<TextInput
				placeholder='Email'
				style={{
					width: width * 0.9,
					borderBottomWidth: 2,
				}}
				value={email}
				onChangeText={(val) => setEmail(val)}
			/>

			<TextInput
				placeholder='Password'
				style={{
					width: width * 0.9,
					borderBottomWidth: 2,
				}}
				value={password}
				onChangeText={(val) => setPassword(val)}
			/>

			<View style={{ marginVertical: 10 }} />
			<Button title='Login' onPress={() => login()} />
		</View>
	)
}

export default Login
