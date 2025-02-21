import axios from 'axios'

const apiProducts = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api/products`,
})

export default apiProducts
