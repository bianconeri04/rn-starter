import React, {useReducer} from "react";
import {View, Text, StyleSheet} from "react-native";
import ColorItem from "../../components/ColorItem";

const STEP = 25;

const reducer = (state, action) => {
    let color = 0;
    switch(action.type) {
        case "INC_RED":
            color = state.red+STEP > 255 ? 255 : state.red+STEP;
            return {...state, red: color};
        case "DEC_RED":
            color = state.red-STEP < 0 ? 0 : state.red-STEP;
            return {...state, red: color};
        case "INC_GREEN":
            color = state.green+STEP > 255 ? 255 : state.green+STEP;
            return {...state, green: color};
        case "DEC_GREEN":
            color = state.green-STEP < 0 ? 0 : state.green-STEP;
            return {...state, green: color};
        case "INC_BLUE":
            color = state.blue+STEP > 255 ? 255 : state.blue+STEP;
            return {...state, blue: color};
        case "DEC_BLUE":
            color = state.blue-STEP < 0 ? 0 : state.blue-STEP;
            return {...state, blue: color};
        default:
            return state;
    }
};

const ColorScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});

    return (
        <View>
            <View style={style.view}>
                <Text style={style.text}>Color {state.red}, {state.green}, {state.blue} result:</Text>
                <View style={{width:"100px", 
                    height:"100px", 
                    margin:"0px auto", 
                    backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`}}>
                </View>
            </View>
            <ColorItem color="Red" 
                onIncrease={()=>{dispatch({type:"INC_RED"})}} 
                onDecrease={()=>{dispatch({type:"DEC_RED"})}} />
            <ColorItem color="Green"
                onIncrease={()=>{dispatch({type:"INC_GREEN"})}}
                onDecrease={()=>{dispatch({type:"DEC_GREEN"})}} />
            <ColorItem color="Blue"
                onIncrease={()=>{dispatch({type:"INC_BLUE"})}}
                onDecrease={()=>{dispatch({type:"DEC_BLUE"})}} />
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        fontSize: 20
    },
    view:{
        alignItems: 'center'
    }
});

export default ColorScreen;