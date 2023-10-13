
# Renk Değiştirme Ekranı (ColorChangeScreen) - React Native

Bu, React Native kullanarak renkleri değiştirmek için kullanılan bir ekranı oluşturan bir bileşenin kaynak kodunu içerir. Bu bileşen, kullanıcının kırmızı, mavi ve yeşil renk bileşenlerini artırmasına ve azaltmasına olanak tanır.

## Nasıl Kullanılır

1. Önce React Native projesi oluşturun veya var olan bir projenize bu bileşeni dahil edin.

2. `ColorChangeScreen.js` adlı dosyayı projenize ekleyin.

3. Projede `import` kullanarak `ColorChangeScreen` bileşenini içe aktarın ve kullanmak istediğiniz bir ekranda kullanın.

```javascript
import ColorChangeScreen from './ColorChangeScreen'; // Doğru dosya yolunu kullanın

// ...

<ColorChangeScreen />
// ColorChangeScreen.js

import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useReducer } from 'react';
import ColorChange from '../../components/ColorChange';

// ...
// ColorChangeScreen.js

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'changeBlue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case 'changeGreen':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
  }
};

// ...

##
## Şifre Girişi Ekranı (PasswordScreen) - React Native

Bu, React Native kullanarak basit bir şifre girişi ekranı oluşturan bir bileşenin kaynak kodunu içerir. Bu bileşen kullanıcıdan bir şifre girmesini bekler ve şifrenin 6 karakterden uzun olup olmadığını kontrol eder.

## Nasıl Kullanılır

1. Önce React Native projesi oluşturun veya var olan bir projenize bu bileşeni dahil edin.

2. `PasswordScreen.js` adlı dosyayı projenize ekleyin.

3. Projede `import` kullanarak `PasswordScreen` bileşenini içe aktarın ve kullanmak istediğiniz bir ekranda kullanın.

```javascript
import PasswordScreen from './PasswordScreen'; // Doğru dosya yolunu kullanın

// ...

<PasswordScreen />
// PasswordScreen.js

import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function PasswordScreen() {
  // Şifre için bir state kullanılır.
  const [password, setPassword] = useState('');

  return (
    <View style={styles.main}>
      <Text>Şifrenizi giriniz:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* Şifre 6 karakterden kısa ise bir uyarı mesajı gösterilir. */}
      {password.length < 6 ? (
        <Text>Şifre en az 6 karakter olmalıdır</Text>
      ) : null}
    </View>
  );
}
Bileşenin Özellikleri
-Kullanıcıdan bir şifre girmesini bekler.
-Şifre girişi alanının başlığı vardır: "Şifrenizi giriniz".
-Şifre girişi için bir TextInput alanı kullanır.
-autoCapitalize ve autoCorrect özellikleri devre dışı bırakılmıştır.
-Şifrenin uzunluğu 6 karakterden kısa ise, bir uyarı mesajı gösterir.

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});



## Desing Screen 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesingScreen() {
  return (
    <View>
        <View 
        style={{width: 50 , height:50 , backgroundColor: 'red'}}
        />
        <View 
        style={{width: 100 , height:100 , backgroundColor: 'blue'}}
        />
        <View 
        style={{width: 150  , height:150 , backgroundColor: 'green'}}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    


})


## flex 
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


##   alignSelf kullanımı 
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
        height : 400 , 

        
    },
    mainTextOne:{
        borderWidth: 1,
        borderColor: 'red',
        margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
        alignSelf : 'flex-start',
    },
    mainTextTwo:{
        borderWidth: 1,
        borderColor: 'red',
         margin : 10 ,
        padding : 20 ,
         borderRadius: 10 ,
    
      
   
    },
    mainTextThree:{
        borderWidth: 1,
        borderColor: 'red',
        margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
  
    },

})

## Top Left  Right Bottom kullanımı 
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
        height : 400 , 

        
    },
    mainTextOne:{
        borderWidth: 1,
        borderColor: 'red',
        margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
        alignSelf : 'flex-start',
    },
    mainTextTwo:{
        borderWidth: 1,
        borderColor: 'red',
         margin : 10 ,
        padding : 20 ,
         borderRadius: 10 ,
        //  top: 10 ,
        // left: 10,
        bottom: 10, 
        right: 20 ,
   
    },
    mainTextThree:{
        borderWidth: 1,
        borderColor: 'red',
        margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
  
    },

})

###### Position Absolute Kullanımı 
  import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesingScreen() {
  return (
    <View style={styles.mainView}>
        <Text style={styles.mainTextOne}>1</Text>
        {/* <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text> */}

    </View>
  )
}

const styles = StyleSheet.create({

    mainView:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 20 ,
        borderRadius : 20 ,
        height : 400 , 

        
    },
    mainTextOne:{
        borderWidth: 1,
        borderColor: 'red',
        // margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
       position : 'absolute',
       bottom : 0 ,
       left : 5 ,
    //     right: 0,
    //     top: 0 ,
    },
    // mainTextTwo:{
    //     borderWidth: 1,
    //     borderColor: 'red',
    //      margin : 10 ,
    //     padding : 20 ,
    //      borderRadius: 10 ,
    //     //  top: 10 ,
    //     // left: 10,
    //     bottom: 10, 
    //     right: 20 ,
   
    // },
    // mainTextThree:{
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin : 10 ,
    //     padding : 20 ,
    //     borderRadius: 10 ,
  
    // },

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesingScreen() {
  return (
    <View style={styles.mainView}>
        <Text style={styles.mainTextOne}>1</Text>
        {/* <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text> */}

    </View>
  )
}

const styles = StyleSheet.create({

    mainView:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 20 ,
        borderRadius : 20 ,
        height : 400 , 

        
    },
    mainTextOne:{
        borderWidth: 1,
        borderColor: 'red',
        // margin : 10 ,
        padding : 20 ,
        borderRadius: 10 ,
       position : 'absolute',
       bottom : 0 ,
       left : 5 ,
    //     right: 0,
    //     top: 0 ,
    },
    // mainTextTwo:{
    //     borderWidth: 1,
    //     borderColor: 'red',
    //      margin : 10 ,
    //     padding : 20 ,
    //      borderRadius: 10 ,
    //     //  top: 10 ,
    //     // left: 10,
    //     bottom: 10, 
    //     right: 20 ,
   
    // },
    // mainTextThree:{
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin : 10 ,
    //     padding : 20 ,
    //     borderRadius: 10 ,
  
    // },

})