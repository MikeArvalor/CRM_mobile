import * as React from 'react';
import { View, Text, Button,StyleSheet,Icon, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectDropdown from 'react-native-select-dropdown'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';


function Home({ navigation }) {

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.firstBlock}>
      <View style={styles.groupTitleBlock}>
        <Text style={styles.groupTitle}>Группа № 201</Text>
      </View>
    </View>
    <View style={styles.groupStudent}>
      <View style={styles.groupStudentTitle}>
        <Text style={styles.nameStudent}>Joh Johan</Text>
        <ImageBackground source={require('./assets/envelope.png')} resizeMode="cover" style={styles.image} />
        <ImageBackground source={require('./assets/user.png')} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.tableStudent}>
        <View style={styles.leftBlock}>
          <Text style={styles.leftBlockText}>Телефон</Text>
          <Text style={styles.leftBlockText}>Менеджер</Text>
          <Text style={styles.leftBlockText}>Успеваемость</Text>
          <Text style={styles.leftBlockText}>Сумма оплаты</Text>
          <Text style={styles.leftBlockText}>Оплаты внесены</Text>
          <Text style={styles.leftBlockText}>Статус оплаты</Text>
          <Text style={styles.leftBlockText}>Номер договора</Text>
        </View>
        <View style={styles.rightBlock}>
        <Text style={styles.leftBlockText}>+375 44 252 44 58</Text>
        <Text style={styles.leftBlockText}>Алексей</Text>
        <Text style={styles.leftBlockText}>70%</Text>
        <Text style={styles.leftBlockText}>1500</Text>
        <Text style={styles.leftBlockText}>600</Text>
        <Text style={styles.leftBlockText}>не оплачено</Text>
        <Text style={styles.leftBlockText}>1488</Text>
        </View>
      </View>
      </View>
      <View style={styles.firstBlock}>
      <View style={styles.groupTitleBlock}>
        <Text style={styles.groupTitle}>Группа № 201</Text>
      </View>
    </View>
    <View style={styles.groupStudent}>
      <View style={styles.groupStudentTitle}>
        <Text style={styles.nameStudent}>Олег Попов</Text>
        <ImageBackground source={require('./assets/envelope.png')} resizeMode="cover" style={styles.image} />
        <ImageBackground source={require('./assets/user.png')} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.tableStudent}>
        <View style={styles.leftBlock}>
          <Text style={styles.leftBlockText}>Телефон</Text>
          <Text style={styles.leftBlockText}>Менеджер</Text>
          <Text style={styles.leftBlockText}>Успеваемость</Text>
          <Text style={styles.leftBlockText}>Сумма оплаты</Text>
          <Text style={styles.leftBlockText}>Оплаты внесены</Text>
          <Text style={styles.leftBlockText}>Статус оплаты</Text>
          <Text style={styles.leftBlockText}>Номер договора</Text>
        </View>
        <View style={styles.rightBlock}>
        <Text style={styles.leftBlockText}>+375 44 252 44 58</Text>
        <Text style={styles.leftBlockText}>Алексей</Text>
        <Text style={styles.leftBlockText}>70%</Text>
        <Text style={styles.leftBlockText}>1500</Text>
        <Text style={styles.leftBlockText}>600</Text>
        <Text style={styles.leftBlockText}>не оплачено</Text>
        <Text style={styles.leftBlockText}>1488</Text>
        </View>
      </View>
      </View>
      <View style={styles.underTitle}>
          <Text style={styles.underTitleText}>Преподаватель</Text>
        </View>
      <View style={styles.underStudent}>
        
        <View style={styles.underLeft}>
          <Text style={styles.leftBlockText}>Наименование курса:</Text>
          <Text style={styles.leftBlockText}>Преподаватель группы:</Text>
          <Text style={styles.leftBlockText}>Средняя успеваемость:</Text>
        </View>
        <View style={styles.underRight}>
        <Text style={styles.leftBlockText}>Python</Text> 
        <Text style={styles.leftBlockTextPrep}>Папа Леша 
        <ImageBackground source={require('./assets/envelope.png')} resizeMode="cover" style={styles.imageUnder} />
        <ImageBackground source={require('./assets/user.png')} resizeMode="cover" style={styles.imageUnder} /></Text>
        <Text style={styles.leftBlockText}>70%</Text>
        </View>
      </View>
      <Button
       title="Смотреть расписание" 
       />
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
    display:"flex",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
   
  },
  underTitle:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    backgroundColor:"#D5E8D4",
    flex:1,
    marginBottom:20
  },
  
  underTitleText:{
  fontSize:20,
  paddingTop:20,
  paddingBottom:20
  },
  underStudent:{
    display:"flex",
    marginTop:20,
    flexDirection:"row",
    marginLeft:20,
    justifyContent:"space-between",
  },
  groupStudentTitle:{
    display:"flex",
    flex:1 ,
    flexDirection:"row"
  },
  tableStudent:{
    marginLeft:20,
    marginRight:20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  leftBlock:{
    
  },
  leftBlockText:{
    fontSize:18,
    marginBottom:20
  },
  leftBlockTextPrep:{
    fontSize:18,
    marginTop:-10,
    marginBottom:20
  },
  groupTitleBlock:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    backgroundColor:"#D5E8D4",
    flex:1,
    marginBottom:20
  },
  groupTitle:{
    fontSize:20,
   marginTop:20,
   marginBottom:20
  },
  secondBlock:{
    marginTop:20,
    width:'100%'
  },
  image:{
    width:30,
    height:30,
    marginLeft:10,
    justifyContent: "center",
    marginBottom:20,
    backgroundColor: "#000000c0"
  },
  imageUnder:{
    width:30,
    height:30,
    marginLeft:10,
    marginTop:10,
    justifyContent: "center",
    marginBottom:20,
    backgroundColor: "#000000c0",
  },
  titleBlock:{
    fontSize:20,
    marginTop:20,
    marginBottom:20,
    padding:10,
    backgroundColor:"#D5E8D4",
    
  },
  groupStudent:{

  },
  nameStudent:{
    fontSize:20,
    marginLeft:20
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
export default function AddGroup() {
  return (
     <MyDrawer/>
    
  );
}

