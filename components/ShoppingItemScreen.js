import React from "react"
import { Image, Text, View,StyleSheet, } from "react-native"
import Sizes from "./Sizes"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import StarRating from "react-native-star-rating";

export default function ShoppingItemScreen (){
    return (
      <View style={styles.container}>
        <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <View style={[styles.cartIcon]}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color="#9582f5"
            />
          </View>
          <View style={styles.heart}>
            <Entypo name="heart-outlined" size={24} color="#9582f5" />
          </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/jacket1.jpg")}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Red Leather Jacket</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewText}>Review:</Text>
          <StarRating
            rating={3}
            starSize={15}
            fullStarColor="#f1c40f"
            starStyle={{ marginRight: 5 }}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.horizontal}></View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Aero inspired design crafted with the finest leather sourced from
            eco-friendly fibres
          </Text>
        </View>
        <View style={styles.materials}>
          <View style={styles.sub}>
            <Text style={styles.materialsText}>
              Material: 91% nappa, 9% elastene
            </Text>
          </View>
        </View>
        <Sizes />
        <View style={styles.checkout}>
          <View>
            <Text style={[styles.whiteText, styles.checkoutTitle]}>
              Total Amount
            </Text>
            <Text style={[styles.whiteText, styles.checkoutPrice]}>$110</Text>
          </View>
          <View style={styles.cart}>
            <Text style={[styles.whiteText, styles.cartText]}>Add to Cart</Text>
          </View>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:"#F0F0F0",
        
    },
    checkout:{
        flex:0.7,
        backgroundColor:"#9582f5",
        borderRadius:10,
        flexDirection:"row",
        padding:15,
        marginHorizontal:20,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20,
    },
    checkoutPrice:{
        fontWeight:"bold",
        fontSize:22, 
    },
    checkoutTitle:{
        fontSize:13,
    },
    whiteText:{
        color:"#fff"
    },
    cart:{
        backgroundColor:"#5239cc",
        padding:10,
        borderRadius:10,
    },
    cartText:{
        fontWeight:"bold"
    },
    materials:{
        backgroundColor:"#fff",
        flex:0.6,
        justifyContent:"center",
        alignItems:"flex-start",
        marginVertical:20  
    },
    sub:{
       marginHorizontal:20,
    },
    materialsText:{
       color:"#9582f5",
       fontWeight:"bold"
    },
    description:{
        flex:0.5,
        marginHorizontal:20,
    },
    descriptionText:{
        fontSize:14,
       
    },
    image:{
        flex:1,
        width: 250,
        height: 250,
        borderRadius:20,
        // opacity:0.7,
    },
    imageContainer:{
        flex:5,
        // marginHorizontal:10,
        marginRight:20,
        marginLeft:15,
        alignItems:"center",
        position:"relative",
        transform:[{rotateX: "-20deg"}, {rotateY:"-10deg"}] ,
        backgroundColor:"#fff",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:15,
        marginBottom:10,
        marginTop:50,
    },
    titleContainer:{
        flex:0.5,
        marginHorizontal:20,
    },
    pageTitle:{
        fontSize:26,
        fontWeight:"bold",
    },
    horizontal:{
        marginHorizontal:20,
        flexDirection:"row",
        width:60,
        backgroundColor:"#9582f5",
        padding:3,
    },
    horizontalContainer:{
        flex:0.5,
        justifyContent:"center"
    },
    review:{
        flex:0.4,
        flexDirection:"row",
        marginHorizontal:20,
        alignItems:"center"
    },
    reviewText:{
        fontSize:16,
        marginRight:5,
    },
    arrow:{
        position:"absolute",
        top:40,
        left:14,
        backgroundColor:"#D8D8D8",
        borderRadius:50,
        padding:15,
        zIndex:100
    },
    cartIcon:{
        backgroundColor:"#D8D8D8",
        padding:14,
        borderRadius:50,
        position:"absolute",
        right:15,
        top:40,
        zIndex:100,
    },
    heart:{
        backgroundColor:"#D8D8D8",
        padding:14,
        borderRadius:50,
        position:"absolute",
        right:15,
        top:110,
        zIndex:20
    }
   
})