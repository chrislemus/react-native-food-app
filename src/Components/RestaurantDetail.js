import React from 'react'
import { View,Text, StyleSheet, Image  } from 'react-native'

const RestaurantDetail = ({ restaurant}) => {

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: restaurant.image_url}}/>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text >{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15,
    borderRadius: 4
  }
})

export default RestaurantDetail