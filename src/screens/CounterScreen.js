import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={style.title}>Counter App.</Text>
            <Text style={style.text}>Counter: {counter}</Text>
            <View style={style.fixToText}>
                <Button title="Minus" onPress={() => setCounter(counter-1)} />
                <Button title="Plus" onPress={() => setCounter(counter+1)} />                
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    title:{
        fontSize: 18
    },
    text:{
        textAlign: 'center'
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
});

export default CounterScreen;