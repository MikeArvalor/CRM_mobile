import * as React from 'react';
import { View, Text, Button,StyleSheet, ImageBackground,TouchableOpacity, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
    
     <ImageBackground source={require('./assets/Group.png')} resizeMode="cover" style={styles.image}>
       <Text style={styles.text}>
         Группы
       </Text>
     </ImageBackground>
     <ImageBackground source={require('./assets/raspisaniy.png')} resizeMode="cover" style={styles.image}>
       <Text style={styles.text}>
         Расписание
       </Text>
     </ImageBackground>
     <ImageBackground source={require('./assets/teachers.png')} resizeMode="cover" style={styles.image}>
       <Text style={styles.text}>
         Преподаватели
       </Text>
     </ImageBackground>
     <ImageBackground source={require('./assets/lid.png')} resizeMode="cover" style={styles.image}>
       <Text style={styles.text}>
         Лиды
       </Text>
     </ImageBackground>
     <View style={styles.newsBlock}>
       <View style={styles.headerNews} >
         <Text style={styles.headerNewsText}>Наши новости</Text>
       </View>
       <View style={styles.underNews}>
          <View style={styles.underNewsText}>
            <Text style={styles.underNewsText1}>Подвинься, Tiguan? Прячьтесь, конкуренты? Тест-драйв нового Volkswagen Taos</Text>
            <Text style={styles.underNewsText2}>В этом году новые модели кроссоверов словно боровики и подосиновики — появляются едва ли не ежедневно. Но особенно тесно становится на «поляне» компактных SUV....</Text>
          </View>
          <TouchableOpacity
          style={styles.button}>
          <Text>Смотреть</Text>
      </TouchableOpacity>
           <View style={styles.underNewsText}>
            <Text style={styles.underNewsText1}>Налоговая занялась маршрутками: пассажиры без билетов и загадочный рост выручки</Text>
            <Text style={styles.underNewsText2}>Управление оперативных мероприятий инспекции Министерства по налогам и сборам в своем телеграм-канале сообщило о начале проверке маршрутных такси. «Маршрут 1280-ТК (ДС „Уручье-4“....</Text>
          </View>
          <TouchableOpacity
          style={styles.button}>
          <Text>Смотреть</Text>
          </TouchableOpacity>
       </View>
     </View>
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
function img(){
  return(
    <View>
      <Image source={require('./assets/logo.png')}/>
    </View>
  )
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
  newsBlock:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  underNewsText:{
    textAlign:"left",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    backgroundColor:"#F3E9EC",
    marginBottom:20
  },
  
  underNewsText1:{
  textAlign:"left",
  fontWeight:"bold",
  fontSize:24,
  padding:5,

  justifyContent:"flex-end"  
},
underNewsText2:{
  textAlign:"left",
padding:5,
  fontSize:20,
  justifyContent:"flex-end",
  marginBottom:10
},
  headerNewsText:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    fontSize:24,
    marginBottom:20,
    marginTop:10
  },
  headerNews:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
 
  },
  firstBlock:{
    display:"flex",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
    margin:10
    
  },
  image: {
    width:190,
    height:190,
    justifyContent: "center",
    marginBottom:20,
    backgroundColor: "#000000c0"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom:20
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

