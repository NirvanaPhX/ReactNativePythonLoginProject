import axios from 'axios'
import { Alert } from 'react-native'

export default function ajax(url, data={}, method='GET') {
	return new Promise((resolve, reject) => {
		let promise
		switch(method) {
			case 'GET':
				promise = axios.get(url, {
					params: data})
				break;
			case 'POST':
				promise = axios.post(url, data)
				break;
			case 'PUT':
				promise = axios.put(url, data)
				break;
			case 'DELTE': 
				promise = axios.delete(url, data)
				break;
		}

		promise.then(response => {
			resolve(response.data)
		}).catch(error => {
			console.log(error)
			Alert.alert(
				"Request failed, please try again.", error.message);
		})
	})
}
