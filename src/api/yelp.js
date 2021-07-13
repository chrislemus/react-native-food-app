import axios from 'axios'
import {YELP_API_KEY} from '../../config'
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: YELP_API_KEY

  }
})

// Client ID
// lJYMw4jNXeEzY3O69zq9mw

// API Key
// 