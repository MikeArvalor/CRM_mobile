import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from './Main'
import { View ,Button,Text, StyleSheet,ImageBackground, ScrollView, TouchableOpacity} from "react-native";
// import { View, Text, Button,StyleSheet, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
// const Tab = createBottomTabNavigator();


const BottomTabNavigator =(props)=>{
    return(
       
        <View style={styles.tabBlock}>
            <ImageBackground source={require('./assets/chat.png')} onPress={()=>props.props.navigate('Group')} resizeMode="cover" style={styles.button1}  ></ImageBackground>
            <ImageBackground source={require('./assets/user_cab.png')} onPress={()=>props.props.navigate('Group')} resizeMode="cover" style={styles.button2}  ></ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
tabBlock:{
    width:'100%',
    display:"flex",
    position: 'absolute', 
    left: 0,
    backgroundColor:"#B0E3E6",
     right: 0, bottom: 0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

},

button1:{
    paddingTop:30,
    paddingBottom:20,
    marginLeft:110,
    width:50,
    height:50,
    
    
    
},
button2:{
    marginRight:110,
    width:50,
    height:50,
    paddingTop:30,
    paddingBottom:20,
   
},

})
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//         {/* <TabNavigator /> */}
//       <Tab.Screen name="Home" component={Main} />
//       <Tab.Screen name="Contact" component={Main} />
//     </Tab.Navigator>
//   );
// };

export default BottomTabNavigator;
