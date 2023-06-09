import axios from 'axios'

const auth = axios.create({
  baseURL: process.env.REACT_APP_AUTHENTICATION_URL,
})

export default auth
