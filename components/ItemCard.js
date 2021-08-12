import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import StarRating from "react-native-star-rating";

export default function ItemCard(){
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/jacket1.jpg")} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Leather Jacket Classic</Text>
          <View style={styles.rating}>
            <StarRating rating={3} starSize={12} starStyle={{marginRight:2,}} fullStarColor="#f1c40f" />
          </View>
          <Text style={styles.price}>$129</Text>
        </View>
      </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:0.6,
        marginHorizontal:20,
        marginVertical:10,
    },
    image:{
        // position:"relative",
        // left:-5,
        // bottom:10,
        width:-30,
        height:90, 
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderRightWidth: 100,
        borderTopWidth:100,
        
    },
    imageContainer:{
      position:"relative",
      transform:[{rotateX: "-20deg"}, {rotateY:"-10deg"}] ,
      backgroundColor:"#fff",
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      marginBottom:-5,
      marginTop:-5,
      marginEnd:10,

    },
    price:{
        marginTop:10,
        fontSize:20,
        fontWeight:"bold",
        color:"#9582f5"
    },
    title:{
        fontSize:16,
        fontWeight:"bold"
    },
    details:{
      justifyContent:"center",
    },
    rating:{
      alignItems:"flex-start",
      marginTop:6,
    }
})