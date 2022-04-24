import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = (props) => {
  
  return (
    <View>
      <Text style={styles.text}>Select the app that you want to run.</Text>
      <Button title="Counter App" onPress={() => props.navigation.navigate("Counter")} />
      <Button title="Color App" onPress={() => props.navigation.navigate("Color")} />
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default HomeScreen;
