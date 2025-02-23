import axios from 'axios'

const apiUser = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api/user`,
})

export default apiUser
