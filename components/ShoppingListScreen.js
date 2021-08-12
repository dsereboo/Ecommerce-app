import React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ItemCard from "./ItemCard";

export default function ShoppingListScreen (){
    return(
        <View style={styles.container}>
           <View style={styles.topNavigation}>
                <View style={styles.arrow}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
                <View style={[styles.arrow, styles.cart]}>
                    <MaterialCommunityIcons name="cart-outline" size={24} color="#9582f5" />
                </View>
           </View>
           <View style={styles.titleContainer}>
               <Text style={styles.itemTitle}>Women's Jackets</Text>
           </View>
           <View style={styles.inputContainer}>
               <TextInput placeholder="Search Jacket"/>
               <Text style={[styles.filter, styles.purple]}>Filter</Text>
           </View>
           <ItemCard/>
           <ItemCard/>
           <ItemCard/>
           <ItemCard/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:"#F0F0F0",
    },
    topNavigation:{
        flex:0.7,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        alignItems:"center",
        marginHorizontal:20,
    },
    titleContainer:{
        flex:0.3,
        marginHorizontal:20,
    },
    inputContainer:{
        flex:0.4,
        flexDirection:"row",
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:12,
        paddingRight:12,
        borderRadius:15,
        marginHorizontal:20,
        marginBottom:15,
    },
    arrow:{
        backgroundColor:"#fff",
        borderRadius:50,
        padding:12,
    },
    cart:{
        padding:10,
    },
    itemTitle:{
        fontSize:26,
        fontWeight:"bold",
    },
    filter:{
        fontSize:14,
        fontWeight:"bold"
    },
    purple:{
        color:"#9582f5",
    }

})