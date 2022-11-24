import React, { useState } from "react";
import { TextInput, Text, Button, View, StyleSheet, Alert } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(val) {
    setEnteredNumber(val);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    var chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Please type numbers between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.indButton}>
          <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
        </View>
        <View style={styles.indButton}>
          <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontWeight: "bold",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  indButton: {
    flex: 1,
  },
});
