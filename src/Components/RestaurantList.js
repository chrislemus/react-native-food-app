import React from 'react'
import { View,Text, StyleSheet, FlatList, TouchableOpacity  } from 'react-native'
import RestaurantDetail from './RestaurantDetail'
import { useNavigation } from '@react-navigation/native';


const RestaurantList = ({title, results}) => {
  if(results.length === 0) return null
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {id: item.id})}>
            <RestaurantDetail restaurant={item} navigation={navigation}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 15
  },
  container: {
    marginBottom: 10
  }
})

export default RestaurantList