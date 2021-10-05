import * as React from 'react';
import { View, Text, Button,StyleSheet, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectDropdown from 'react-native-select-dropdown'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';
const subject = ["Python", "QA", "Frond-end"]
function Home({ navigation }) {

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.firstBlock}>
      <View style={styles.firstBlockLeft}>
        <Text style={styles.text1}>Группы</Text>
        <SelectDropdown
          data={subject}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
        </View> 
        <View style={styles.firstBlockRight}>
          <Text style={styles.text1}>Поиск по номеру группы</Text>
          <SelectDropdown
          style={styles.selectdown}
          width='100'
          data={subject}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
        </View>
        <View style={styles.secondBlock}>
          <View >
            <Text style={styles.titleBlock} >Python</Text>
          </View>
          <View style={styles.cardSecondBlock}>
            <View style={styles.cardBlock}  >
              <Text onPress={() => navigation.navigate('ViewGroup')}>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.cardBlock}>
              <Text>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.cardBlock}>
              <Text>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.addBlock}>
            <TouchableOpacity
              >
              <Text onPress={()=> navigation.navigate('Добавить группу')}>Создать группу</Text>
           </TouchableOpacity>
            </View>
          </View>
        </View>   
        <View style={styles.secondBlock}>
          <View >
            <Text style={styles.titleBlock}>Front-end</Text>
          </View>
          <View style={styles.cardSecondBlock}>
            <View style={styles.cardBlock}>
              <Text>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.cardBlock}>
              <Text>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.cardBlock}>
              <Text>Группа №201</Text>
              <Text>статус - активна</Text>
              <Text>старт: 01 01 2021</Text>
              <Text>окончание: 01 04 2021</Text>
              <Text>состав:10 чел</Text>
            </View>
            <View style={styles.addBlock}>
            <TouchableOpacity
              style={styles.addBlockButton}>
              <Text>Создать группу</Text>
           </TouchableOpacity>
            </View>
          </View>
        </View>  
        <BottomTabNavigator props={navigation} />
    </View>
    </ScrollView>
    
  );
  
}
function Timetable(){
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text>Расписание</Text>
        </View>
    )
}
function Group() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Группы</Text>
    </View>
  );
}
function Chat(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Чат</Text>
        </View>
    )
}
function Mentors(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Преподаватели</Text>
        </View>
    )
}
function Expenses(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Расходы</Text>
    </View>
  )
}
function ProcessingRequest(){
    return(
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text>Обработка запроса</Text>
    </View>
    )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image source={require('./assets/logo.png')} style={{height:30,width:200}} {...props}/>
      <DrawerItemList {...props} />
      
      <DrawerItem
        label="Закрыть меню"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
      <Drawer.Screen name="Главная" component={Home} />
      <Drawer.Screen name="Список групп" component={Group} />
      <Drawer.Screen name="Расписание" component={Timetable}/>
      <Drawer.Screen name="Чат" component={Chat}/>
      <Drawer.Screen name="Преподаватели" component={Mentors}/>
      <Drawer.Screen name="Расходы" component={Expenses}/>
      <Drawer.Screen name="Обработка запроса" component={ProcessingRequest}/>
    </Drawer.Navigator>
  );
}
/////////styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  firstBlock:{
    display:"flex",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
   
  },
  secondBlock:{
    marginTop:20,
    width:'100%'
 
  },
  titleBlock:{
    fontSize:20,
    marginTop:20,
    marginBottom:20,
    padding:10,
    backgroundColor:"#D5E8D4",
    
  },
  cardSecondBlock:{
display:"flex",
flexWrap:"wrap",
flexDirection:"row",
justifyContent:"space-between",
marginLeft:10,


  },
  addBlockButton:{
    width:130,
    backgroundColor:"#D5E8D4",
    textAlign:"center",
    justifyContent:"center",
    padding:10,
    borderRadius:10
  },
  cardBlock:{
    marginBottom:20,
    borderWidth:1,
    padding:10,
    marginRight:10,
    backgroundColor:"#B0E3E6",
    borderRadius:20,
    width:190
    
  },
  addBlock:{
    marginBottom:20,
    borderWidth:1,
    padding:10,
    marginRight:10,
    backgroundColor:"#B0E3E6",
    borderRadius:20,
    width:190,
    justifyContent:"center",
    alignItems:"center"
  },
  
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom:20
  },
  text1:{
  marginBottom:20,
  marginTop:20,
  fontSize:16,
  paddingLeft:10
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    paddingTop:55,
    paddingBottom:55,
    
   
  }
});
// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Main} />
//       <Tab.Screen name="Contact" component={Main} />
//     </Tab.Navigator>
//   );
// };
export default function GroupFunc() {
  return (
     <MyDrawer/>
    
  );
}

