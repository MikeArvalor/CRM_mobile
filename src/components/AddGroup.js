import * as React from 'react';
import { useState } from 'react'
import { View, Text,TextInput, Button,StyleSheet,Icon, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DatePicker from 'react-native-neat-date-picker'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './TabNavigator'
import SelectDropdown from 'react-native-select-dropdown'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';
  
const subject = ["Python", "QA", "Frond-end"]
function Home({ navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }


  const onCancel = () => {

    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {

    setShowDatePicker(false)
    
   
    
  }
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.firstBlock}>
          <View style={styles.cardBlock}>
            <View style={styles.leftBlock}>
              <Text style={styles.leftBlockText}>Курс</Text>
              <Text style={styles.leftBlockText}>Дата начала</Text>
              <Text style={styles.leftBlockText}>Дата окончания</Text>
              <Text style={styles.leftBlockText}>Преподаватель</Text>
              <Text style={styles.leftBlockText}>Состав группы</Text>
            </View>
            <View style={styles.rightBlock}>
            <Text style={styles.leftBlockText}>
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
                /></Text>
              <Text style={styles.leftBlockText}>
                <View>
                <Button title={'Выбрать дату'} onPress={openDatePicker}/>
                <DatePicker
                  isVisible={showDatePicker}
                  mode={'single'}
                  onCancel={onCancel}
                  onConfirm={onConfirm}
                />
              </View>
              </Text>
              <View style={styles.leftBlockText}>
              <View>
                <Button title={'Выбрать дату'} onPress={openDatePicker}/>
                <DatePicker
                  isVisible={showDatePicker}
                  mode={'single'}
                  onCancel={onCancel}
                  onConfirm={onConfirm}
                />
              </View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                value={onConfirm}
              />
              </View>
              <Text style={styles.leftBlockText}>
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
                /></Text>
              <Text style={styles.leftBlockText}>10 человек</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.buttonBlock}>
          <TouchableOpacity
          style={styles.buttonPrev}>
            <Text>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNext}>
            <Text>Создать группу</Text>
          </TouchableOpacity>
        </View>   
        
      </ScrollView>
      <BottomTabNavigator props={navigation} />
    </View>
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
      {/* <Image source={require('./assets/Group/logo.png')} style={{height:30,width:200}} {...props}/> */}
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

  },
  buttonBlock:{
    
   marginBottom:100,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:20,
    marginRight:20
  },
  buttonPrev:{
    width:170,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#D5E8D4",
    padding:10
  },
  buttonNext:{
    width:170,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#D5E8D4",
    padding:10
 
  },
  cardBlock:{
    display:"flex",
    flex:1,
    flexDirection:"row",
    margin:20,
    justifyContent:"space-between",
   
  },
  leftBlockText:{
    fontSize:20,
    marginBottom:50
  },

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
export default function AddGroup() {
  return (
     <MyDrawer/>
    
  );
}

