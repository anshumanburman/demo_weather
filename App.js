/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useSelector,useDispatch,shallowEqual, Provider} from 'react-redux';
import {fetchData} from './src/actions/actions'
const list = [{name: "jsjs"},{name: "xs"}]

import configureStore from './src/configStore';



const store = configureStore();

const App = () =>  {
const disptach = useDispatch();
const {response}  = useSelector(store => ({response : store.fetchReducer}))
 
useEffect(()=> {
disptach(fetchData())
},[])
useEffect(()=>{
  console.log("response :::::: ",response);
  
})
  const resnderItem = (item, index) => {
    return (
      <TouchableOpacity style={styles.item}>
<Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
   <>
      <Provider store={store}>
      <SafeAreaView style={styles.safearea}>
        <View>
        <FlatList 
        data={list}
        renderItem={({item,index})=>resnderItem(item, index)}
        style ={{flex:1}}
        />
        </View>
      </SafeAreaView>
      
      </Provider>
   </>
  );
};

const styles = StyleSheet.create({
  safearea : {
    flex:1
  },
  item: {
    padding:10,
    backgroundColor:'grey',
    marginBottom:1
  }
});

export default App;
