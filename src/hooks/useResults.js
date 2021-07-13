import {useState, useEffect} from 'react'
import yelpApi from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const resultsApi = (term) => {
    setErrorMsg('')
    const params = { term,limit: 50, location: 'Raleigh'}
    yelpApi.get('/search', {params})
    .then(res => setResults(res.data.businesses))
    .catch(() => setErrorMsg('Something went wrong'))
  }

  return [resultsApi, results, errorMsg]
}
