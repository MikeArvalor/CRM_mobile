import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Главная</Text>
      
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
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Расходы</Text>
    </View>
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

export default function Main() {
  return (
      <MyDrawer />
    
  );
}
