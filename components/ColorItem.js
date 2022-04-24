import React from "react";
import {View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";

const ColorItem = ({color, onIncrease, onDecrease}) => {
    return (
        <View style={style.fixToText}>
            <TouchableOpacity onPress={()=>{onDecrease()}}>
                <Image style={style.imgButton} source={require('../assets/minus-64.png')} />
            </TouchableOpacity>
            <Text style={style.text}>{color}</Text>
            <TouchableOpacity onPress={()=>{onIncrease()}}>
                <Image style={style.imgButton} source={require('../assets/plus-64.png')} />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        fontSize: 20,
        marginTop: 10
    },
    imgButton: {
        width: 50,
        height: 50,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
});

export default ColorItem;