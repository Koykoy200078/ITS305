import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ROUTES } from '../config'
import Dashboard from '../layouts/Dashboard'
import Profile from '../layouts/Profile'
import Settings from '../layouts/Settings'
import Login from '../layouts/Login'
import { useContext } from 'react'
import ProviderContext from '../providers/Providers'

const MainStack = createStackNavigator()
const Auth = () => {
	return (
		<MainStack.Navigator
			initialRouteName={ROUTES.LOGIN}
			screenOptions={{
				headerShown: false,
			}}>
			<MainStack.Screen name={ROUTES.LOGIN} component={Login} />
		</MainStack.Navigator>
	)
}

const Main = () => {
	return (
		<MainStack.Navigator
			initialRouteName={ROUTES.DASHBOARD}
			screenOptions={{
				headerShown: false,
			}}>
			<MainStack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
			<MainStack.Screen name={ROUTES.SETTINGS} component={Settings} />
			<MainStack.Screen name={ROUTES.PROFILE} component={Profile} />
		</MainStack.Navigator>
	)
}

export default () => {
	const { getLoginData } = useContext(ProviderContext)
	console.log('getLoginData: ', getLoginData)
	return (
		<NavigationContainer>
			<Auth />
		</NavigationContainer>
	)
}
