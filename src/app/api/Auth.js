import { useContext } from 'react'
import { BASE_URL } from '../../config/url'

import ProviderContext from '../../providers/Providers'

export const handleLogin = (email, password) => {
	const { setLoginData } = useContext(ProviderContext)
	let options = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}

	fetch(BASE_URL + `/login?email=${email}&password=${password}`, options)
		.then((res) => res.json())
		.then((data) => setLoginData(data))
		.catch((err) => console.error(err))
}
