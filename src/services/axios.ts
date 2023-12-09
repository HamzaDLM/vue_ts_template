import axios from 'axios'

// const MODE = import.meta.env.MODE
const URL = import.meta.env.VITE_BASE_URL
const AUTH_MODE = import.meta.env.VITE_AUTH_MODE
const BACKEND_USER = import.meta.env.VITE_CONSUMER_KEY
const BACKEND_PASS = import.meta.env.VITE_CONSUMER_SECRET

const API = axios.create({
	baseURL: URL,
	withCredentials: false, // should be disabled to use wildcard in CORS.
})

if (AUTH_MODE == 'basic') {
	API.defaults.headers.common["Authorization"] = 'Basic ' + btoa(`${BACKEND_USER}:${BACKEND_PASS}`)
} else if (AUTH_MODE == 'bearer') {
	API.defaults.headers.common["Authorization"] = 'Bearer ' + btoa(`${BACKEND_USER}:${BACKEND_PASS}`)
}

API.interceptors.response.use(
	function(response) {
		return response
	},
	function(error) {
		const originalRequest = error.config
		if (error.response.status === 401 && !originalRequest._retry) {
			console.log("refresh asked")
			// after logic done
			return API(originalRequest)
		}
		return Promise.reject(error)
	}
)


export default API
