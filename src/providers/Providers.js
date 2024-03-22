import { createContext, useState } from 'react'

const ProviderContext = createContext()

export const Provider = ({ children }) => {
	const [getLoginData, setLoginData] = useState([])

	return (
		<ProviderContext.Provider
			value={{
				getLoginData,
				setLoginData,
			}}>
			{children}
		</ProviderContext.Provider>
	)
}

export default ProviderContext
