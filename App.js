import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from './src/layouts/Dashboard'
import Profile from './src/layouts/Profile'
import Settings from './src/layouts/Settings'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTES } from './src/config'

const App = () => {
	const Main = createStackNavigator()

	return (
		<NavigationContainer>
			<Main.Navigator>
				<Main.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
				<Main.Screen name={ROUTES.SETTINGS} component={Settings} />
				<Main.Screen name={ROUTES.PROFILE} component={Profile} />
			</Main.Navigator>
		</NavigationContainer>
	)
}

export default App
