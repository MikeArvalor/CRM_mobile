import * as React from 'react';
import 'react-native-gesture-handler'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Main from './src/components/Main'
import Group from './src/components/Group'
import AddGroup from './src/components/AddGroup'
import ViewGroup  from './src/components/ViewGroup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import GroupFunc from './src/components/Group';

//import BottomTabNavigator from './src/components/TabNavigator'

function HomeScreen({ navigation }) {
  return (
    <View style ={styles.container}>
        <View style={styles.firstblockLog}>
          <TextInput style={styles.inputLog}
          placeholder="Логин"
          keyboardType="numeric"
          />
          <TextInput
          style={styles.inputLog}
          placeholder="Пароль"
          secureTextEntry={true}
          />
          <View style={styles.buttonLog}>
          <Button
        title="Войти"
        onPress={() => navigation.navigate('Main')}
          />
          </View>
        </View>
      </View> 
     
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  firstblockLog:{
    
    height:330,
    backgroundColor: "#DAE8FC",
    alignItems:"center",
    alignSelf:"center",
    alignContent:"center",
    justifyContent:"center",
    borderWidth: 1,
    marginTop:100,
    width:330,
  },
  inputLog:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    width:250,
    backgroundColor:"#fff",
    textAlign:"center",
  },
  buttonLog:{
    backgroundColor:"#D5E8D4",
    marginTop:12,
    width:250,
  },
  text:{
    color:'red',
  },
});
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Group" component={Group}/>
        <Stack.Screen name="ViewGroup" component={ViewGroup}/>
        <Stack.Screen name= "Добавить группу" component={AddGroup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
