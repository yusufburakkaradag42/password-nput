import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesingScreen() {
  return (
    <View style={styles.mainView}>
        <Text style={styles.mainTextOne}>1</Text>
        <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text>

    </View>
  )
}

const styles = StyleSheet.create({

    mainView:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 20 ,
        borderRadius : 20 ,
        // alignItems : 'flex-start',
        flexDirection :'row', // dikey sıralama
        // justifyContent : 'flex-start',
        height : 400 , 

        
    },
    mainTextOne:{
        borderWidth: 1,
        borderColor: 'red',
        margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
         flex : 4,
   
    },
    mainTextTwo:{
        borderWidth: 1,
        borderColor: 'red',
         margin : 10 ,
      //  marginHorizontal: 30 , sağdan soldan boşluk bırakma
      //  marginVertical: 30 , // yukarıdan aşağıdan boşluk bırakma
      padding : 20 ,
      borderRadius: 10 ,
      flex : 5 ,
      
   
    },
    mainTextThree:{
        borderWidth: 1,
        borderColor: 'red',
         margin : 10 ,
      //  marginHorizontal: 30 , sağdan soldan boşluk bırakma
      //  marginVertical: 30 , // yukarıdan aşağıdan boşluk bırakma
      padding : 20 ,
      borderRadius: 10 ,
     flex : 1 ,
    },

})