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
        <View style={styles.imageContainer}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <Image
            style={styles.image}
            source={require("../assets/jacket1.jpg")}
          />
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
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Red Leather Jacket</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewText}>Review:</Text>
          <StarRating rating={3} starSize={15} fullStarColor="#f1c40f" starStyle={{marginRight:5}}/>
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
        flex:0.8,
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
        fontSize:25, 
    },
    checkoutTitle:{
        fontSize:15,
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
        flex:0.8,
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
        flex:0.8,
        marginHorizontal:20,
    },
    descriptionText:{
        fontSize:16,
       
    },
    image:{
        width: 250,
        height: 250,
        borderRadius:20,
        opacity:0.4
    },
    imageContainer:{
        flex:5,
        alignItems:"center",
        marginTop:60,
    },
    titleContainer:{
        flex:0.8,
        marginHorizontal:20,
    },
    pageTitle:{
        fontSize:28,
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
        flex:0.5,
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
        left:20,
        backgroundColor:"#fff",
        borderRadius:50,
        padding:15,
    },
    cartIcon:{
        backgroundColor:"#fff",
        padding:14,
        borderRadius:50,
        position:"absolute",
        right:20,
    },
    heart:{
        backgroundColor:"#fff",
        padding:14,
        borderRadius:50,
        position:"absolute",
        right:20,
        top:70,
    }
   
})