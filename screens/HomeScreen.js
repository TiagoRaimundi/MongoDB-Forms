import React, { useState } from 'react';
import { Text, View, SafeAreaView, Platform, ScrollView, Pressable, TextInput, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const HomeScreen = () => {
  const list = [
    {
      id: "0",
      image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
      name: "Home",
    },
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
      name: "Deals",
    },
    {
      id: "3",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
      name: "Electronics",
    },
    {
      id: "4",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
      name: "Mobiles",
    },
    {
      id: "5",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
      name: "Music",
    },
    {
      id: "6",
      image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
      name: "Fashion",
    },
  ];


  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "white", borderRadius: 3, flex: 1, height: 38 }}>
      <ScrollView>
      <View
            style={{
              backgroundColor: "#00CED1",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 7,
                gap: 10,
                backgroundColor: "white",
                borderRadius: 3,
                height: 38,
                flex: 1,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
              <TextInput placeholder="Search Amazon.in" />
            </Pressable>

            <Feather name="mic" size={24} color="black" />
          </View>
              
              <View style={{flexDirection:'row', alignItems:'center', gap: 5, padding: 10, backgroundColor:"#AFEEEE"}}>
              <EvilIcons name="location" size={24} color="black" />
              <Pressable>
        
                <Text style={{fontSize: 13, fontWeight: "500"}}>Brazil, Xanxerê - 890000</Text>
              </Pressable>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />

              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {list.map((item, index) =>(
                  <Pressable>
                    <Image style={{resizeMode: 'contain', width: 50, height: 50}} source={{uri:item.image}}/>
                    <Text style={{fontWeight: "500", marginTop: 5, fontSize: 12, alignItems: 'center'}}>{item?.name}</Text>
                  </Pressable>
                ))}

              </ScrollView>
        
    
          
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
