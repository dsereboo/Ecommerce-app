import React from "react"
import { StyleSheet, Text,View } from "react-native"

export default function Sizes (){
    return(
        <View style={styles.container}>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizesText}>XS</Text>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizesText}>S</Text>
            </View>
            <View style={[styles.sizeContainer,styles.selected, ]}>
                <Text style={[styles.selectedText, styles.sizesText]}>M</Text>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizesText}>L</Text>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizesText}>XL</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        marginHorizontal:20,
        // marginBottom:40,
        // marginTop:10,
    },
    selected:{
        backgroundColor:"#9582f5"
    },
    selectedText:{
        color:"#fff"
    },
    sizeContainer:{
        backgroundColor:"#fff",
        flex:0.15,
        width:40,
        height:40,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        marginRight:10,
     
      
    },
    sizesText:{
        fontSize:16,
        fontWeight:"bold"
    }

})