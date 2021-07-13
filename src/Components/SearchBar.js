import React, {useState} from 'react'
import { View,Text, StyleSheet,TextInput  } from 'react-native'
import {Feather} from '@expo/vector-icons'


const SearchBar = ({searchTerm, onTermSubmit, onTermChange}) => {

  return(
    <View style={styles.background}>
      <Feather name='search' style={styles.icon}/>
      <TextInput 
        style={styles.TextInput} 
        placeholder='Search' 
        autoCapitalize='none'
        autoCorrect={false}
        value={searchTerm} 
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  background: {
    backgroundColor: '#e0e0e0',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  TextInput: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar