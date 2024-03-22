import React from 'react'

import AppNavigation from './src/navigations/AppNavigation'
import { Provider } from './src/providers/Providers'

const App = () => {
	return (
		<Provider>
			<AppNavigation />
		</Provider>
	)
}

export default App
