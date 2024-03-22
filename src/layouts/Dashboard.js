import {
	View,
	Text,
	Button,
	useWindowDimensions,
	Image,
	FlatList,
	TextInput,
	Alert,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMGS, ROUTES } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Icons } from '../config/icons'

const Dashboard = ({ navigation }) => {
	const { width, height } = useWindowDimensions()

	const [getData, setData] = useState([])

	const [id, setId] = useState('')
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [releaseDate, setReleaseDate] = useState('')
	const [mtrcb, setMtrcb] = useState('')

	

	useEffect(() => {}, [getData, title, description, releaseDate, mtrcb])

	console.log(getData)

	const handleApiGET = () => {
		let options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization:
					'Bearer 9|jHA0jyNKXvMz5vOIArELxGte0Pu0T7lVXRaIhm9wabae2e00',
			},
		}
		fetch(BASE + '/crud', options)
			.then((res) => res.json())
			.then((data) => {
				Alert.alert('View All!', data.message)
				setData(data)
			})
			.catch((err) => console.error(err))
	}

	const handleApiPOST = () => {
		let options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				description: description,
				release_date: releaseDate,
				mtrcb: mtrcb,
			}),
		}

		fetch(BASE + '/crud-save', options)
			.then((res) => res.json())
			.then((data) => Alert.alert('Success!', data.message))
			.catch((err) => console.error(err))
	}

	const handleApiPUT = (id) => {
		let options = {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				description: description,
				release_date: releaseDate,
				mtrcb: mtrcb,
			}),
		}

		fetch(BASE + '/crud-update/' + id, options)
			.then((res) => res.json())
			.then((data) => Alert.alert('Success!', data.message))
			.catch((err) => console.error(err))
	}

	const handleApiDelete = (id) => {
		let options = {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}

		fetch(BASE + '/crud-delete/' + id, options)
			.then((res) => res.json())
			.then((data) => Alert.alert('Success!', data.message))
			.catch((err) => console.error(err))
	}

	const renderItems = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					Alert.alert(`Selected ID: ${item.id}`)
					setId(item.id)
				}}>
				<View
					style={{
						marginVertical: 10,
						width: width * 0.8,
					}}>
					<Text>Title: {item.title}</Text>
					<Text>Description: {item.description}</Text>
					<Text>Release Date: {item.release_date}</Text>
					<Text>MTRCB: {item.mtrcb}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<FlatList data={getData.data2} renderItem={renderItems} />

			<TextInput
				placeholder='Title'
				onChangeText={(val) => setTitle(val)}
				style={{
					borderBottomWidth: 2,
					width: width * 0.8,
				}}
			/>
			<TextInput
				placeholder='Description'
				onChangeText={(val) => setDescription(val)}
				style={{
					borderBottomWidth: 2,
					width: width * 0.8,
				}}
			/>
			<TextInput
				placeholder='Release Date'
				onChangeText={(val) => setReleaseDate(val)}
				style={{
					borderBottomWidth: 2,
					width: width * 0.8,
				}}
			/>
			<TextInput
				placeholder='MTRCB'
				onChangeText={(val) => setMtrcb(val)}
				style={{
					borderBottomWidth: 2,
					width: width * 0.8,
				}}
			/>
			<View
				style={{
					marginVertical: 10,
				}}
			/>
			<Button title='GET DATA' onPress={() => handleApiGET()} />
			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<Button title='SAVE DATA' onPress={() => handleApiPOST()} />
			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<Button title='UPDATE DATA' onPress={() => handleApiPUT(id)} />
			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<Button
				title='DELETE SELECTED DATA'
				onPress={() => handleApiDelete(id)}
			/>

			<View
				style={{
					marginVertical: 10,
				}}
			/>

			<Button
				title='CLEAR ALL'
				onPress={() => {
					setId('')
					setTitle('')
					setDescription('')
					setReleaseDate('')
					setMtrcb('')
				}}
			/>
		</View>
	)
}

export default Dashboard
