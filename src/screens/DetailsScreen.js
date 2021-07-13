import React, {useState, useEffect} from 'react'
import { View,Text, StyleSheet, FlatList, Image  } from 'react-native'
import useYelpApi from '../api/yelp'
const DetailsScreen = ( { route}) => {
  const [result, setResult] = useState(null)
  const getResult = (id) => {
    useYelpApi.get(`/${id}`).then(({data}) => setResult(data))
  }
  useEffect(() => getResult(route.params.id), [])

  if(!result) return null;

  return(
    <View>
      <Text>Details Screen</Text>
      <Text>{result?.name}</Text>
      <FlatList 
        data={result?.photos}
        keyExtractor={(photoUrl) => photoUrl}
        renderItem={({item}) =>  <Image source={{uri: item}} style={styles.image}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})

export default DetailsScreen