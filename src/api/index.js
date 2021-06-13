import ajax from "./ajax"

const BASE_URL = 'http://10.0.2.2:5000'

export const reqLogin = (email, password) => ajax(BASE_URL + '/login', {email, password}, 'POST')

export const reqSignUp = (username, email, password) => ajax(BASE_URL + '/signup', {'username':username, 'email':email, 'password':password}, 'POST')