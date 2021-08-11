import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { AirbnbRating } from "react-native-ratings";
import { StarRating } from "react-native-star-rating";

export default function ItemCard(){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/jacket1.jpg")} />
        <View>
          <Text style={styles.title}>Leather Jacket Classic</Text>
          <View>
            
          </View>
          <Text style={styles.price}>$129</Text>
        </View>
      </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1,
        marginHorizontal:20,
    },
    image:{
        width:140,
        height:140, 
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderRightWidth: 50,
       
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
        color:"#9582f5"
    },
    title:{
        fontSize:16,
        fontWeight:"bold"
    }
})