import React, {useState, useEffect} from 'react'
import { View,Text, StyleSheet, ScrollView  } from 'react-native'
import useResults from '../hooks/useResults'

import SearchBar from '../Components/SearchBar'
import RestaurantList from '../Components/RestaurantList'
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [resultsApi, results, errorMsg] = useResults()
  useEffect(() => resultsApi('pasta'), [])
  const filterResultsByPrice = (price) => {
    return results.filter(results => results.price === price) 
  }

  return(
    <>
      <SearchBar 
        searchTerm={searchTerm} 
        onTermChange={(val) => setSearchTerm(val)}
        onTermSubmit={() => resultsApi(searchTerm)}
      />
      <Text>{searchTerm}</Text>
      <View style={styles.centerContent}>
        {errorMsg.length > 0 && <Text>{errorMsg}</Text>}
      </View>
      <ScrollView>
        <RestaurantList title='Cost Effective' results={filterResultsByPrice('$')} />
        <RestaurantList title='Bit Pricier' results={filterResultsByPrice('$$')} />
        <RestaurantList title='Big Spender' results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  centerContent: {
    textAlign: 'center',
    display: 'flex',
    // alignContent: 'center',
    // justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchScreen