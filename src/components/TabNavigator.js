import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from './Main'
import { View ,Button,Text} from "react-native";
// import { View, Text, Button,StyleSheet, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
// const Tab = createBottomTabNavigator();


const BottomTabNavigator =(props)=>{
    return(<View>
        <Text>hello</Text>
        <Button title="ok" onPress={()=>props.props.navigate('Group')} />
        </View>
    )
}

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